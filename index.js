// / starting mechanism ::: 

let check = false;

function player(){
    this.name = '' ;
    this.matches = 0;
    this.wins = 0;
    }
    let circleplayer1 = new player();
    let crossplayer2 = new player();
    




let matchesNumber;

let start = document.querySelector(".starting");
let  circleForm = document.forms[0];
let  crossForm = document.querySelector(".crossPlayer");

circleForm.addEventListener('submit' , e=>{
    e.preventDefault();
    circleplayer1.name =  document.querySelectorAll("input")[0].value;
    console.log(circleplayer1)
    
})
crossForm.addEventListener('submit' , e=>{
    e.preventDefault();
    crossplayer2.name =  document.querySelectorAll("input")[1].value;
    console.log(crossplayer2)
    
})
start.addEventListener('click', e=>{
check = true;

})


/// playing mechanism 
let square = document.querySelectorAll(".square");
let circleTurn = true;
let arr=[0,0,0,0,0,0,0,0,0];

let circle;
let cross;
let winner;
let gameSurface = document.querySelector(".game-surface");
let playerScore = document.querySelectorAll(".score h4");



square.forEach(function(element,ind){
element.addEventListener("click",e=>{
if(e.target === element && element.innerHTML === '' && check){
        if(circleTurn){
            arr[ind]=2;
    circle = document.createElement("i");
    circle.className = "fa-regular fa-circle icons-custom";
    element.appendChild(circle);
    circleTurn = false ;
        }
        else{
            arr[ind]=1;
        cross = document.createElement("i");
        cross.className = "fa-solid fa-xmark icons-custom";
        element.appendChild(cross);  
            circleTurn = true ;
        }
    }
    })
})


gameSurface.addEventListener('click',e=>{



    if((e.target === square[0] || e.target === square[1] ||e.target === square[2] ||e.target === square[3] ||e.target === square[4] ||e.target === square[5] ||e.target === square[6] ||e.target ===square[7] || e.target === square[8]) && check ){
if((arr[6]==2 && arr[4]==2 && arr[2]===2 )  || (arr[0]==2 && arr[4]==2 && arr[8]==2 )  || (arr[2]===2 && arr[5]===2 && arr[8] === 2) || (arr[6]==2 && arr[7]==2 && arr[8]==2) || (arr[1]==2 && arr[4]==2 && arr[7]==2) || (arr[3]==2 && arr[4]==2 && arr[5]==2) || (arr[0]==2 && arr[3]==2 && arr[6]==2) ||  (arr[0]==[2] && arr[1]==2 && arr[2]==2)){
circleplayer1.wins++;
crossplayer2.matches++;
console.log('O is winner' );
console.log(circleplayer1);
playerScore[0].innerText = circleplayer1.name + ' :' + circleplayer1.wins;
check = false;
    }

if((arr[6]==1 && arr[4]==1 && arr[2]===1 )  || (arr[0]==1 && arr[4]==1 && arr[8]==1 )  || (arr[2]===1 && arr[5]===1 && arr[8] === 1) || (arr[6]==1 && arr[7]==1 && arr[8]==1) || (arr[1]==1 && arr[4]==1 && arr[7]==1) || (arr[3]==1 && arr[4]==1 && arr[5]==1) || (arr[0]==1 && arr[3]==1 && arr[6]==1) ||  (arr[0]==1 && arr[1]==1 && arr[2]==1)){

console.log('X is winner' );
    crossplayer2.wins++;
    crossplayer2.matches++;
    circleplayer1.matches++;
    playerScore[1].innerText = crossplayer2.name + ' :' + crossplayer2.wins;
    check = false;
}
if(check === false || fullCheck(arr)){
    for(let i = 0 ; i < square.length ; i++){
        square[i].innerHTML = '';
        console.log(square[i]);
        arr[i] = 0;
    }
    check=true;
    console.log(arr);
}




}
})



function fullCheck (_array) {
    for(let i = 0 ; i < _array.length ; i++){
        if(_array[i]==0)return false;
    }
            return true;
        }

    

