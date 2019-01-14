const { Menu, appn, ipcMain, BrowserWindow} = require('electron');

let template = [
    {
        label : 'one',
        summenu : [
            {
                label : 'two'
            },
            {
                type : 'separator'
            },
            {
                label : 'haha',
                click : ()=>{
                    console.log("hahaha")
                }
            }
        ]
    },
    {
        label : 'ttt',
        submenu : [
            {
                label : "mhahs"
            }
        ]
    }
];

let menu = Menu.buildFromTemplate(template);

// Menu.setApplicationMenu(menu);

// app.dock.setMenu(menu);

ipcMain.on('show-context-menu', (e)=>{
    const win = BrowserWindow.fromWebContents(e.sender);
    menu.popup(win);
})