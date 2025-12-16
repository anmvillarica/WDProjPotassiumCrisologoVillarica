const ADDRESSES = ["index", "how2play", "background", "aboutus"];
const TITLES = ['<i class="fa fa-fw fa-home homeicon"></i>', 'HOW TO PLAY', 'BACKGROUND', 'ABOUT US']; 

function createNavBar(page) {
    var header = document.querySelector('header');

    header.innerHTML += "<ul class='navbar'></ul>";

    var links = document.querySelector('.navbar');

    for (let i = 0; i < ADDRESSES.length; i++)
    {   
        links.innerHTML += "<li><a href=`.";

        // checks if it is the homepage
        if (i == 0)
            links.innerHTML += `.`;
        
        links.innerHTML += `/${ADDRESSES[i]}.html`;
        links.innerHTML += "`";

        // checks if it is the current page
        if (i == (page - 1))
            links.innerHTML += `aria-current="page"`;

        links.innerHTML += `">${TITLES[i]}</a></li>`;
    }
}
