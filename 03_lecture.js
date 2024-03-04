// console.log("learning loop");
// console.log("learning loop");
// console.log("learning loop")
// console.log("learning loop");
// console.log("learning loop");


// creating for loop//
// print 1-10//
// for(let count=10; count>=0;count--){
//     let name ="jeevan"
//     console.log(name);
// }

//printing sum of first n digit number//

// let sum =0;
// let n = prompt("enter the number")

// for(let i=0; i<=n; i++){
//     sum = sum +i;
    
// }
// console.log("sum of the number is equal to:" + sum);
// console.log("loop has ended");

//for of loop//
 
// let str = "jeevan kumar katiyar";
// let  size =0;

// for(let val of str){
//     console.log("val:" + val);
//     size++

// }
// console.log(size);

// practice question

// Q1- Print all even numbers from 0 to 100. and the sum of first 100 even number

// let evensum=0;
// let n =prompt("enter the even number only")
// for(let i=1;i<=n;i++){
   
//     if(i%2===0){
//         console.log("even number:"+ i);
//         evensum= evensum+i;
//     }
   
   
// }
// console.log("the sum of even number is :"+ evensum);

 // Q1- Print all odd numbers from 0 to 100.
// let oddsum= 0;
// let o=prompt("enter an odd number only")

// for(let i=1;i<=o;i++){
// if(i%2 !==0){
//     console.log("odd number :" +i);
//     oddsum=oddsum+i;
// }
// }
// console.log("the sum of odd number is : "+ oddsum);


// practice question2
// random input guess

// let gameNum= 25;
// let gameNum2= 90;
// let userNum= prompt("guess the number");

// while(userNum != gameNum2 && userNum != gameNum){
//    userNum = prompt("wrong ! try again");

// }
// console.log("congratuation");



//STRINGS//
let str="    jeevan  kumar katiyar     ";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice());