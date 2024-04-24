
//variable assignation
const mainImg = document.getElementById("main-img");
const playerMoneyText = document.getElementById("player-money-text");
const btnUpgrade1 = document.getElementById("btn-upgrade1");
let multiplier = 1;
let playerMoney = 0;
// Add click event listener to the image
mainImg.addEventListener("click", () => {
    // Toggle the "smallify" class
    mainImg.classList.toggle("smallify");
    playerMoney += multiplier
    playerMoneyText.textContent = playerMoney;
});
btnUpgrade1.addEventListener("click", () => {
    if(playerMoney >= 25) {
        multiplier = multiplier + 1
        playerMoney -= 25;
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