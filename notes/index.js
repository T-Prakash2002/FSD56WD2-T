let txta=document.getElementById('txtarea');
let c=document.getElementById('count');


txta.addEventListener('input',(e)=>{
    let message=e.target.value;
    console.log(message.length);
    c.innerText=message.length;
});

