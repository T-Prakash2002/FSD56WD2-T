
const select=document.querySelectorAll('.btn');
const result=document.querySelector("#result")


const calc=(val)=>{
    
   if(val==="C" || val=="Del"){
        if(val==='C'){
            result.value="";
        }
        else{
           let x=result.value.slice(0,-1);

            result.value=x;
        }

   }
   else if(val==="="){
    try{
        const finalResult=eval(result.value);
        result.value=finalResult;
    }
    catch(e){
        result.value="ERROR";
    }

   }
    
    else{
        result.value+=val;
    }
}



select.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        calc(e.target.textContent);
    })
    
});

result.addEventListener('keypress',(event)=>{
    
    var keyCode = event.keyCode || event.which;

    if ((keyCode >= 48 && keyCode <= 57) ||  
        (keyCode >= 96 && keyCode <= 105) || 
        keyCode == 8 || keyCode == 46 ||     
        keyCode == 37 || keyCode == 39) {   
        
    } else {
        
        event.preventDefault();
        alert("Only numbers are allowed!");
    
    }

})
