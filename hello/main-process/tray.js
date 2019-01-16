const {Menu, Tray} = require('electron');
const path = require('path');

let appIcon = null;
appIcon = new Tray(path.join(__dirname, './img_sharewechat.png'));

const menu = Menu.buildFromTemplate([{
    label : 'close',
    click : function() {
        appIcon.destroy();
    }
}])

appIcon.setToolTip('love the app');
appIcon.setContextMenu(menu);
