require('./trtckit/trtckit-enum');
const {TRTCKitUser} = require('./trtckit/trtckit-user');
const {TRTCKitDevuce} = require('./trtckit/trtckit-device');
const {TRTCKitRoom} = require('./trtckit/trtckit-room');
 

function TRTCKitApp () {
    this.appVersion = '1.0.0';
    this.sdkVersion = '1.0.0';

    this.sdkAppid = 1400037025;
    this.user = null;
    this.userSig = "";

    this.room = null;

    //================================
    // SDK对外接口

    //================================
    // SDK对应的回调
    this.onLoginSucc = function(userid, usersig) {
        // 进房
    }

    this.onEnterRoom = function(elapse) {
        // 进房
    }

    this.onEnterRoom = function(elapse) {
        // 进房
    }

}

