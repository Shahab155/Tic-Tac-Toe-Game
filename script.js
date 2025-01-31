"use strict";
// get all elements having boxes class
const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector(".resetButton");
const container = document.querySelector(".container");
const messageContainer = document.querySelector(".masgContainer");
const message = document.querySelector(".message");
const newGameButton = document.querySelector(".newGameButton");
let turnX = true;
let count = 0;
// get each box by calling for each method
boxes.forEach((box) => {
    // event handler on each box and condition to show the text in the box
    box.addEventListener("click", () => {
        if (turnX) {
            turnX = false;
            box.innerHTML = "X";
            box.style.color = "red";
        }
        else {
            box.innerHTML = "O";
            box.style.color = "green";
            turnX = true;
        }
        count++;
        box.disabled = true;
        checkWinner();
        if (count == 9) {
            container.style.display = "none";
            messageContainer.style.display = "flex";
            message.innerHTML = `Oops!😥 Game Over`;
        }
    });
    // added eventListner to the rest button.
    resetButton.addEventListener("click", () => {
        // it clears the text inside box
        box.innerHTML = "";
        // it enables boxes again
        box.disabled = false;
        count = 0;
    });
    // declare a funcion that will restart the game, when new game button is clicked
    newGameButton.addEventListener("click", () => {
        container.style.display = "flex";
        box.innerHTML = "";
        messageContainer.style.display = "none";
        box.disabled = false;
        count = 0;
    });
    // add an event listner to new game button
});
// make an array of win patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
// now for loop to get each pattern of winPattern
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let positionVal1 = boxes[pattern[0]].innerHTML;
        let positionVal2 = boxes[pattern[1]].innerHTML;
        let positionVal3 = boxes[pattern[2]].innerHTML;
        if (positionVal1 != "" && positionVal2 != "" && positionVal3 != "") {
            if (positionVal1 == positionVal2 && positionVal2 == positionVal3) {
                // if all condition for win meets than winner function is called
                showWinner(positionVal1);
            }
        }
    }
};
// function that will show the winner
function showWinner(winner) {
    container.style.display = "none";
    messageContainer.style.display = "flex";
    message.innerHTML = `Congratulations player ${winner} you win✨🎉`;
}
