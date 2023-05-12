$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');

    });

});


const context = {
    tools: [
        {
            href: '#Submenu',
            id: 'Submenu',
            title: 'HTML Tutorials',
            sites: [
                {
                    name: 'HTML Dog',
                    link: 'http://www.htmldog.com/',
                    description: 'Learn HTML through tutorials and guides'
                },
                {
                    name: 'W3Schools',
                    link: 'https://www.w3schools.com/',
                    description: 'Online web development tutorials and references'
                },
                {
                    name: 'Quackit',
                    link: 'https://www.quackit.com/',
                    description: 'Web development tutorials and resources'
                }
            ]
        },
        {
            href: '#firstSubmenu',
            id: 'firstSubmenu',
            title: 'Image bank',
            sites: [
                {
                    name: 'PixaBay',
                    link: 'https://pixabay.com/',
                    description: 'Explore a vast collection of free images and videos'
                },
                {
                    name: 'Pexels',
                    link: 'https://www.pexels.com/',
                    description: 'Discover high-quality free stock photos and videos'
                },
                {
                    name: 'Unsplash',
                    link: 'https://unsplash.com/',
                    description: 'Access a large library of free, high-resolution photos'
                }
            ]
        },
        {
            href: '#secondSubmenu',
            id: 'secondSubmenu',
            title: 'Icon bank',
            sites: [
                {
                    name: 'Flaticon',
                    link: 'https://www.flaticon.com/',
                    description: 'Find free vector icons for your projects'
                },
                {
                    name: 'Freepik',
                    link: 'https://www.freepik.com/',
                    description: 'Discover millions of free graphic resources'
                },
                {
                    name: 'Font Awesome',
                    link: 'https://fontawesome.com/icons?d=gallery',
                    description: 'The web\'s most popular icon set and toolkit'
                },
                {
                    name: 'Fontello',
                    link: 'http://fontello.com/',
                    description: 'Icon fonts generator and icon library'
                }
            ]
        },
        {
            href: '#thirdSubmenu',
            id: 'thirdSubmenu',
            title: 'Color schemes',
            sites: [
                {
                    name: 'Adobe Color',
                    link: 'https://color.adobe.com/pl/create/color-wheel/',
                    description: 'Create and explore color schemes'
                },
                {
                    name: 'Colorzilla',
                    link: 'https://www.colorzilla.com/gradient-editor/',
                    description: 'Advanced CSS gradient generator'
                },
                {
                    name: 'Coolors',
                    link: 'https://coolors.co/',
                    description: 'Generate and explore color palettes'
                }
            ]
        },
        {
            href: '#fourthSubmenu',
            id: 'fourthSubmenu',
            title: 'Snippets',
            sites: [
                {
                    name: 'Stack Overflow',
                    link: 'https://stackoverflow.com/',
                    description: 'Q&A community for developers'
                },
                {
                    name: 'Snipplr',
                    link: 'https://snipplr.com/',
                    description: 'Code snippets repository'
                }
            ]
        },
        {
            href: '#fifthSubmenu',
            id: 'fifthSubmenu',
            title: 'Code Editors',
            sites: [
                {
                    name: 'Visual Studio Code',
                    link: 'https://code.visualstudio.com/',
                    description: 'Free and powerful source code editor'
                },
                {
                    name: 'Brackets',
                    link: 'http://brackets.io/',
                    description: 'Open-source code editor for web design'
                },
                {
                    name: 'Atom',
                    link: 'https://atom.io/',
                    description: 'A hackable text editor for the 21st century'
                }
            ]
        },
        {
            href: '#sixthSubmenu',
            id: 'sixthSubmenu',
            title: 'Validators',
            sites: [
                {
                    name: 'W3C Validator',
                    link: 'https://validator.w3.org/',
                    description: 'Markup validation service by W3C'
                },
                {
                    name: 'Mobile Optimization by Google',
                    link: 'https://search.google.com/test/mobile-friendly',
                    description: 'Check mobile-friendliness of your website'
                },
                {
                    name: 'Page Speed Test',
                    link: 'https://tools.pingdom.com/',
                    description: 'Website performance and speed testing'
                }
            ]
        },
        {
            href: '#seventhSubmenu',
            id: 'seventhSubmenu',
            title: 'Image Compression',
            sites: [
                {
                    name: 'JPEG Mini',
                    link: 'https://www.jpegmini.com/',
                    description: 'Reduce the file size of JPEG images'
                },
                {
                    name: 'TinyPNG',
                    link: 'https://tinypng.com/',
                    description: 'Compress PNG images without quality loss'
                }
            ]
        },
        {
            href: '#eighthSubmenu',
            id: 'eighthSubmenu',
            title: 'Online Editors',
            sites: [
                {
                    name: 'CodePen',
                    link: 'https://codepen.io/',
                    description: 'Front-end development playground'
                },
                {
                    name: 'Liveweave',
                    link: 'https://liveweave.com/',
                    description: 'Online HTML, CSS, and JavaScript editor'
                }
            ]
        },
        {
            href: '#ninthSubmenu',
            id: 'ninthSubmenu',
            title: 'Responsive Web Design',
            sites: [
                {
                    name: 'Active Demo',
                    link: 'https://activedemo.net/viewport-test',
                    description: 'Test responsive web design on various devices'
                },
                {
                    name: 'Quirktools',
                    link: 'http://quirktools.com/screenfly',
                    description: 'Test your website\'s responsiveness'
                }
            ]
        },
        {
            href: '#tenthSubmenu',
            id: 'tenthSubmenu',
            title: 'Books',
            sites: [
                {
                    name: 'Eloquent JavaScript',
                    link: 'https://eloquentjavascript.net/',
                    description: 'A book about JavaScript programming'
                }
            ]
        },
        {
            href: '#eleventhSubmenu',
            id: 'eleventhSubmenu',
            title: 'Bootstrap',
            sites: [
                {
                    name: 'Installation',
                    link: 'https://getbootstrap.com/docs/4.3/getting-started/introduction/',
                    description: 'Guide for installing Bootstrap framework'
                },
                {
                    name: 'Components',
                    link: 'https://getbootstrap.com/docs/4.1/components/alerts/',
                    description: 'Explore the components provided by Bootstrap'
                }
            ]
        }
    ]
};


const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHTML = template(context);
document.getElementById('components').innerHTML = compiledHTML;

$(document).ready(function () {
    // Handle Collapse button click
    $("#collapse-btn").click(function () {
        $(".sidebar-components ul.collapse").collapse("hide");
    });
});  