let hacker1 = "Franceso"
let hacker2="Fagiana"

console.log("The driver's name is " +hacker1)
console.log("The navigator's name is " +hacker2)


if(hacker1.length >hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
else if(hacker2.length>hacker1.length)
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
else
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)


let holdme =""

for(letter of hacker1){
    holdme+=letter.toUpperCase()
    holdme+=" "
}

let holdme2=[]

console.log(holdme) 

for(letter of hacker2){
    holdme2.unshift(letter);
}


console.log(holdme2.join(""));



let comp = hacker1.compareTo(hacker2)

if(comp>0){
    console.log("The driver's name goes first.")
}
else if (comp<0){
    console.log("Yo, the navigator goes first definitely.")
}
else console.log("What?! You both have the same name?")
