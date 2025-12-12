const LEVEL1_STR = ["transform:", "0,0,255", "}"]
const LEVEL2_STR = ["document.getElementbyId", "i = 0", "break"]
const LEVEL3_STR = ["font-family:", "align-items:", "flexbox"]
var levelSelector = 0; 

var sbt = document.getElementById("submit_btn");
var sprite = document.getElementById("sprite");

var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");

var progress_bar = document.getElementById("progress_bar");

function checkInput(level){
    progress_bar.style.backgroundColor = "#262626";

    var incorrect = [];

    for (let i = 0; i < 3; i++)
    {
        var var_name = "inp" + (i + 1);
        var id = "blank" + (i + 1);
        var var_name = document.getElementById(id).value;

        switch(level)
        {
            case 1: 
                if (var_name != LEVEL1_STR[i])
                    incorrect.push(i);
                break; 
            case 2: 
                if (var_name != LEVEL2_STR[i])
                    incorrect.push(i);
                break; 
            case 3: 
                if (var_name != LEVEL3_STR[i])
                    incorrect.push(i);
                break; 
        }
        
    }

    if (incorrect.length == 2)
    {
        bar1.style.backgroundColor = "white";
        if (incorrect.length == 1)
            bar2.style.backgroundColor = "white"
        
    }
    if (incorrect.length == 0)
    {
        sprite.style.animation = `1s ease level1animation`;
        setTimeout(() => {
            sprite.innerHTML = "<img src='../media/sprites/pengy2.png' alt='Pengy'>";
            sprite.style.transform = `translateX(100px)`;
            }, 1000);
    }
}

