// // normal Function ==>

// function sum(a,b){
//     a = 10;
//     b = 2;
//     x = a+b;
//     console.log(x)
// }
// sum(10,10)
// sum(22,32)
// sum(45,69)


// function with parameter or arguments ==>


//   function sum (val1,val2){
//      console.log(val1 +  val2);
//   }
//    sum(10,12)
//    sum(10,2)
//    sum(10,1)
  

// function with return type ==>

// function calculator = {
//      addition(val1,val2){
//         let add = val1 + val2;
//         return add;
//     },

//     substraction(val3,val4){
//         let sub = val3 - val4;
//         return sub
//     },

//   multiplication(val5,val6){
//         let multiply = val5*val6;
//         return multiply
//     },

//  divition(val7,val8){
//         let divi = val7/val8;
//         return divi
//     }
// }
// modelute/module


// let calculatonAddition = addition(2,2)
// consoler.log(calculatonAddition);


//  function with return type Examples ==>
// Calculator :


// function addition(val1,val2){
//     let add = val1 + val2;
//     return add;
// };

// function substraction(val3,val4){
//     let sub = val3 - val4;
//     return sub
// };

// function multiplication(val5,val6){
//     let multiply = val5 * val6;
//     return multiply
// };

// function divition(val7,val8){
//     let divi = val7 / val8;
//     return divi
// };


// // Answer:

// let calcualtor = addition(10,5);
// console.log(calcualtor);

// let calculator1 = substraction(10,5);
// console.log(calculator1);

// let calculator2 = multiplication(10,5);
// console.log(calculator2);

// let calculator3 = divition(10,5);
// console.log(calculator3);

//  string ==>
// function website(url,domain){
//     let host = "https://";
//     let result = host + url + domain;
//     return result;
// }

// console.log(website("www.pradipbaidya8888@","gamil.com"));

//  Sum array ==>

function sum(arr){
    let add = 0;
    for(let value of [1,2,3,4,5,6]){
        add += value;
    }
    return add;
}
let res = sum(sumarray)
console.log(res)




