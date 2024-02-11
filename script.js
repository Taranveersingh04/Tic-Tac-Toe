let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let winningMessage=document.querySelector(".msg");
let newGameButton=document.querySelector(".newbtn");
let messageContainer=document.querySelector(".msgcontainer");

let count=0;

const winningPattern=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
let turn0=true;

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
            count+=1;
        }
        else{
            box.innerText="X";
            turn0=true;
            count+=1;
        }
        box.disabled=true;
        checkWinner();
        checkDraw();
    })
})
const checkWinner=()=>{
    for(pattern of winningPattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1 === val2 && val2 === val3){
                console.log("Winner");
                console.log(count);
                showWinner(val1);
                return true;
            }

    }
}
}
const checkDraw=()=>{
      if(count===9){
        if(!checkWinner()){
        winningMessage.innerText=`Oh no it's a draw`;
        messageContainer.classList.remove("hide");
        disableBoxes(); 
        }
      }
}

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(value)=>{
    winningMessage.innerText=`Congratulations ${value} you won the game`;
    messageContainer.classList.remove("hide");
    disableBoxes(); 
}
const resetGame=()=>{
    turn0=true;
    messageContainer.classList.add("hide");
    count=0;
    enableBoxes();
}
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
resetBtn.addEventListener('click',resetGame);
newGameButton.addEventListener('click',resetGame);