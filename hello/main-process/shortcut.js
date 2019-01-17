const {app, globalShortcut, dialog} = require('electron');

app.on('ready', ()=>{
    globalShortcut.register('Cmd+Y', ()=>{
        dialog.showMessageBox({
            message : '快捷键',
            type  : 'info',
            detail : '已经成功触发快捷键',
            buttons:['确认']
        });
    })
})

app.on('will-quit', ()=>{
    globalShortcut.unregisterAll();
})