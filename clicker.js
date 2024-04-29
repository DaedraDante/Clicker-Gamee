
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
 let costStage = Math.floor(costOriginal * (1 + costAddedPercentage / 100));
 let boughtNofUpgrades = 0;
    // Upgrade logic for btnUpgrade1
 btnUpgrade1.textContent = `Upgrade the click ${costOriginal} dubloons`
 btnUpgrade1.addEventListener("click", () => {
    
        // Checking if the money is sufficient n stuff
    if(playerMoney >= costOriginal && boughtNofUpgrades === 0) {
         multiplier = multiplier + 1;
         playerMoney -= costOriginal;
         playerMoneyText.textContent = playerMoney;
         boughtNofUpgrades++;
         btnUpgrade1.textContent = `Upgrade the click 30 dubloons`
    }else if(playerMoney >= 30 && boughtNofUpgrades === 1) {
         multiplier = multiplier + 1;
         playerMoney -= 30;
         playerMoneyText.textContent = playerMoney;
         boughtNofUpgrades++;
         btnUpgrade1.textContent = `Upgrade the click 35 dubloons`
    }else if(playerMoney >= 35 && boughtNofUpgrades === 2) {
         multiplier = multiplier + 1;
         playerMoney -= 35;
         playerMoneyText.textContent = playerMoney;
    }else {
        alert("not enough money")
    }
});

// Function to remove the "smallify" class after the transition ends
function removeSmallifyClass() {
    mainImg.classList.remove("smallify");
};

// Add event listener for transitionend event
mainImg.addEventListener("transitionend", removeSmallifyClass);
