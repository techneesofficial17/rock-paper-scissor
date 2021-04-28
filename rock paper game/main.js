function getRandom() {
    x = Math.random() * 3;
    y = Math.floor(x);
    console.log(y);
};

document.querySelector('#headertext').addEventListener('click', getRandom);
const btn = document.getElementById("playAgain");
let pscore = 0;
let bscore = 0;
let draws = 0;

function makeBotName() {
    botNum = y;

    if(botNum == 0){
        botName = "scissor";
    }else if (botNum == 1){
        botName = "Rock";

    }else {
        botName = "Paper";

    };
};
function pScore() {
    pscore++;
    setTimeout(()=> {
        document.querySelector('#pscore').innerText = pscore;

    },4000);
};

function bScore() {
    bscore++;
    setTimeout(()=>{
        document.querySelector('#bscore').innerText = bscore;

    },4000);
};



function Draws() {
    draws++;
    setTimeout(() => {
        document.querySelector('#draws').innerText = draws;

    },4000);
};
const wintext  = document.getElementById("resulttext");


function click1() {
    getRandom();
    makeBotName();

    const userChoice = 0;
    const botChoice = y;
    clicked1();
    console.log("userchoice = Scissor  [  " + userChoice);
    console.log(`botChoice = ${botName}  [ ` + botChoice);

    function clicked1() {
        console.log("scissor has been clicked");
        console.log("");
    }

    if (userChoice == botChoice) {
        console.log("tied");
        console.log("");
        wonText = "Tied";
        Draws();

    }else if(botChoice == 2){
        console.log("Player won !");
        console.log("");
        wonText = "Player Won ";
        pScore();
        

    }else if(botChoice == 1){
        console.log("Bot Won !");
        console.log("");
        wonText = "Bot Won";
        bScore();
    }
    else{
        console.log("nothing");
        console.log("");
    }

    // gui interface starts !


    wintext.innerHTML = wonText;

    const imgBoxP = document.getElementById("playerchoosed"); 
    imgBoxP.src = "pic/sci.png";

    const imgBoxB = document.getElementById("botchoosed");

    if(botChoice == 1) {
        imgBoxB.src = "pic/rock.png";
    }else if (botChoice == 2){
        imgBoxB.src = "pic/paper.jpg";
    }else if(botChoice == 0) {
        imgBoxB.src = "pic/sci.png";

    }
    else{
        console.log("error in something");
    }
};

function click2() {
    
    clicked1();
    getRandom();
    makeBotName();
    
    const userChoice = 1;
    const botChoice = y;

    console.log("userchoice = Rock  [  " + userChoice);
    console.log(`botChoice = ${botName}  [ ` + botChoice);


    function clicked1() {
        console.log("Rock has been clicked");
        console.log("");
    }

    if (userChoice == botChoice) {
        console.log("tied");
        console.log("");
        wonText = "Tied";
        Draws();
    }else if(botChoice == 2){
        console.log("Bot Won !");
        console.log("");
        wonText = "Bot Won";
        bScore();
    }else if(botChoice == 0){
        console.log("Player Won !");
        console.log("");
        wonText = "Player Won"
        pScore();


    }
    else{
        console.log("nothing");
        console.log("");

    }
    wintext.innerText = wonText;

    
    const imgBoxP = document.getElementById("playerchoosed"); 
    imgBoxP.src = "pic/rock.png";

    const imgBoxB = document.getElementById("botchoosed");

    if(botChoice == 1) {
        imgBoxB.src = "pic/rock.png";
    }else if (botChoice == 2){
        imgBoxB.src = "pic/paper.jpg";
    }else if(botChoice == 0) {
        imgBoxB.src = "pic/sci.png";

    }
    else{
        console.log("error in something");
    }
};


function click3() {
    clicked1();
    getRandom();
    makeBotName();
    const userChoice = 2;
    const botChoice = y;
   
    
    console.log("userchoice = Paper  [  " + userChoice);
    console.log(`botChoice = ${botName}  [ ` + botChoice);

    function clicked1() {
        console.log("Paper has been clicked");
        console.log("");
    }

    if (userChoice == botChoice) {
        console.log("tied");
        console.log("");
        wonText = "Tied";
        Draws();

    }else if(botChoice == 1){
        console.log("Player Won !");
        console.log("");
        wonText = "Player Won";
        pScore();

    }else if(botChoice == 0){
        console.log("Bot Won !");
        console.log("");
        wonText = "Bot Won";
        bScore();

    }
    else{
        console.log("nothing");
        console.log("");

    }
    wintext.innerText = wonText;

    const imgBoxP = document.getElementById("playerchoosed"); 
    imgBoxP.src = "pic/paper.jpg";

    const imgBoxB = document.getElementById("botchoosed");

    if(botChoice == 1) {
        imgBoxB.src = "pic/rock.png";
    }else if (botChoice == 2){
        imgBoxB.src = "pic/paper.jpg";
    }else if(botChoice == 0) {
        imgBoxB.src = "pic/sci.png";

    }
    else{
        console.log("error in something");
    }
};

const pics = document.querySelector(".pics");
const choose = document.querySelector(".choose");
const titleText = document.getElementById("titletext");
const result = document.querySelector(".result");
const animate = document.querySelector(".animate");
function blind(){
    animate.style.display = "block";
    titleText.innerText = "Bot Making His Choice !!";
    animate.style.opacity = "100%";
    pics.style.display = "none";
     
   setTimeout( () => {
        choose.style.display = "none";
        result.style.display = "block";
        btn.style.display = "block";
        animate.style.display = "none";
    }, 4000); 
    
   
};

document.querySelector('#playAgain').addEventListener('click', restart);


function restart(){
    choose.style.display = "block";
    result.style.display = "none";
    pics.style.display = "block";
    titleText.innerText = "Make Your Choice !!";
    document.querySelector('#playAgain').style.display = "none";
   
}