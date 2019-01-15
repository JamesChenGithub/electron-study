const {ipcRenderer} = require('electron')

const btn = document.querySelector('#msg-a');
btn.onclick = ()=>{
    const msg = ipcRenderer.sendSync('msg-a');
    console.log(msg);
};


const btn2 = document.querySelector('#msg-a-1');
btn2.onclick = ()=>{
    const msg = ipcRenderer.send('msg-a-1', {name : 'hello'});
    console.log(msg);
    
    ipcRenderer.on('msg-a-1-back', (event, args)=>{
        console.log(event);
        console.log(args);
        console.log(args.name);
    });
};

