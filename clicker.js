
//variable assignation
const mainImg = document.getElementById("main-img");
const playerMoneyText = document.getElementById("player-money-text");
const btnUpgrade1 = document.getElementById("btn-upgrade1");
let multiplier = 1;
let playerMoney = 0;

     // Basic clickerlogic
mainImg.addEventListener("click", () => {
    mainImg.classList.toggle("smallify");
    playerMoney += multiplier
    playerMoneyText.textContent = playerMoney;
});

    // Variables for btnUpgrade1
 const costOriginal = 25;
 const costAddedPercentage = 15;
 const costNew = Math.floor(costOriginal * (1 + costAddedPercentage / 100));
 let costStage = Math.floor(costNew * (1 + costAddedPercentage / 100));
    // Loop upgrade logic for btnUpgrade1
 for(let i = 0; i < 10; i++) {
     costStage = Math.floor(costStage * (1 + costAddedPercentage / 100));
 }
    // Upgrade logic for btnUpgrade1
 btnUpgrade1.textContent = `Upgrade the click ${costNew}`
btnUpgrade1.addEventListener("click", () => {
   
    if(playerMoney >= costNew) {
        multiplier = multiplier + 1
        playerMoney -= costNew;
        playerMoneyText.textContent = playerMoney;
    }else {
        alert("not enough money")
    }
})

// Function to remove the "smallify" class after the transition ends
function removeSmallifyClass() {
    mainImg.classList.remove("smallify");
}

// Add event listener for transitionend event
mainImg.addEventListener("transitionend", removeSmallifyClass);