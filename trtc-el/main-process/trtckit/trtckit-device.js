
const {TRTCKitMediaDeviceType} = require('./trtckit-enum')

function TRTCKitDevice() {
    this.deviceid = "";
    this.deviceName = "";
    this.deviceType = TRTCKitMediaDeviceType.Unknown;

    var setInfo = function (devtype, devid, devName) {
        this.deviceid =  devid;
        this.deviceName = devName;
        this.deviceType = devtype;
    }
}

module.exports = {
    TRTCKitDevice : TRTCKitDevice,
}