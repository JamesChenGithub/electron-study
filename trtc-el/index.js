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
        width: 800,
        height: 600
    });

    mainWindow.loadURL(path.join('file:/', __dirname, './src/index.html'));
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