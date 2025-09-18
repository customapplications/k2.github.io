// Initialize the page once the DOM is fully loaded
$(document).ready(function() {
    enableTheme();
    renderPureCss();
    renderGoogleFonts();
    appendPureCssClass();
    //addFormShadow()
});

//drawLineBelowTitle()
 
const enableTheme = () => {
    // Add the 'mapei' class to several elements to apply the base theme
    $('body, form, .runtime-content, .runtime-form').addClass('mapei');
};

const renderPureCss = () => {
    // Pure-Css library
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css';
    link.integrity = 'sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls';
    link.crossOrigin = 'anonymous';

    // Responsive Grid
    /*const linkResponsiveGrid = document.createElement('link');
    linkResponsiveGrid.rel = 'stylesheet';
    linkResponsiveGrid.href = 'https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css';
*/
    // Meta tag to make layout responsive
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1';

    const style = document.createElement('style');
    style.textContent = `
        input, select, textarea {
            box-shadow: none !important;
            border: 1px solid #b2b2b2 !important;
            
        }
    `;

    document.head.appendChild(link);
    document.head.appendChild(linkResponsiveGrid);
    document.head.appendChild(meta);
    document.head.appendChild(style);
}

const renderGoogleFonts = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet';
    document.head.appendChild(link);
}


/*REMOVE DEFAULT BUTTON STYLE*/
const appendPureCssClass = () => {
    document.querySelector('form#form1')?.classList.add('pure-form');
    document.querySelectorAll('a.SourceCode-Forms-Controls-Web-Button').forEach(a => {
        a.classList.add('pure-button'); 
    });
}

/* const drawLineBelowTitle = () => {

    const existingLine = document.querySelector('#responsive-title-line');
    if (existingLine) existingLine.remove();

    const title = document.querySelector('h1.page-title');
    const target = document.querySelector('[name*="Table"]');

    if (title && target) {
        const line = document.createElement('div');
        const targetRect = target.getBoundingClientRect();
        const targetStyle = window.getComputedStyle(target);
        const lineLeftOffset = targetRect.left + window.scrollX;

        line.style.position = 'absolute';
        line.style.top = (title.getBoundingClientRect().bottom + window.scrollY + 35) + 'px'; // 35px spacing
        line.style.left = lineLeftOffset + 'px';
        line.style.width = targetRect.width + 'px';
        line.style.height = '1px';
        line.style.backgroundColor = '#adb5bd';
        line.style.zIndex = '10';
        line.id = 'responsive-title-line';

        document.body.appendChild(line);
    }
}

window.addEventListener('resize', drawLineBelowTitle);

const addFormShadow = () => {
    if (document.querySelector('.tab-box-body')) {
        document.querySelector('.tab-box-body').classList.add('form-shadow');
    } else if (document.querySelector('.form')) {
        document.querySelector('.form').classList.add('form-shadow');
    }
}

 */
