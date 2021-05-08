document.getElementById('button3').addEventListener('click', loadRest);
    
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
       




        
                            