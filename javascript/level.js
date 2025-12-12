const LEVEL1_STR = ["transform:", "0,0,255", "}"]
const LEVEL2_STR = ["document.getElementbyId", "i = 0", "break"]
const LEVEL3_STR = ["font-family:", "align-items:", "flexbox"]
var levelSelector = 0; 

var sbt = document.getElementById("submit_btn");
var sprite = document.getElementById("sprite");
var rbt = document.getElementById("reset_btn");

var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");

var progress_bar = document.getElementById("progress_bar");

var var_name = ""; 
var id = "";
var inp = "";

var incorrect = [];

function checkInput(level){
    for (let i = 0; i < 3; i++)
    {
        var_name = "inp" + (i + 1);
        id = "blank" + (i + 1);
        inp = document.getElementById(id).value;

        switch(level)
        {
            case 1: 
                if (inp != LEVEL1_STR[i])
                    incorrect.push(i);
                break; 
            case 2: 
                if (inp != LEVEL2_STR[i])
                    incorrect.push(i);
                break; 
            case 3: 
                if (inp != LEVEL3_STR[i])
                    incorrect.push(i);
                break; 
        }
        
    }

    if (incorrect.length == 1)
        bar2.style.backgroundColor = "white"
    if (incorrect.length <= 2)
    {
        bar1.style.backgroundColor = "white";
    }
    if (incorrect.length == 0)
    {
        bar1.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
        bar3.style.backgroundColor = "white";

        sprite.style.animation = `1s ease level1animation`;
        setTimeout(() => {
            sprite.innerHTML = "<img src='../media/sprites/pengy2.png' alt='Pengy'>";
            sprite.style.transform = `translateX(100px)`;
            }, 1000);
    }
}

function refresh(level) {    
    if (level == 1)
    {
        sprite.innerHTML = "<img src='../media/sprites/pengy1.png' alt='Pengy'>";
        sprite.style.transform = "translateX(0px)";
    }

    bar1.style.backgroundColor = "#262626";
    bar2.style.backgroundColor = "#262626";
    bar3.style.backgroundColor = "#262626";

    for (let i = 1; i <= incorrect.length; i++)
        incorrect.pop(); 
    
    var_name = ""; 
    id = "";
    inp = "";
}