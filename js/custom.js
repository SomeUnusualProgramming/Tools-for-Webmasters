$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        
    });

});


const context = {
    tools: [ {   
        // HTML TUtorials //
        href: '#Submenu',
        id: 'Submenu',
        title: 'HTML Tutorials',
        site1: 'HTML Dog',
        link1: 'http://www.htmldog.com/',
        site2: 'W3Schools',
        link2: 'https://www.w3schools.com/',
        site3: 'Quackit',
        link3: 'https://www.quackit.com/'
    },
    {
        // Image bank //
        href: '#firstSubmenu',
        id: 'firstSubmenu',
        title: 'Image bank',
        site1: 'PixaBay',
        link1: 'https://pixabay.com/',
        site2: 'Pexels',
        link2: 'https://www.pexels.com/',
        site3: 'Unsplash',
        link3: 'https://unsplash.com/'
    },
    {
        // Icon bank //
        href: '#secondSubmenu',
        id: 'secondSubmenu',
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
    {
        // Colors //
        href: '#thirdSubmenu',
        id: 'thirdSubmenu',
        title: 'Colors',
        site1: 'Adobe Color',
        link1: 'https://color.adobe.com/pl/create/color-wheel/',
        site2: 'Colorzilla',
        link2: 'https://www.colorzilla.com/gradient-editor/',
    },
    {
        // Snippets //
        href: '#fourthSubmenu',
        id: 'fourthSubmenu',
        title: 'Snippets',
        site1: 'Stack overflow',
        link1: 'https://stackoverflow.com/',
        site2: 'Snipplr',
        link2: 'https://snipplr.com/',

    },
    {
        // Code Editors //
        href: '#fifthSubmenu',
        id: 'fifthSubmenu',
        title: 'Code Editors',
        site1: 'Visual Studio Code',
        link1: 'https://code.visualstudio.com/',
        site2: 'Brackets',
        link2: 'http://brackets.io/',
        site3: 'Atom',
        link3: 'https://atom.io/'
    },
    {
        // Validators //
        href: '#sixthSubmenu',
        id: 'sixthSubmenu',
        title: 'Validators',
        site1: 'W3C Validator',
        link1: 'https://validator.w3.org/',
        site2: 'Mobile optimialization by Google',
        link2: 'https://search.google.com/test/mobile-friendly',
        site3: 'Page Speed test',
        link3: 'https://tools.pingdom.com/'
    },
    {
        // Image compresion //
        href: '#seventhSubmenu',
        id: 'seventhSubmenu',
        title: 'Image compresion',
        site1: 'JPEG Mini',
        link1: 'https://www.jpegmini.com/',
        site2: 'Tiny PNG',
        link2: 'https://tinypng.com/',
    },
    {
        // Online Editors //
        href: '#eigthSubmenu',
        id: 'eigthSubmenu',
        title: 'Online Editors',
        site1: 'Codepen',
        link1: 'https://codepen.io/',
        site2: 'Liveweave',
        link2: 'https://liveweave.com/',
    },
    {
        // RWD //
        href: '#ninethSubmenu',
        id: 'ninethSubmenu',
        title: 'RWD',
        site1: 'Active Demo',
        link1: 'https://activedemo.net/viewport-test',
        site2: 'Quirktools',
        link2: 'http://quirktools.com/screenfly',
    },
    {
        // Books //
        href: '#tenthSubmenu',
        id: 'tenthSubmenu',
        title: 'Books',
        site1: 'Eloquent JavaSCript',
        link1: 'https://eloquentjavascript.net/',
    },
    {
        // Bootstrap //
        href: '#eleventhSubmenu',
        id: 'eleventhSubmenu',
        title: 'Bootstrap',
        site1: 'Instalation',
        link1: 'https://getbootstrap.com/docs/4.3/getting-started/introduction/',
        site2: 'Components',
        link2: 'https://getbootstrap.com/docs/4.1/components/alerts/',
    },
]};


const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHTML = template(context);
document.getElementById('components').innerHTML = compiledHTML;