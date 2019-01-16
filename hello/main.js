const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

const createWindow = ()=>{
    mainWindow = new BrowserWindow({
        width : 800,
        height : 600
    });

    const indexpath = url.format({
        pathname : path.join(__dirname, 'index.html'),
        protocol : 'file:',
        slashes : true
    });

    mainWindow.loadURL(indexpath);
    mainWindow.webContents.openDevTools(false);

    mainWindow.on('closed', ()=>{
        mainWindow = null;
    });

    require('./main-process/menu.js');
    require('./main-process/msg-a.js');
    require('./main-process/tray.js');
    require('./main-process/dialog.js');
}
app.on('ready', createWindow);

app.on('windows-all-closed', ()=>{
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', ()=>{
    if(mainWindow === null) {
        createWindow();
    }
});