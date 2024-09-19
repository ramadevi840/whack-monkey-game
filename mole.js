let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function(){
    setGame();

}
function setGame() {
    
    // set up the grid for the game board in html
    for(let i = 0;i < 9; i++){
        let tile = document.createElement("div");// i goes from 0 to 8, stops at 9
        //<div id ="0.8"></div>
       tile.id =i.toString();
       tile.addEventListener("click", selectTile);
       document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}
function getRandomTile(){

    let num = Math.floor(Math.random() * 9);
    return num.toString();

}
function setMole(){
    if( gameOver){
        return;
    }
    if (currMoleTile){
        currMoleTile.innerHTML ="";
    }
    let mole = document.createElement("img");
    mole.src ="https://github.com/ImKennyYip/whac-a-mole/blob/master/monty-mole.png?raw=true";
    let num =getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
function setPlant(){
    if(gameOver){
        return;
    }
    if (currPlantTile){
        currPlantTile.innerHTML ="";
    } 
    let Plant = document.createElement("img");
    Plant.src ="https://github.com/ImKennyYip/whac-a-mole/blob/master/piranha-plant.png?raw=true";
    let num =getRandomTile();
    if ( currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(Plant);
}
function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currMoleTile){
        score +=10;
        document.getElementById("score").innerText = score.toString();

    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER : "+ score.toString();
        gameOver = true;
    }
}