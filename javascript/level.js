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

// MUSIC STUFF
const music = document.getElementById("music");
const btn = document.getElementById("musicbutton");
const icon = btn.querySelector("i");

btn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        btn.src = "volume-on.svg";
    } else {
        music.pause();
        btn.src = "volume-off.svg";
    }
});


function checkInput(level){
    sbt.style.backgroundColor = "grey";

    incorrect = []; // reset

    for (let i = 0; i < 3; i++) { //check all blanks
        id = "blank" + (i + 1);
        inp = document.getElementById(id).value;

        switch(level) { //compares to correct ans
            case 1:
                if (inp != LEVEL1_STR[i]) incorrect.push(i);
                break;
            case 2:
                if (inp != LEVEL2_STR[i]) incorrect.push(i);
                break;
            case 3:
                if (inp != LEVEL3_STR[i]) incorrect.push(i);
                break;
        }
    }

    let correct = 3 - incorrect.length;
    let progress = Math.round((correct / 3) * 100);

    // save prog
    saveProgress(level, progress);

    if (incorrect.length == 1) //update bar
        bar2.style.backgroundColor = LEVEL_CLRS[level - 1];

    if (incorrect.length <= 2)
        bar1.style.backgroundColor = LEVEL_CLRS[level - 1];

    if (progress === 100) {
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

    incorrect = [];

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
    setTimeout(() => notif_bar.style.opacity = "0", 5000)
}

// local storage fcns
function saveText(level) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currUser = Number(localStorage.getItem("curr")) || 0;

    if (currUser === 0) return;

    let data = {
        blank1: document.getElementById("blank1").value,
        blank2: document.getElementById("blank2").value,
        blank3: document.getElementById("blank3").value
    };

    users[currUser - 1]["Lvl" + level + "_text"] = data;
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
}

// persists the text on load
function reload(level) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currUser = Number(localStorage.getItem("curr")) || 0;

    if (currUser === 0) return;
 
    let data = users[currUser - 1]["Lvl" + level + "_text"];

    if (data) {
        document.getElementById("blank1").value = data.blank1 || "";
        document.getElementById("blank2").value = data.blank2 || "";
        document.getElementById("blank3").value = data.blank3 || "";
    }
};

function clearText(level){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currUser = Number(localStorage.getItem("curr")) || 0;

    if (currUser === 0) return;

    delete users[currUser - 1][`Lvl${level}_text`];

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("blank1").value = '';
    document.getElementById("blank2").value = '';
    document.getElementById("blank3").value = '';

    alert('Cleared!');
}

function saveProgress(level, progress) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currUser = Number(localStorage.getItem("curr")) || 0;

    if (currUser === 0 || !users[currUser - 1]) return;

    let levelKey = "Lvl" + level;

    users[currUser - 1][levelKey] = progress;

    localStorage.setItem("users", JSON.stringify(users));
}