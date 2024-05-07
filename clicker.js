
//variable assignation
const mainImg = document.getElementById("main-img");
const playerMoneyText = document.getElementById("player-money-text");
const btnUpgrade1 = document.getElementById("btn-upgrade1");
let multiplier = 1;
let playerMoney = 0;

     // Basic clicker logic
mainImg.addEventListener("click", () => {
    mainImg.classList.toggle("smallify");
    playerMoney += multiplier
    playerMoneyText.textContent = playerMoney;
});
    
    // Defining the upgrade costs
 const upgradeCosts = [];
 const costOriginal = 25;
 const costAddedPercentage = 35;
for(let i = 0; i < 10; i++) {
     const newCost = Math.floor(costOriginal * Math.pow(1 + costAddedPercentage / 100, i))
    upgradeCosts.push(newCost);
}


    // Upgrade logic for btnUpgrade1
 let upgradeIndex = 0;
 btnUpgrade1.textContent = `Concert no remorse: ${costOriginal} dubloons`
 btnUpgrade1.addEventListener("click", () => {
 
    if(playerMoney >= upgradeCosts[upgradeIndex]) {
        multiplier += 1;
        playerMoney -= upgradeCosts[upgradeIndex];
        playerMoneyText.textContent = playerMoney;
        upgradeIndex += 1;
        if(upgradeIndex < upgradeCosts.length) {
            btnUpgrade1.textContent = `Concert no remorse: ${upgradeCosts[upgradeIndex]} dubloons`
        }else {
            btnUpgrade1.textContent = "Upgraded to max";
            btnUpgrade1.disabled = true;
        }
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
