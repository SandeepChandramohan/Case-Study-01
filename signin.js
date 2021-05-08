
function sandeep()

{

valid= true;


const uname = document.getElementById('username');
const password = document.getElementById('pass');




// ########################################## Email ###########################################################


    if(uname.value.trim() === '') {
     valid = false;
      setErrorFor(uname, 'Username cannot be blank');
    } else if (uname.value.trim()!= "admin") {
      setErrorFor(uname, 'Not a valid username');
      valid = false;

    } 
    else {
      setSuccessFor(uname," ");
    }



// ########################################## Main Pass ###########################################################

    if(password.value.trim() === '') {
            setErrorFor(password, 'Password cannot be blank');
            valid = false;
    }
     else if(password.value.trim() === "12345"){
        setSuccessFor(password," ");
    }
    else{
            setErrorFor(password," Password not valid ");
            valid = false;
    }


// #####################################################################################################

    return valid;
}

// ###################################### Fn for error mssg ###############################################################



    
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-check error';
  small.innerText = message;
}

function setSuccessFor(input,message) {
  const formControl = input.parentElement;
  
  const small = formControl.querySelector('small');
  formControl.className = 'form-check success';

  small.innerText = message;
  // iconControl.className = 'icon ok';
  
}

// ################################################################################################################

    function myfn()
    {
    const x = document.getElementById('pass');
    const y = document.getElementById('hide1');
    const z = document.getElementById('hide2');
 
   if(x.type == "password"){
     x.type ="text";
     y.style.display ="block";
     z.style.display ="none";
   }else {
    x.type ="password";
    y.style.display ="none";
    z.style.display ="block";
   }
 }
// ################################################################################################################
document.getElementsById('button3').addEventListener('click', loadRest);
    
        function loadRest(){
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(res => res.json())
                .then(function(data){
                    let html='';
                    data.forEach(function(data){
                        if(data.completed==false)
                        {
                        html +=`
                        <div>
                        ${data.id})   
                        ${data.title}
                        <input id="counter" type="checkbox">
                        </div>
                        `;
                        
                        

                    }
                
              
                       
                         else {
                            html +=`
                            <div>
                            ${data.id})   
                            ${data.title}
                            <input type="checkbox"disabled checked>
                            </div>
                            `;}

                        
                    });
                
                    document.getElementById('result').innerHTML= html; 
                })              
        }  
