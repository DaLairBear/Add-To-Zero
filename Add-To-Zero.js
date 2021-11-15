let array1 = [1, 4, 11, 2, 37, -4]
let array2 = [0, 21, 33, 6, 0, -9]
let array3 = [ 0, 1, 2, 3, 4, 5]

let arraySum = false

// for(let i = 0; i < array1.length; i++){
//     for(let k = i + 1; k < array1.length; k++){
//         if (array1[i] + array1[k] === 0){
//             let arraySum = true
//             console.log(`${array1[i]} + ${array1[k]} is ${arraySum}`)
//         }else{
//             console.log(arraySum)
//         }
//     }
// }


for(let i = 0; i < array1.length; i++){
    for(let k = i + 1; k < array1.length; k++){
        if (array1[i] + array1[k] === 0){
            arraySum = true
            //console.log(`${array1[i]} + ${array1[k]} is ${arraySum}`)
        }
    }
}
console.log(arraySum)

// while(arraySum = false){

// }

// for(let x in array1){
//     let sum = 0
//     sum = array1[x] + array1[0]
//     console.log(sum)
// }

// for(let x of array1){
//     let sum = 0
//     sum = array1[x] + array1[0]
//     console.log(sum)
// }


// for(let i = 0; i < array1.length; i++){
//     let sum = 0
//     sum = array1[i] + array1[0]
//     console.log(sum)
// }