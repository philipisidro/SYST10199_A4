const apple = new image(400,400)
const cherry = new image(400,400)
const grape = new image(400,400)
const lemon = new image(400,400)
const orange = new image(400,400)
const pear = new image(400,400)
const watermelon = new image(400,400)

const fruits = [apple, cherry, grape, lemon, orange, pear, watermelon]

const slot1= document.getElementById(slot1)
const slot2= document.getElementById(slot2)
const slot3= document.getElementById(slot3)

const slots = [slot1, slot2, slot3] 

apple.src = "imgs/apple.png"
cherry.src = "imgs/cherry.png"
grape.src = "imgs/grape.png"
lemon.src = "imgs/lemon.png"
orange.src = "imgs/orange.png"
pear.src = "imgs/pear.png"
watermelon.src = "imgs/watermelon.png"

function setFruit(randomNumber){

    for (let i = 0; i < slots.length; i++){
        slots[i].appendChild(fruits[randomNumber])
    }

}

function checkConditions(){

    if (slot1 == slot2 && slot1 == slot2){
        console.log("Jack Pot")
    }else if (slot1 == slot2){
        console.log("Win")
    }else if (slot1 == slot3){
        console.log("Win")
    }else if (slot2 == slot3){

    }else {
        console.log("lose")
    }

}
