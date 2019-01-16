const {ipcRenderer} = require('electron');
const {BrowserWindow} = require('electron').remote;
const path = require('path');
const btn = document.querySelector('#new');

let win;
btn.onclick = ()=>{
    const winID = BrowserWindow.getFocusedWindow().id;

    win = new BrowserWindow({
        width : 200,
        height : 150,
        show : true
    });

    win.loadURL(path.join('file:', __dirname, '../new-win.html'));
    win.webContents.openDevTools();
    win.webContents.on('did-finish-load', (event)=>{
        win.webContents.send('msg', winID, {name:'alexi', text : 'hello'});
    });

    ipcRenderer.on('back', (event, winID, msg)=>{
        console.log(msg)
    });
};