function ceaser(str) {
let arr = str.split("")    
let result = []     
let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"     let alphabetsArray = alphabets.split("") 
 for(let i = 0; i < arr.length; i++){          
    let index = alphabetsArray.findIndex(letter => {     return (letter === arr[i])     
    })     
    if (index >= 0){result.push(alphabetsArray.slice(index + 13, index + 14)[0])    
     } else {result.push(arr[i])     
    }     
}          
return result.join("")     
}          
 
console.log(ceaser("V YBIR PELGBTENCUL"));


