let p=new Promise((resolve,reject)=>{
    let rn=Math.random()*100;
    if(rn > 50){

        resolve(rn);
    }else{

        reject(rn);
    }
})

p
    .then(
        (r)=>{
            console.log('Resolved..'+r);
        },
        (r)=>{
            console.log('Rejected!..'+r);
        }
    )


console.log(p);

