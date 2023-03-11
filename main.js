// let appendData = () => {
//   for (let i = 1; i < 10; i++) {
//     let div = document.createElement("div");
//     div.className = "box";
//     div.addEventListener("click", () => console.log("Hy there"));

//     let span = document.createElement("span");
//     span.className = "boxText";
//     // span.innerText = "Hy"

//     div.append(span);

//     document.querySelector(".container").append(div);
//   }
// };

// appendData();

console.log("Welcome to Tic Tac Toe");

let music = new Audio("click.wav");
let turn = "X";


let isgameover = false;

//function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function to check foe a

const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    // if (
    //   boxText[e[0]].innerText === boxText[e[1]] &&
    //   boxText[e[2]].innerText === boxText[e[0]] &&
    //   boxText[e[2]].innerText !== ""
    // ) {
    //   document.querySelector(".info").innerHTML =
    //     boxText[e[0]].innerText + "won";
    //   isgameover = true;
    // }
    if (
      (boxText[e[0]].innerText === boxText[e[1]].innerText) &&
      (boxText[e[2]].innerText === boxText[e[0]].innerText) &&
      (boxText[e[0]].innerText !== "")
    ) {
      document.querySelector('p').innerText = boxText[e[0]].innerText+" won";
      isgameover = true;
      document.querySelector('.winImg').getElementsByTagName('img')[0].style.width="450px";

    }
  });
};

//Game Logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      music.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "turn for " + turn;
      }
    }
  });
});


//reset button 

document.getElementById('reset').addEventListener('click',()=>{
    
    let boxText=document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element=>{
         element.innerText="";

         
     })
     turn="X";
         document.querySelector('.winImg').getElementsByTagName('img')[0].style.width="0px";
         isgameover=false;
      
         document.getElementsByClassName("info")[0].innerText =
         "turn for " + turn;

    })

   
