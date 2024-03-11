// function myFunction(){
//     console.log("learning js");   // creating a function with function name myFunction
// }
// myFunction()    // calling the function
 

// function sum(x,y){

//     console.log("the sum of the two number is : "+ (x+y));
// }
// sum(7,9)

//create a calculator


// function cal(x,y){

//     console.log("sum:", x+y);
//     console.log("sub:",x-y);
//     console.log("mul:",x*y);
//     console.log("div:", x/y);
//     console.log("mod:",x%y);
// }
// cal(8,10)

 
// function mul(a,b){

//     let  m = a *b;
//     console.log(m);
//     return m;

// }

// mul(1,90);


// ARROW FUNCTION
// const functionName =(parameter a, paramter b,...)=>{console.log(a+b)}
// functionName()

// const arrowSum=(a,b)=>{console.log(a+b);}
// arrowSum(90,10)

// //arrow function for mul

// const arrowMul=(a,b)=>{x=a*b; console.log(x); return x}
// arrowMul(90,20)


//let practice

//Q-1


// function countVowel(str){
//     let count = 0;
//     for(const char of str){
//         console.log(char);
//         if(char === 'a' || char === 'e' || char === 'i' ||char === 'o' ||char === 'u' )
//         {
//             count++;

//         }
//     }

//     return(count);
// }

//same task with arrow function.

// const  countVow = (str) =>{
//         let count = 0;
//     for(const char of str){
//         console.log(char);
//         if(char === 'a' || char === 'e' || char === 'i' ||char === 'o' ||char === 'u' )
//         {
//             count++;

//         }
//     }

//     return(count);
// }


// practice question 
//Q1

// let num =[100,2,4,56,8,89];

// num.forEach((num) => {
//     console.log(num*num);
    
// });

//filter method // creates an new array 
// can be used to filter out required elements from the given array 
// print out the even and odd number from the given array 


// let numArr =[1,2,3,45,6,7,8,8,9,232,3445];
// console.log("the array is :",numArr);

// let evenArr = numArr.filter((val)=>{
//     return val % 2 === 0;

// })
// console.log(" the even numbers are : ",evenArr);

// let oddArr = numArr.filter((val)=>{
//     return val % 2!==0;

// })
// console.log("the odd numbers are: ",oddArr);
 
// let greater = numArr.filter((val)=>{
//     return val>30 ;
// })
// console.log("values greater than 30", greater);


//PRACTICE QUESTION

//QUESTION 1

// let marks = [99,90,89,79,98,69,93];

// let highMarks = marks.filter((val)=>{
//     return val >90 ;
// })
// console.log(highMarks);

//QUESTION 2

// let num = prompt("enter the number");

// let arr = [];

// creating a array using for loop for storing the values

// for( let i=1; i<=num; i++){
//     arr[i-1] = i;

// }
// console.log("the elements of the array are : ",arr);

// //finding the sum of the array using the reduce method

// let sum = arr.reduce((res,cur)=>{
//     return res + cur;

// });

// console.log("the sum of the array is : ",sum); 

// // finding the factorial of the array using the reduce method.

// let fact= arr.reduce((res,cur)=>{
//     return res * cur;

// });
// console.log("the factorial of the number are :", fact);