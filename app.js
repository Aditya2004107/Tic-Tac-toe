let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let newGamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg");

let turnO = true;

let drawCount = 0;
const winpatterns = [
  [0, 1, 2], //0
  [0, 3, 6], //1
  [0, 4, 8], //2
  [1, 4, 7], //3
  [2, 5, 8], //4
  [2, 4, 6], //5
  [3, 4, 5], //6
  [6, 7, 8], //7
];

// Here Button is clickable;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.disabled = true;
      box.style.color = "black";
    } else {
      box.innerText = "X";
      turnO = true;
      box.disabled = true;
    }
    drawCount++;
    draw();
    checkWinner();
  });
});

// Here Btn is Disable;
const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

// Here btn is Enable;
const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// Here Show The Result;
const showWinner = (winner) => {
  msg.innerText = `Congratulations :) Winner is ${winner}`;
  msg.style.color = "#FFC300";
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

// Here is Draw Button;

const draw = () => {
  if (drawCount === 9) {
    msg.innerText = "Ooh Your Game is Draw";
    msg.style.color = "royalblue";
    msgcontainer.classList.remove("hide");
  }
};

// Here Main Part ;
const checkWinner = () => {
  for (pattern of winpatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal3 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1);
      }
    }
  }
};

// Here Set the btn;
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
  drawCount = 0;
};

// Here Btn is do some  Function
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
