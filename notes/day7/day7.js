//map


let numbers=[3,1,5,6,7,8];
/**

let n=numbers.map(square);

function square(value){
    return value**2;
}

console.log(n);

console.log(numbers.map(function square(value){
    return value**2;
}));

*/
// Reduce..

n=numbers.reduce(reducer);

function reducer(prevalue,curvalue){
    return prevalue+curvalue;
}

console.log(n);

console.log(numbers.reduce((prevalue,curvalue)=>prevalue+curvalue));

