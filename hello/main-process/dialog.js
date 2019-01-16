const {dialog} = require('electron');

// dialog.showErrorBox('titile', 'error');

// dialog.showMessageBox({
//     type : 'info',
//     title : 'message',
//     message : 'hello electron',
//     buttons : ['好的', '不好']
// }, (index)=>{
//     if (index == 0) {
//         console.log('好的');
//     } else {
//         console.log('错的');
//     }
// })


// dialog.showOpenDialog({
//     properties : ['openDirectory', 'openFile']
// }, (files)=>{
//     console.log(files);
// })

// dialog.showSaveDialog({
//     title : 'save something',
//     filters : [{name : 'some', extensions: ['js']}]
// }, (filename)=>{
//     console.log(filename);
// })