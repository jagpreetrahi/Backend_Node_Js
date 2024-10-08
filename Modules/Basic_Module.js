// I am taking a simple linear search example for understand the concept of it 

function linearsearch(arr , x){
 
    for(let i = 0; i<arr.length; i++){

        if(arr[i] === x){
            return i;
        }
        
    }

    return -1;
}


//This is a default export so i can use any name at a time of importing , we can also return classes and variable also by module exports.

// For named exports i have  to give the name same which use at time of export  to import
module.exports  = linearsearch;  