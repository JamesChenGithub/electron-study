const {clipboard, nativeImage} = require('electron');

clipboard.writeText('hello chen');
clipboard.writeText('hello alexi');


console.log(clipboard.readText());

let img = nativeImage.createFromPath('./main-process/img_sharewechat.png');

clipboard.writeImage(img);

const imgurl = clipboard.readImage().toDataURL();

const img3 = new Image();
img3.src = imgurl;

document.body.append(img3);