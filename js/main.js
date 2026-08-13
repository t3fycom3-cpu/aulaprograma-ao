const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 600;

const keys = {};

window.addEventListener ("keydown",(e)=>{

     keys[e.key.tolowerCase()] = true;

});

window.addEventListener("keyup",(e)=>{

     keys[e.key.tolowerCase()] = false;

});


const player = new Player(
     canvas.width/2,
     canvas.height/2
);


function update(){

     player.update(keys, canvas);

}