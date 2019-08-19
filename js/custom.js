$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        
    });

});


const context = {
    tools: [ {
       title: 'Bootstrap',
       link: 'https://getbootstrap.com/docs/4.3/getting-started/introduction/'
    },
    {
        title: 'HTML Tutorials',
        site1: 'HTML Dog',
        link1: 'http://www.htmldog.com/',
        site2: 'W3Schools',
        link2: 'https://www.w3schools.com/',
        site3: 'Quackit',
        link3: 'https://www.quackit.com/'
    },
    {
        title: 'Image bank',
        site1: 'PixaBay',
        link1: 'https://pixabay.com/',
        site2: 'Pexels',
        link2: 'https://www.pexels.com/',
        site3: 'Unsplash',
        link3: 'https://unsplash.com/'
    },
    {
        title: 'Icon bank',
        site1: 'Flaticon',
        link1: 'https://www.flaticon.com/',
        site2: 'Freepik',
        link2: 'https://www.freepik.com/',
        site3: 'Font Awesome',
        link3: 'https://fontawesome.com/icons?d=gallery',
        site4: 'Fontello',
        link4: 'http://fontello.com/'
    },



    ]
};


const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHTML = template(context);
document.getElementById("components").innerHTML = compiledHTML;