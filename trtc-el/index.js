const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');
const {TRTCKitApp} = require('./main-process/trtckit/trtckit-app');
const { session } = require('electron');

let loginWindow;
let mainWindow;
let trtckitApp;



const createWindow = ()=>{

    trtckitApp = new TRTCKitApp();
    console.log(trtckitApp.sdkAppid, trtckitApp.accountType);
    // 查询cookie是否有登录信息，如果有，则直接从本地登录
    session.defaultSession.cookies.get({}, (error, cookies) => {
        console.log(error, cookies);

        if (cookies.length === 0 || cookies === null) {
            // 如果没有则跑登录界面

            loginWindow = new BrowserWindow({
                width : 300,
                height : 400,
            });
        
            const indexpath = url.format(path.join('file:/', __dirname,'./src/login.html'));
        
            loginWindow.loadURL(indexpath);
            loginWindow.webContents.openDevTools(true);
        
            loginWindow.on('closed', ()=>{
                loginWindow = null;
            });

        } else {

            for (var o in cookies)
            {
                console.log(o);
            }

            mainWindow = new BrowserWindow({
                width : 800,
                height : 600
            });
        
            mainWindow.loadURL(path.join('file:/', __dirname,'./src/index.html'));
            mainWindow.webContents.openDevTools(false);
        
            mainWindow.on('closed', ()=>{
                mainWindow = null;
            });
        }
      })
    
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



// const {app, BrowserWindow} = require('electron');
// const url = require('url');
// const path = require('path');
// // const pdf = require('./main-process/pdf.js').pdf;

// let mainWindow;

// const createWindow = ()=>{
//     trtckitApp = new TRTCKitApp();
//     console.log(trtckitApp.sdkAppid, trtckitApp.accountType);
//     mainWindow = new BrowserWindow({
//         width : 800,
//         height : 600
//     });

//     const indexpath = url.format({
//         pathname : path.join(__dirname, './sections/index.html'),
//         protocol : 'file:',
//         slashes : true
//     });

//     mainWindow.loadURL(indexpath);
//     mainWindow.webContents.openDevTools(false);

//     mainWindow.on('closed', ()=>{
//         mainWindow = null;
//     });

//     // require('./main-process/menu.js');
//     // require('./main-process/msg-a.js');
//     // require('./main-process/tray.js');
//     // require('./main-process/dialog.js');

//     // pdf(mainWindow);
    
// }

// // require('./main-process/shortcut.js');
// app.on('ready', createWindow);

// app.on('windows-all-closed', ()=>{
//     if(process.platform !== 'darwin') {
//         app.quit();
//     }
// });

// app.on('activate', ()=>{
//     if(mainWindow === null) {
//         createWindow();
//     }
// });


