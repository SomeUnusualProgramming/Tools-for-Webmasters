$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        
    });

});


const context = {
    tools: [ {
        href: 'https://getbootstrap.com/docs/4.3/getting-started/introduction/',
       title: 'Bootstrap',
    },
    {
        href: '#Submenu',
        title: 'HTML Tutorials',
        site1: 'HTML Dog',
        link1: 'http://www.htmldog.com/',
        site2: 'W3Schools',
        link2: 'https://www.w3schools.com/',
        site3: 'Quackit',
        link3: 'https://www.quackit.com/'
    },
    {
        href: '#firstSubmenu',
        title: 'Image bank',
        site1: 'PixaBay',
        link1: 'https://pixabay.com/',
        site2: 'Pexels',
        link2: 'https://www.pexels.com/',
        site3: 'Unsplash',
        link3: 'https://unsplash.com/'
    },
    {
        href: '#secondSubmenu',
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
        href: '#thirdSubmenu',
        title: 'Colors',
        site1: 'Adobe Color',
        link1: 'https://color.adobe.com/pl/create/color-wheel/',
        site2: 'Colorzilla',
        link2: 'https://www.colorzilla.com/gradient-editor/',
        site3: 'FXXX',
        link3: 'https://fontawesome.com/icons?d=gallery'
    },
    {
        href: '#fourthSubmenu',
        title: 'Snippets',
        site1: 'Stack overflow',
        link1: 'https://stackoverflow.com/',
        site2: 'Snipplr',
        link2: 'https://snipplr.com/',
        site3: 'XXX',
        link3: 'https://fontawesome.com/icons?d=gallery'
    },
    {
        href: '#fifthSubmenu',
        title: 'Code Editors',
        site1: 'XXX Visual',
        link1: 'https://stackoverflow.com/',
        site2: 'XXX Brackets',
        link2: 'https://snipplr.com/',
        site3: 'XXX Atom',
        link3: 'https://fontawesome.com/icons?d=gallery'
    },
    {
        href: '#sixthSubmenu',
        title: 'Validators',
        site1: 'W3C Validator',
        link1: 'https://validator.w3.org/',
        site2: 'Mobile optimialization by Google',
        link2: 'https://search.google.com/test/mobile-friendly',
        site3: 'Page Speed test',
        link3: 'https://tools.pingdom.com/'
    },
    {
        href: '#seventhSubmenu',
        title: 'Image compresion',
        site1: 'JPEG Mini',
        link1: 'https://www.jpegmini.com/',
        site2: 'Tiny PNG',
        link2: 'https://tinypng.com/',
        site3: 'XXX',
        link3: 'https://tools.pingdom.com/'
    },
    {
        href: '#eigthSubmenu',
        title: 'Online Editors',
        site1: 'Codepen',
        link1: 'https://codepen.io/',
        site2: 'Liveweave',
        link2: 'https://liveweave.com/',
        site3: 'XXX',
        link3: 'https://tools.pingdom.com/'
    },
    {
        href: '#ninethSubmenu',
        title: 'RWD',
        site1: 'Active Demo',
        link1: 'https://activedemo.net/viewport-test',
        site2: 'Quirktools',
        link2: 'http://quirktools.com/screenfly',
        site3: 'XXX',
        link3: 'https://tools.pingdom.com/'
    },



    ]
};


const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHTML = template(context);
document.getElementById('components').innerHTML = compiledHTML;