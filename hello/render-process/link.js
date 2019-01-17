const {shell} = require('electron');

const btn = document.querySelector('#openulr');

btn.onclick = ()=>{
    shell.openExternal('http://www.baidu.com');
}


const links = document.querySelectorAll('a[href]');
Array.from(links).forEach((link)=>{
    console.log(link);
    const url =  link.getAttribute('href');
    console.log(url);
    if (url.indexOf('http') == 0) {
        link.onclick = (e)=>{
            e.preventDefault();
            shell.openExternal(url);
        }
    }
});
