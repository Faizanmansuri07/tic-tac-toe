let box = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let turnO=true;

const winPattern =[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];
 const resetGame = () =>{
     turnO = true;
     enableBox();
     document.getElementById("winner").style.display="none";

 };
const disabledBox = () =>{
    for(let box1 of box) {
         box1.disabled = true;
         document.getElementById("winner").style.display="none";
    }
};

const enableBox = () =>{
    for(let box1 of box) {
         box1.disabled = false;
         box1.innerText="";
    }
};
box.forEach((box) =>{
    box.addEventListener("click", () =>{
         if(turnO) {
            box.innerText = "X";
            box.style.color = "red";
            turnO = false
         }  else {
            box.innerText = "O";
            box.style.color = "blue";
            turnO = true;
         }
         box.disabled = true;
         checkWinner();
    });
});
const checkWinner = () =>{
    for(let pattern of winPattern) {
       let pos1 =  box[pattern[0]].innerText ;
       let  pos2 = box[pattern[1]].innerText ;
       let  pos3 = box[pattern[2]].innerText;
   
    if(pos1 != "" && pos2 !="" && pos3 !="") {
       if(pos1 === pos2 && pos2 === pos3) {
        disabledBox();
        winner.style.display = "flex";
        winner.innerText = `Congratulation Winner is ${pos1}`;
      console.log("winner");
        
       }
    }
 }
};
resetButton.addEventListener("click",resetGame);