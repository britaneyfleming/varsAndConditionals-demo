/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if(jonSnowAttack > jamieLannisterAttack){
    console.log("Jon Snow has a better attack than Jamie Lannister");
} else if(jamieLannisterAttack > jonSnowAttack){
    console.log("Jamie Lannister has a better attack than Jon Snow");
} else {
    console.log("It's a tie");
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

//Jon Snow gets attacked by Jamie
if(jonSnowHealth < jamieLannisterAttack){
    console.log('Jon Snow has been slain!!!!');
} else {
    //jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    jonSnowHealth -= jonSnowHealth - jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

//Jon Snow given healthkit worth 50 points
let healthKit = 50;

if((jonSnowHealth + healthKit) > 100){
    jonSnowHealth =100;
} else {
    jonSnowHealth += 50;
}

//Jamie flips coin. Will allow Jon to run away if tails. Will aim to take Jon's head if heads

let coinLandsHeads = false;

if(coinLandsHeads === true) {
    console.log('They continue to fight and Jamie takes Jons head');
} else {
    console.log('Jon is allowed to run away')
}

//create a for loop that will have Jamie attack Jon 5 times. Console log Jon Snow's health after each attack

for(let i=1; i<=5; i++){
    if(jonSnowHealth<= 0){
        console.log('Jon Snow has been slain')
} else {
    jonSnowHealth -= jamieLannisterAttack;
    console.log('Jon Snows health is ${jonSnowHealth}')
}
}