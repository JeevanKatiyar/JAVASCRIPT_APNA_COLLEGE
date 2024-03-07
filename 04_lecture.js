  // array//
  
  /*
  syntax

  let arrayName = ["item1","item2","item3","item4","item5"]
  console.log(arrayName)

NOTE:

for arrays we can use 
1-for of loop
2-for in loop

  */

//   let marks =[90,89,78,67,56,45];

//   console.log(marks);
 
//   let studenName =["jeevan","akanksha","shiv","shalini","rohit"];
//   console.log(studenName[0]+ " = " + marks[0]); // index with value

//   console.log(marks);

// let marks =[85,97,44,37,76,60];

// let sum=0;

// for(i=0,i<marks.length, i++)
// {
//     console.log(marks);
// }

// let marks =[85,97,44,37,76,60];
// let sum=0;
// for(let mark of marks){
//     sum+= mark;
//     console.log("total sum is :"+sum);
// }

// let avg =sum/marks.length;
// console.log(avg);


// for (i = 1; i <= 5; i = i + 1) {
//   let str = "";
//   for (j = 0; j < i; j = j + 1) {
//     str += "*";
//   }
//   console.log(str);
// }

// let design ="*"
// for(let i=1;i<=10;i++){
//   pattern = design.repeat(i);
//   console.log(pattern);

// }

// let design2 ="*"
// for(let i=10;i>=1;i--){
//   pattern2 = design2.repeat(i);
//   console.log(pattern2);

// }

//practice question2


//using for of loop

// let items = [250,645,300,900,50];
// let idx=0;

// for(let val of items){
//   console.log(`value of index ${idx} = ${val}`);
//   idx++;
  
// }


// for(let i=0;i<items.length;i++){
//   let offer = items[i]/10;
//   items[i] -= offer;

// }

// console.log(items);


// let fooditems =["apple","mango","pineapple"];
// fooditems.push("watermelon", "chips");
// console.log(fooditems);

// fooditems.pop();
// console.log(fooditems);

// let str ="jeevan";

// x=str.toUpperCase();
// console.log(x);
  

// let marvel =["ironman","dr strange","thor,"];
// let dc =["superman","flash","batman"];

// let hero = marvel.concat(dc);


// console.log(hero);
// console.log(hero.slice(0,3));

let arr =[1,2,3,7,8,9,0];

arr.splice(3,0,4,5,6);

console.log(arr);

