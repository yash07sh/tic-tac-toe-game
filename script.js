let playerText = document.getElementById("heading")
console.log(playerText)
let resetBtn = document.getElementById("resetbtn")
console.log(resetBtn)
let boxes = Array.from(document.getElementsByClassName("box"))

let Xscore = document.getElementById("Xscore")
let Oscore = document.getElementById("Oscore")
let Xval = 0;
let Oval= 0;
const O_text = "O";
const X_text = 'X';
let currentPlayer = X_text;
let spaces  = Array(9).fill(null);


const startgame =()=>{

    boxes.forEach((box)=>{
        box.addEventListener("click",(e)=>{
            let id = e.target.id;

            if(!spaces[id]){
                spaces[id]= currentPlayer;
                e.target.innerHTML = currentPlayer;
                if(playerhaswon()!==false){
                    playerText.innerHTML = `${currentPlayer} has won`
                    let [x,y,z] = playerhaswon();
                    if(spaces[x]==X_text){
                        Xval++;
                        Xscore.innerHTML = "X score: " + Xval;
                        
                    }
                    else{ 
                        Oval++;
                        Oscore.innerHTML = "O score: " + Oval;

                    }
                   
                    document.getElementById(x).classList.add("winner")
                    document.getElementById(y).classList.add("winner")
                    document.getElementById(z).classList.add("winner")

                    

            
                }
                if( (playerhaswon()==false) && isfull() ) {
                        console.log("true")
                        playerText.innerHTML="Game is  tied"
                    }
                currentPlayer == X_text? currentPlayer = O_text: currentPlayer = X_text;
            }

        })
    })


}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


function playerhaswon() {

    for (const condition of winningCombos){
        let [a,b,c] = condition;

        if(spaces[a] && (spaces[a]==spaces[b] && spaces[a]==spaces[c])){
            
          return [a,b,c]  
        }
        
    }

    return false;
   
}

function isfull() {
    if(spaces.every(element => element !== null)){

        return true 
    }
   
    return false
}


  


resetBtn.addEventListener("click",function reset(e){

    spaces.fill(null);

    boxes.forEach((box)=>{
        box.innerHTML="";
        box.classList.remove("winner")

    })

    currentPlayer = X_text;
    playerText.innerHTML = "Tic Tac Toe";


})
startgame()