const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');
const {TRTCKitApp} = require('./main-process/trtckit/trtckit-app');
const { session } = require('electron');


let mainWindow;
let trtckitApp;



const createWindow = ()=>{

    trtckitApp = new TRTCKitApp();
    console.log(trtckitApp.sdkAppid, trtckitApp.accountType);
    // 查询cookie是否有登录信息，如果有，则直接从本地登录
    session.defaultSession.cookies.get({}, (error, cookies) => {
        console.log(error, cookies);

        if (cookies === null || cookies.length === 0) {
            // 如果没有则跑登录界面

            let loginWindow = new BrowserWindow({
                width : 300,
                height : 400
            });
        
            const indexpath = url.format(path.join(__dirname, './sections/login.html'));
        
            loginWindow.loadURL(indexpath);
            
        
            loginWindow.on('closed', ()=>{
                loginWindow = null;
            });

        } else {
            mainWindow = new BrowserWindow({
                width : 800,
                height : 600
            });
        
            const indexpath = url.format({
                pathname : path.join(__dirname, './sections/index.html'),
                protocol : 'file:',
                slashes : true
            });
        
            mainWindow.loadURL(indexpath);
            mainWindow.webContents.openDevTools(false);
        
            mainWindow.on('closed', ()=>{
                mainWindow = null;
            });
        }
      })
    
}

// require('./main-process/shortcut.js');
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

