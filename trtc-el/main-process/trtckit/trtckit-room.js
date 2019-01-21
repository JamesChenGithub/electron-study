const {TRTCKitUser} = require('./trtckit-user');
const {TRTCKitDevuce} = require('./trtckit-device');

function TRTCKitRoom() {

    this.userList = [];
    this.deviceList = [];

}

module.exports = {
    TRTCKitRoom : TRTCKitRoom,
}