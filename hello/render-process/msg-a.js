const {ipcRenderer} = require('electron')

const btn = document.querySelector('#msg-a');
btn.onclick = ()=>{
    const msg = ipcRenderer.sendSync('msg-a');
    console.log(msg);
};
