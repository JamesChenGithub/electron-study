var TRTCKitVideoResolutionMode = {
    Landscape : 0, ///< 横屏分辨率
    Portrait : 1, ///< 竖屏分辨率
}

var TRTCKitAppScene = {
    VideoCall: 0, ///< 视频通话场景，即绝大多数时间都是两人或两人以上视频通话的场景
    ///  内部编码器和网络协议优化侧重流畅性，降低通话延迟和卡顿率

    Live: 1, ///< 直播场景，即绝大多数时间都是一人直播，偶尔有多人视频互动的场景
    ///  内部编码器和网络协议优化侧重性能和兼容性，性能和清晰度表现更佳
}

var TRTCKitVideoStreamType = {
    Big : 0, //大画面视频流
    Small : 1, //小画面视频流
    Sub : 2, //辅流（屏幕分享）
}

/**
 * Qos流控模式，本地控制还是云端控制
 */
var TRTCKitQosMode = {
    Client : 0, ///< 客户端控制（用于SDK开发内部调试，客户请勿使用）
    Server : 1, ///< 云端控制 （默认）
}

/**
 * 对于画面质量偏好
 * 流畅 - 在遭遇弱网环境时，画面会变得模糊，且会有较多马赛克，但可以保持流畅不卡顿
 * 清晰 - 在遭遇弱网环境时，画面会尽可能保持清晰，但可能会更容易出现卡顿
 */
var TRTCKitVideoQosPreference = {
    Smooth : 1, ///< 流畅
    Clear : 2, ///< 清晰
}

var TRTCKitLogLevel = {
    None : 0, ///< 不输出任何sdk log
    Verbose : 1, ///< 输出所有级别的log
    Debug : 2, ///< 输出 DEBUG，INFO，WARNING，ERROR 和 FATAL 级别的log
    Info : 3, ///< 输出 INFO，WARNNING，ERROR 和 FATAL 级别的log
    Warn : 4, ///< 只输出WARNNING，ERROR 和 FATAL 级别的log
    Error : 5, ///< 只输出ERROR 和 FATAL 级别的log
    Fatal : 6, ///< 只输出 FATAL 级别的log
}

var TRTCKitQuality = {
    Unknown : 0,
    Excellent : 1,
    Good : 2,
    Poor : 3,
    Bad : 4,
    Vbad : 5,
    Down : 6,
}

/**
 * 视频画面填充模式
 */
var TRTCKitVideoFillMode = {
    Fill : 0, ///< 图像铺满屏幕，超出显示视窗的视频部分将被截掉
    Fit : 1, ///< 图像长边填满屏幕，短边区域会被填充黑色
}

 /**
     * 声音播放模式
     */
   var TRTCKitAudioRoute = {
        Speakerphone  :   0,   ///< 扬声器
        Earpiece      :   1,   ///< 听筒
    };
    
    // only windows/pc use
   var  TRTCKitMediaDeviceType = {
        Unknown      :   -1,
        
        AudioInput   :    0,
        AudioOutput  :    1,
        VideoCamera  :    2,
        
        //屏幕采集源
        VideoWindow  :    3,
        VideoScreen  :    4,
    }
    
    
    /**
     * 视频像素格式
     */
   var  TRTCKitVideoPixelFormat = {
        Unknown    : 0,
        I420       : 1,    ///< YUV I420
        Texture_2D : 2,    // OpenGL 2D 纹理. native接入时使用；
    }
    
    /**
     * 视频帧源类型
     */
   var  TRTCKitVideoFrameSrcType = {
        Unknown    : 0,   ///< 无视频采集源，远端播放的自定义渲染会回调此类型
        Camera     : 1,   ///< 视频采集源来自LiteAVSDK的摄像头数据
        Screen     : 2,   ///< 视频采集源来自LiteAVSDK的屏幕录屏数据
        User       : 1001, ///< 视频采集源来自用户传入的视频数据
    }
    
    
    /**
     * 视频画面旋转方向
     */
   var TRTCKitVideoRotation = {
        Rotation_0    : 0,
        Rotation_90   : 1,
        Rotation_180  : 2,
        Rotation_270  : 3,
    }


module.exports = {
    TRTCKitVideoResolutionMode: TRTCKitVideoResolutionMode,
    TRTCKitAppScene: TRTCKitAppScene,
    TRTCKitVideoStreamType: TRTCKitVideoStreamType,
    TRTCKitQosMode : TRTCKitQosMode,
    TRTCKitVideoQosPreference : TRTCKitVideoQosPreference, 
    TRTCKitLogLevel : TRTCKitLogLevel,
    TRTCKitQuality : TRTCKitQuality,
    TRTCKitVideoFillMode : TRTCKitVideoFillMode,
    TRTCKitAudioRoute : TRTCKitAudioRoute,
    TRTCKitVideoPixelFormat : TRTCKitVideoPixelFormat, 
    TRTCKitVideoFrameSrcType : TRTCKitVideoFrameSrcType,
    TRTCKitVideoRotation : TRTCKitVideoRotation,
}