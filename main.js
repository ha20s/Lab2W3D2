

// part 1 
let numbers = [1, 5, 3,9,8,
    2,4,6,7,9,10];

numbers.sort()
console.log(numbers)


//part 2
let numSeq = [] ; 

for(let i = 1; i <= numbers.length; i++){
    let x =  i * i ;
    numSeq.push(x)
}

console.log(numSeq)

//part3 

for(let i = 0; i <= numbers.length; i++){
    if(numbers[i] >= 25){
        console.log(numbers[i])
    }
}

// part 4 

for(let i = 0; i <= numbers.length; i++){
    (numbers[i] > 5 ? console.log("greater") : console.log("smaller"))
}


part 5 
console.log(numbers.includes(5))

//part 6 
let numbers1 = []

for(let i = 0; i <= numbers.length; i++){
    if(numbers[i]%2 === 0){
        numbers1.push(numbers[i])
    }
}

console.log(numbers1)

// part7 

delete numbers[4];
delete numbers[5];
console.log(numbers)

// part 8 

let sum = 0 

for(let i = 0; i <= numbers.length; i++){
    let x = i * i 
    sum =+ x
}

console.log(sum)

// part 9 

for(let i = 0; i <= numbers.length; i++){
    if(numbers[i] > 5 ){
        console.log("index :"+[i])
        break
    }
}

// part 10 
console.log(numbers.pop())

// part 11  
numbers.push(100)
console.log(numbers)


// part 2a
let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const namesA = names.filter(function(currentValue, index, array) {
    return currentValue.includes("a")
})

console.log(namesA)

// part2 b



// let newArray = []

// for(let i = 0; i <= names.length; i++){
   
//     newArray.push(names[i].split(""))
// }
// console.log(newArray)

// كمليها 

// let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];

// for(let i = 0; i <= names.length; i++){
   
//     newArray.push(names[i].split(""))
// }


