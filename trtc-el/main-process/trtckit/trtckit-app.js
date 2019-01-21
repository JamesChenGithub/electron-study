require('./trtckit-enum');
const {
    TRTCKitUser
} = require('./trtckit-user');
const {
    TRTCKitDevuce
} = require('./trtckit-device');
const {
    TRTCKitRoom
} = require('./trtckit-room');


function TRTCKitApp() {
    this.appVersion = '1.0.0';
    this.sdkVersion = '1.0.0';

    this.sdkAppid = 1400037025;
    this.accountType = 14418;
    this.user = null;
    this.userSig = "";

    this.room = null;

    //================================
    // SDK对外接口


    //================================
    // SDK对应的回调
    this.onLoginSucc = function (userid, usersig) {
        // 进房
    }

    this.onEnterRoom = function ( /** int32_t elapsed */ elapse) {
        // 进房
    }

    this.onExitRoom = function ( /** int32_t reason */ reason) {
        // 进房
    }

    this.onUserEnter = function ( /** const char *userId*/ userid) {

    }

    this.onUserExit = function ( /** const char *userId*/ userid, /** int32_t reason */ reason) {

    }

}


module.exports = {
    TRTCKitApp: TRTCKitApp,
}