const click = document.querySelector('#click');
const path = require('path');

const BrowserWindow = require('electron').remote.BrowserWindow;

let win ;
click.onclick = () => {
    // window.open('http://www.baidu.com');
    win = new BrowserWindow({
        width: 400,
        height : 300,
        frame : true
    });

    win.on('close', ()=>{
        win = null;
    })

    win.loadURL(path.join('file:', __dirname, '../modle-open.html'));

    console.log(win);
    //open('./modle-open.html');
}