// Get all the boxes
let boxes = document.querySelectorAll(".box");
let masgContainer = document.querySelector(".masgContainer");
let gameButton = document.querySelector(".newGameButton");
let masg = document.querySelector(".masg");

let count = 0;



// to get reset button
let resetBtn = document.querySelector(".resetBtn");
//  declare a variable named turn O, the condition will be applied on it
let turnX = true;

// define a function that will disable all the buttons once a winner announced
const disableButtons = () => {
    for(let box of boxes){
    box.disabled = true;
}
}

// define a function that will enable all the buttons new Game is clicked
const enableButtons = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

// refine a function that will reset the game when reset button is clicked
const resetGame = () => {
    turnO = true;
    enableButtons();
    masgContainer.classList.add("hide");
    count = 0;

   
}

// Make a array of win patterns
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
// add a eventListener to each box by appling loop on boxes array
boxes.forEach((box) => {
  box.addEventListener("click", () => {
   
    //  this condition defines that when turnO is true print "X" in the box, and update the value to false
    if (turnX) {
      turnX = false;
      box.innerText = "X";
      box.style.color = "red";
     
      // in else part the turnO will be false and it will print "X" in the box and update value to true
    } else {
      turnX = true;
      box.innerText = "O";
      box.style.color = "green";
      
    }


    // it will disable a button once it is clicked
    box.disabled = true;

    // This is a function that will check the winner and print a message
    checkWinner();
    
  });
});
const showWinner = (winner) => {
  masg.innerText = `Congratulations, Winner is Player ${winner}`;
  masgContainer.classList.remove("hide");
};

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let position1Val = boxes[pattern[0]].innerText;
    let position2Val = boxes[pattern[1]].innerText;
    let position3Val = boxes[pattern[2]].innerText;

    if (position1Val != "" && position2Val != "" && position3Val != "") {
      if (position1Val === position2Val && position2Val === position3Val) {
        showWinner(position1Val);
        disableButtons();
        count = 0;
      }
    }
  }
};


gameButton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


let draw = () => {
    for(let box of boxes ){
        box.addEventListener("click",()=>{
            count++
            if(count === "9"){
  
                masg.innerText = "Game Draw";
                masgContainer.classList.remove("hide");
            
            };
        });
       
    };
   
};    


// This will print a Game Draw message when no one is winner
for(let box of boxes){
    box.addEventListener("click",()=>{
     count++
     if(count === 9){
        masgContainer.classList.remove("hide");
        masg.innerText = "Game Draw";
     }
     console.log(count) 
       
    })
}
