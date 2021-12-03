//DOM

const playground = document.querySelector(".playground > ul");

//Setting
const GAME_ROMS = 20;
const GAME_COLS = 10;

// variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
    tree: [
        [[0,0],[0,1],[1,0],[1,1]],
        [],
        [],
        [],
    ]
}

const MovingItem = {
    type: "tree",
    direction: 0,
    top: 0,
    left: 0,
};

init()

//function
function init(){
    tempMovingItem = {...MovingItem };
for (let i = 0; i < 20; i++) {
        prependNewLine()
    }   
    renderBlocks()
}

function prependNewLine(){
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for(let j=0; j<10; j++){
        const martrix = document.createElement("li");
        ul.prepend(martrix);
    }
    li.prepend(ul)
    playground.prepend(li)
}
function renderBlocks(){
    const { type, direction, top, left } = tempMovingItem;
    
    BLOCKS[type][direction].forEach(block=>{
        const x = block[0];
        const y = block[1];
        const target = playground.childNodes;
    })
}