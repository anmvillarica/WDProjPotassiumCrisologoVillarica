const ADDRESSES = ["index", "how2play", "background", "aboutus"];
const TITLES = ['<i class="fa fa-fw fa-home homeicon"></i>', 'HOW TO PLAY', 'BACKGROUND', 'ABOUT US']; 

function createNavBar(page) {
    var header = document.querySelector('header');

    header.innerHTML += "<ul class='navbar'></ul>";

    var links = document.querySelector('.navbar');
    var toInpString = "";

    for (let i = 0; i < ADDRESSES.length; i++)
    {   
        toInpString += "<li><a href='.";

        // checks if it is the homepage
        if (i == 0)
            toInpString += ".";
        
        toInpString += "/" + ADDRESSES[i] + ".html'";

        // checks if it is the current page
        if (i == (page - 1))
            toInpString += "aria-current='page'";

        toInpString += ">" + TITLES[i] + "</a></li>";
    }

    links.innerHTML = toInpString;
}
