const path = require('path');

const option = {
    title : 'title',
    body : 'this is a icon',
    icon : path.join('main-process/img_sharewechat@2x.png')
}

const notti = new window.Notification(option.title, option);

notti.onclick = ()=>{
    console.log('click notification');
}