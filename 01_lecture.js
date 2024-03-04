let firstName = "jeevan"
let middleName = "kumar"
let  sirName = "katiyar"
let age =25
let country = "india"
let rollNumber = 201018

console.log(firstName +" " + middleName+" "+ sirName);
console.log(age);


const student = {
     age: 24,
     S_name: "jeevan",
     rollNumber: 2019890,
     isPass: true,
}

student["S_name"] +=  " kumar" // changing the value or adding the value in object

// increase the age of the object //
student["age"] += 10



console.log(student.S_name);
console.log(student.age);

//Practice question //

// Q1 - create a const object called "product" to store information shown in the picture//


const product ={
    produtName:"Parker Jotter Standard CT Ball Pen (Black)",
    rating: 7002,
    offer: 90,
    price:270,
    isDeal:true,

}

console.log(product);

// Q2- Create a const object called "profile" to store information shown in the picture//



const profile = {
    profileName:"JEEVAN KUMAR KATIYAR",
    isFollow: true,
    posts:195,
    followers:596000,
    following:4,
    username:"jeevan",
    discription:"Student MCA | Vellore Institute of Technology|VIT Fear is just a mindset and so is courage",


}

console.log(profile);