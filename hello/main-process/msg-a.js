const {ipcMain} = require('electron');

ipcMain.on('msg-a', (event)=>{
    event.returnValue = 'hello';
});

ipcMain.on('msg-a-1', (event, args)=>{
    console.log(args.name);
    event.sender.send('msg-a-1-back', {name : 'alexi'});
});