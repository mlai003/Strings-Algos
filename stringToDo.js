// String Algos


removeBlanks("Today is a good day")

newString = ("")
function getDigits(string){
    for(let i = 0; i <= string.length; i++){
        if(!isNaN(string[i])) {
            newString += string[i]
        }
    }
    console.log(newString)
}
getDigits("fdfsdf1235d5df")

newString = ("")
function acronyms(string){
   let words = string.split(' ')
   for(let i in words){
    

        newString += words[i][0] 
   }
   return (newString.toUpperCase())
}

console.log(acronyms("there's no free lunch - gotta pay yer way."))

function countNonSpaces(string){
    let count = 0;
    let words = string.split("")
    for(let i in words){
        if(words[i] != " "){
            count++
        }
    }    
    return count
}
console.log(countNonSpaces("I have to go pee"))





function removeShorterStrings(array, num){
    let newArray = []
    for (let i = 0 ; i < array.length; i++ ){
        if(array[i].length >= num ){
            newArray += array[i]
        }
    }
   return newArray
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 5))