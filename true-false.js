//falsy: false, 0 , "" , undefined, null, NaN, 
//truthy: "0"," ", []
const age = 0;
if(age || age == 0){
    console.log("condition is true");
    
}
else{
    console.log("condition is false");
}