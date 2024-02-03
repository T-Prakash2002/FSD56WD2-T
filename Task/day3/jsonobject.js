
let obj1={name:"person 1",age:5,city:"trichy"}

let obj2={age:5,name:"person 1",city:"trichy"}



var key1=Object.keys(obj1).sort();
var key2=Object.keys(obj2).sort();

var value1=Object.values(obj1).sort();
var value2=Object.values(obj2).sort();

if (JSON.stringify(key1)==JSON.stringify(key2)){
    if(JSON.stringify(value1)==JSON.stringify(value2)){
        console.log("Properties keys and values are same");
    }
    else{
        console.log("Properties Keys are same ,but values not same");
    }
}
else if(JSON.stringify(value1)==JSON.stringify(value2)){

    console.log("Properties values are same,keys not same");
}
else{
    console.log("Properties Keys and values are not same");
}
