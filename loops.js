let i;

for(i = 1; i <= 5; i++){
    console.log('value of i is:'+i);
}

/****************FOR in *********************** */
// create a array

let fruits =['Apple','Bnanaa','Grapes'];
let x;

for(x in fruits){
    console.log(fruits[x])
}
/************for of ************************ */
for(x of fruits){
    console.log(x);
}