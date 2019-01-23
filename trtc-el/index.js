const {
    app,
    BrowserWindow
} = require('electron');
const url = require('url');
const path = require('path');
const {
    TRTCKitApp
} = require('./main-process/trtckit/trtckit-app');
const {
    session
} = require('electron');

let mainWindow;
let trtckitApp;



const createWindow = () => {

    trtckitApp = new TRTCKitApp();
    console.log(trtckitApp.sdkAppid, trtckitApp.accountType);


    mainWindow = new BrowserWindow({
        width: 600,
        height: 480,
        minWidth : 600,
        minHeight : 480,
    });

    mainWindow.loadURL(path.join('file:/', __dirname, './src/flex.html'));
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}


app.on('ready', createWindow);

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});