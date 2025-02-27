let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let btnClick = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame = () =>{
    turn0 = true;
    btnClick = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            box.style.color = "blue";
        }
        else{
            box.innerText = "X";
            turn0 = true;
            box.style.color = "#b0413e"
        }
        box.disabled = true;

        checkWinner();
        btnClick += 1;
        if (btnClick === 9) {
            msgContainer.classList.remove("hide");
            msg.innerText = "Game was a Draw"
        }
    });
});

const disableBoxes = () =>{
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}


const checkWinner = ()=>{
    for (const pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 ===pos3) {
                // console.log("winner");
                showWinner(pos1);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


