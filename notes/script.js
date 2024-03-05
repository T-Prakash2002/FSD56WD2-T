let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Resolved')
    },5000)
})

promise
    .then((message)=>{
        console.log(message);
    })
    .catch((message)=>{
        console.log(message+" error")
    })