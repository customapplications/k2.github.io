$("span[name^=MapeiCell]").css("padding", "10px 15px");

function setFavicons(favImg,size,type,rel){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel',rel);
    setFavicon.setAttribute('href',favImg);
    if (size){
        setFavicon.setAttribute('size',size);
    }
    if (type){
        setFavicon.setAttribute('type',type);
    }        
    headTitle.appendChild(setFavicon);
}

setFavicons('https://customapplications.github.io/k2.github.io/favicon/favicon-96x96.png','96x96',null,'icon');
setFavicons('https://customapplications.github.io/k2.github.io/favicon/favicon.svg',null,'image/svg+xml','icon');
setFavicons('https://customapplications.github.io/k2.github.io/favicon/favicon.ico',null,null,'shortcut icon');
setFavicons('https://customapplications.github.io/k2.github.io/favicon/apple-touch-icon.png','180x180',null,'apple-touch-icon');
setFavicons('https://customapplications.github.io/k2.github.io/favicon/site.webmanifest',null,null,'manifest');
