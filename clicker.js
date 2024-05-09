
//variable assignation
const mainImg = document.getElementById("main-img");
const playerMoneyText = document.getElementById("player-money-text");
const btnUpgrade1 = document.getElementById("btn-upgrade1");
const btnUpgrade2 = document.getElementById("btn-upgrade2");

let multiplier = 1;
let playerMoney = 0;

     // Basic clicker logic
mainImg.addEventListener("click", () => {
    mainImg.classList.toggle("smallify");
    playerMoney += multiplier
    playerMoneyText.textContent = playerMoney;
});
    
    // Defining the upgrade costs for btnUpgrade1
 const upgradeCosts = [];
 const costOriginal = 25;
 const costAddedPercentage = 45;
for(let i = 0; i < 10; i++) {
     const newCost = Math.floor(costOriginal * Math.pow(1 + costAddedPercentage / 100, i));
    upgradeCosts.push(newCost);
};

    // Upgrade logic for btnUpgrade1
 let upgradeIndex = 0;
 btnUpgrade1.textContent = `First Upgrade: ${costOriginal} dubloons`
 btnUpgrade1.addEventListener("click", () => {
 
    if(playerMoney >= upgradeCosts[upgradeIndex]) {
        multiplier += 1;
        playerMoney -= upgradeCosts[upgradeIndex];
        playerMoneyText.textContent = playerMoney;
        upgradeIndex += 1;
        if(upgradeIndex < upgradeCosts.length) {
            btnUpgrade1.textContent = `First Upgrade: ${upgradeCosts[upgradeIndex]} dubloons`
        }else {
            btnUpgrade1.textContent = "Upgraded to max";
            btnUpgrade1.disabled = true;
        }
    }else {
        alert("not enough money")
    }
});

    // Defining the upgrade costs for btnUpgrade2
const upgradeCosts2 = [];
const costOriginal2 = 1500;
const costAddedPercentage2 = 45;
for(let i = 0; i < 10 ; i++) {
    const newCost2 = Math.floor(costOriginal2 * Math.pow(1 + costAddedPercentage2 / 100 ,i));
    upgradeCosts2.push(newCost2); 
};

    // Upgrade logic for btnUpgrade2
let upgradeIndex2 = 0;
btnUpgrade2.textContent = `Second Upgrade: ${costOriginal2} dubloons`
btnUpgrade2.addEventListener("click",() => {

    if(playerMoney >= upgradeCosts2[upgradeIndex2]) {
        multiplier += 3;
        playerMoney -= upgradeCosts2[upgradeIndex2];
        playerMoneyText.textContent = playerMoney;
        upgradeIndex2 += 1;
        if(upgradeIndex2 < upgradeCosts2.length) {
            btnUpgrade2.textContent = `Second Upgrade : ${upgradeCosts2[upgradeIndex2]} dubloons`
        }else {
            btnUpgrade2.textContent = "Upgraded to max";
            btnUpgrade2.disabled = true;
        };
    }else {
        alert("not enough money");
    };
});
// Function to remove the "smallify" class after the transition ends
function removeSmallifyClass() {
    mainImg.classList.remove("smallify");
};

// Add event listener for transitionend event
mainImg.addEventListener("transitionend", removeSmallifyClass);
