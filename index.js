let buttons = document.querySelectorAll(".butt");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO= true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

buttons.forEach((butt) => {
    butt.addEventListener("click", () => {
        console.log("butt was clicked");
        if (turnO) {
            butt.innerHTML = "O";
            turnO = false;
        } else {
            butt.innerText = "X";
            turnO = true;
        }

        butt.disabled = true;

        checkWinner();
    });
});

const disablebuttons = () => {
    for(let butt of buttons) {
        butt.disabled = "true";
    }
};


const enablebuttons = () => {
    for (let butt of buttons) {
        butt.disabled = false;
        butt.innerText = "";
    }
};

const showWinnwer = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgConatiner.classList.remove("hide");
    disablebuttons();
}


const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = buttons[pattern[0]].innerText;
        let pos2val = buttons[pattern[1]].innerText;
        let pos3val = buttons[pattern[2]].innerText;

        if(pos1val != "" && pos2val !="" && pos3val !="") {
            if(pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinnwer(pos1val);
            }
        }
    }
};



const resetGame = () => {
    turnO = true;
    enablebuttons();
    msgConatiner.classList.add("hide");
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);