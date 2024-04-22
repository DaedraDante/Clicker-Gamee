
//variable assignation
const mainImg = document.getElementById("main-img");
const playerMoneyText = document.getElementById("player-money-text");
//const playerMoneyText = document.getElementById("player-money-text");
let playerMoney = 0;
// Add click event listener to the image
mainImg.addEventListener("click", () => {
    // Toggle the "smallify" class
    mainImg.classList.toggle("smallify");
    playerMoneyText.textContent = playerMoney++
});

// Function to remove the "smallify" class after the transition ends
function removeSmallifyClass() {
    mainImg.classList.remove("smallify");
}

// Add event listener for transitionend event
mainImg.addEventListener("transitionend", removeSmallifyClass);