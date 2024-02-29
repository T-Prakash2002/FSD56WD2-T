value="HELLO"

let repeat=(v,callback)=>{
    console.log(`${v}`);
    callback(v);
}

let a=()=>{
    console.log(`${v}`)
}
repeat(value,a);