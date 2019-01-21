const {TRTCKitVideoFillMode} = require('./trtckit-enum')

function TRTCKitUser(){ 
    this.userid = "";
    this.hasAudio = false;
    this.hasVideo = false;
    this.volume = 0;
    this.audioQuality = 0;
    this.netQuality = 0;
    this.renderMode = TRTCKitVideoFillMode.Fill;
}

module.exports = {
    TRTCKitUser : TRTCKitUser,
}
