const LEVEL1_STR = ["transform:", "0,0,255", "}"]
const LEVEL2_STR = ["document.getElementbyId", "i = 0", "break"]
const LEVEL3_STR = ["font-family:", "align-items:", "flexbox"]
var levelSelector = 0; 

var sbt = document.getElementById("submit_btn");
var sprite = document.getElementById("sprite");

function checkInput(){
    var incorrect = [];

    for (let i = 0; i < 3; i++)
    {
        var var_name = "inp" + (i + 1);
        var id = "blank" + (i + 1);
        var var_name = document.getElementById(id).value;

        switch(levelSelector)
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

    for (let i = 0; i < incorrect.length; i++)
        alert(incorrect[i]);
    if (incorrect.length == 0)
    {
        sprite.innerHTML = "<img src='../media/sprites/pengy2.png' alt='Pengy'>";
        sprite.style.animation = `5s linear level1animation`;
        setTimeout(() => {
            sprite.style.transform = `translateX(80px)`;
            }, 5000); // 5000 milliseconds = 5 seconds
    }
}
