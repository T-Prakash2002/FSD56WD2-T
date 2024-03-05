let json1 ="Prakash";
let json2 =34;
let json3 =true;
let json4 =`{
    "name":"Prakash",
    "Age":22
}`;
let json5 ={
    "name":"Prakash",
    "Age":22
};
let json6=JSON.parse(json4);

console.log(typeof(json4));

console.log(json6.name);

console.log(`Json5 before `+typeof(json5));

let json7=JSON.stringify(json5);

console.log(`Json5 After `+typeof(json7));

console.log(json7)
