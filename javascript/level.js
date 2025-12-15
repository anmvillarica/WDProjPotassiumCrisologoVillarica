const LEVEL1_STR = ["transform:", "0,0,255", "}"];
const LEVEL2_STR = ["document.getElementById", "=", "break;"];
const LEVEL3_STR = ["rotate(-90deg);", "align-items", "flexbox;"];
const NOTIFS = ["Parang hindi ata T-T", "Kaya mo iyan", "Eto nanaman tayo", "I believe in you", "You'll never succeed if you never try"];

const LEVEL_CLRS = ["#579dff", "#08ff98", "#ffee0b"];
const LEVEL_ANIMATIONS = ["1s ease level1animation", "5s ease level2animation 3", "1s ease level3animation"];

var levelSelector = 0; 

var sbt = document.getElementById("submit_btn");
var sprite = document.getElementById("sprite");
var rbt = document.getElementById("reset_btn");

var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");

var progress_bar = document.getElementById("progress_bar");
var notif_bar = document.getElementById("notif_bar"); 

var var_name = ""; 
var id = "";
var inp = "";
var notifNo = 0;

var incorrect = [];

function checkInput(level){
    sbt.style.backgroundColor = "grey";

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
        bar2.style.backgroundColor = LEVEL_CLRS[level - 1];
    if (incorrect.length <= 2)
    {
        bar1.style.backgroundColor = LEVEL_CLRS[level - 1];
        randomNotif();
    }
    if (incorrect.length == 0)
    {
        if (level == 3)
        {
            sprite.style.display = "flexbox";
            sprite.style.alignItems = "center";
        }

        animationPlay(level);
    }
}

function refresh(level) {    
    sbt.style.backgroundColor = LEVEL_CLRS[level - 1];

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

    sprite.style.animation = "";
    
    var_name = ""; 
    id = "";
    inp = "";
}

function animationPlay(level) {
    bar1.style.backgroundColor = LEVEL_CLRS[level - 1];
    bar2.style.backgroundColor = LEVEL_CLRS[level - 1];
    bar3.style.backgroundColor = LEVEL_CLRS[level - 1];

    sprite.style.animation = LEVEL_ANIMATIONS[level - 1];
    if (level == 1)
    {
        setTimeout(() => {
            sprite.style.transform = `translateX(100px)`;
            sprite.innerHTML = "<img src='../media/sprites/pengy2.png' alt='Pengy'>";
            }, 700);
    }
}

function randomNotif() {
    notif_bar.style.opacity = "100%";
    notif_bar.innerHTML += `<p>${NOTIFS[notifNo]}</p>`;

    notifNo += 1;

    if (notifNo == 5)
    {
        notifNo = 0; 
        notif_bar = "";
    }

    setTimeout(() => notif_bar.style.animation = "1s transparency linear", 2000)
}