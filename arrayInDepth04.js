// Length 
// let allNames = ['Pradip','souvik','sudip','rajdip','soumodip'];
// console.log(allNames.length);
// console.log(allNames[allNames.length-1]);

// name replace 
// allNames[3] = "Poltry"
// console.log(allNames);

// let sntx = new Array ('thiago','mateo'); 
// sntx.push('Father Messi')
// console.log(sntx)

// new Array method 
// let sntx = new Array ('thiago','mateo'); 
// console.log(sntx[1])

// Slice
// let allNames = ['Pradip','souvik','sudip','rajdip','soumodip'];
// console.log(allNames.slice(2,4));


// Splice
// let valu = ['apple','bada apple','chota apple','double apple'];
// valu.splice(1,0,'coconut','banana');
// console.log(valu);

// concatination

// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];
// let array3 = [11,12,13,14,15,16,17]; 

// let final = array1.concat(array2,array3);
// console.log(final)


// fill :
// let sntx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// sntx.fill("messi", 4, 8 )
// console.log(sntx);

// incluides :
// let sntx = [1,2,3,4,"messi",5,6,7,8,9];
// console.log(sntx.includes("messi", 4))


//  indexOf
// let sntx = [1,2,3,4,"messi",5,6,7,8,9];
// console.log(sntx.indexOf('messi'));

// isArray
// let allNames = ['Pradip','souvik','sudip','rajdip','soumodip'];
// let sntx = "messi"
// console.log(Array.isArray(sntx));


// Join
// let sntx = [1, 2, 3, 4, 5, 6]
// console.log(sntx.join('/'))

// keys
// For of

// last index off
// let sntx = [1,2,3,4,'messi',5,6,'messi',8,9];
// console.log(sntx.indexOf('messi'))
// console.log(sntx.lastIndexOf('messi'))

// Map
// let sntx = [1,4,9,16,25,36,49,64,81,100];
// let up = sntx.map(Math.sqrt);
// console.log(up);


// Pop
// let sntx = [1, 2, 3, 4, 5, 6]
// console.log(sntx.pop());
// console.log(sntx.shift());

// Shift
// let sntx = [1,4,9,16,25,36,49]
// console.log(sntx.shift());

// Reverse
// let sntx = [1,4,9,16,25,36,49,64,81,100]
// console.log(sntx.reverse());

// Short
// let sntx = ['pradip', 'souvik', 'rajdip', 'soumo', 'arun', 'krish', 'biltu'];
// console.log (sntx.reverse(sntx.sort()));
// console.log(sntx.sort());

// Unshift
// let sntx = ['pradip', 'souvik', 'rajdip', 'soumo', 'arun', 'krish', 'biltu'];
// sntx.unshift(1,2);
// console.log(sntx);

// converting to Array :
// // split
// // let names = 'messi is a good player';
// // let names1 = names ;
// // console.log(names.split('')) ;

// // For Of
let lowerNames = ['pradip', 'souvik', 'rajdip', 'soumo', 'arun', 'krish', 'biltu'];
let upperName = [];
for(let cV of lowerNames){
upperName.push(cV.toUpperCase()) 
}
console.log(upperName);
// console.log(upperName.sort())
// // break and continue
// for(let i = 0; i<=50 ; i++){
//     if(i == 4){
//     continue;
//     }
//     console.log(i)
// }
    
    // continue
    // for(let i = 0; i<=10; i++){
    //     if (i == 5){
    //         continue;
    //     }
    //     console.log(i);
    // }

