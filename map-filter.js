const numbers= [ 3,4,5,6,6,7,8];
// const output = [];
// for(let i=0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);

function square (element){
    return element * element;

}


numbers.map(function(element, index, array){
    console.log(element, index, array);

})


