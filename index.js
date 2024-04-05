// დავალება 14 - შევქმნათ თამაში X/O

var cell = document.querySelectorAll(".cell")
console.log(cell)

var rezult = document.querySelector(".rezult")
var move = "0"

var cellX = "X"

var winingPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

for(let i = 0; i < cell.length; i++){
    cell[i].addEventListener("click", function(){
        if(cell[i].textContent) return;
        move++;
        cell[i].textContent = cellX;
        checkWinner();
        if (cellX == "X"){cellX = "O"}
        else{cellX = "X"};
          
    });      
}
var checkWinner = function(){   
    if(move == cell.length){rezult.innerText = "It's a draw"; }
    for (let i = 0; i < winingPosition.length; i++) {
    if (
        cell[winingPosition[i][1]].textContent == cellX &&
        cell[winingPosition[i][0]].textContent == cellX &&
        cell[winingPosition[i][2]].textContent == cellX 
    ){
        rezult.innerText = "winner is " + cellX;
        
    }
    
    
}
}
function restart(){
    move = 0;
    cellX = "X";
    rezult.innerText = "";
    for(let i = 0; i < cell.length; i++){
        cell[i].textContent = "";
}
}

    