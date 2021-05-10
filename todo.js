// ######################################## Logout ################################################################
function closeWindow(){
    console.log("Close window fn");
    window.open("index.html","_blank");
    window.close();
}
// ######################################## API Populate ################################################################
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
<strong> ${data.id}) </strong>
${data.title}
<input type="checkbox" name="chk" onclick="return counter()">
</div>
`;
                        
}                    
else {
html +=`
<div>
<strong> ${data.id}) </strong>   
${data.title}
<input type="checkbox"disabled checked>
</div>
`;}

                           
});
                
document.getElementById('result').innerHTML= html; 
})    
}   

// ######################################## Count Checkbox ################################################################

function counter(){               
var a= document.getElementsByName('chk');
var i= 0;
var count;
for(count=0; count<a.length; count++){
if(a[count].checked==true){
i= i+1;
}
}
if(i>=5){

// ######################################## Promise validation ################################################################                            
new Promise ((res, rej) =>{
console.log('entered promise');

if(i<=5){ setTimeout(() => res(),100); console.log('resolve detected');}
if(i>=6){ setTimeout(() => rej(),100);console.log('reject detected');}
}).then(mssg)
.catch(refresh);
                           
function mssg(){

   if(confirm('Congrats!!!! You have selected 5 tasks.Do you want to continue selection?')){
       console.log('OK pressed');}
    else{console.log('Cancel pressed');
    alert(`Good Job!!!! You have completed ${i} tasks`);
    alert('Press OK to Refresh the page');
    location.reload();

    }
   }

}

function refresh(){
    if(confirm(`You have selected ${i} tasks. Do you want to continue selection?`)){
        console.log('OK pressed');
    }
else{ console.log('Cancel pressed');
    alert(`Good Job!!!! You have completed ${i} tasks`);
    alert('Press OK to Refresh the page');
   
// loadRest();

location.reload();


}
}
}


