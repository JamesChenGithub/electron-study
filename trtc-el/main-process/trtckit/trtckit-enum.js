var TRTCKitVideoResolutionMode = {
    Landscape = 0, ///< 横屏分辨率
    Portrait = 1, ///< 竖屏分辨率
}

var TRTCKitAppScene = {
    VideoCall: 0, ///< 视频通话场景，即绝大多数时间都是两人或两人以上视频通话的场景
    ///  内部编码器和网络协议优化侧重流畅性，降低通话延迟和卡顿率

    Live: 1, ///< 直播场景，即绝大多数时间都是一人直播，偶尔有多人视频互动的场景
    ///  内部编码器和网络协议优化侧重性能和兼容性，性能和清晰度表现更佳
}

var TRTCKitVideoStreamType = {
    Big = 0, //大画面视频流
    Small = 1, //小画面视频流
    Sub = 2, //辅流（屏幕分享）
}

/**
 * Qos流控模式，本地控制还是云端控制
 */
var TRTCKitQosMode = {
    Client = 0, ///< 客户端控制（用于SDK开发内部调试，客户请勿使用）
    Server = 1, ///< 云端控制 （默认）
}

/**
 * 对于画面质量偏好
 * 流畅 - 在遭遇弱网环境时，画面会变得模糊，且会有较多马赛克，但可以保持流畅不卡顿
 * 清晰 - 在遭遇弱网环境时，画面会尽可能保持清晰，但可能会更容易出现卡顿
 */
var TRTCKitVideoQosPreference = {
    Smooth = 1, ///< 流畅
    Clear = 2, ///< 清晰
}

var TRTCKitLogLevel = {
    None = 0, ///< 不输出任何sdk log
    Verbose = 1, ///< 输出所有级别的log
    Debug = 2, ///< 输出 DEBUG，INFO，WARNING，ERROR 和 FATAL 级别的log
    Info = 3, ///< 输出 INFO，WARNNING，ERROR 和 FATAL 级别的log
    Warn = 4, ///< 只输出WARNNING，ERROR 和 FATAL 级别的log
    Error = 5, ///< 只输出ERROR 和 FATAL 级别的log
    Fatal = 6, ///< 只输出 FATAL 级别的log
}

var TRTCKitQuality = {
    Unknown = 0,
    Excellent = 1,
    Good = 2,
    Poor = 3,
    Bad = 4,
    Vbad = 5,
    Down = 6,
}

/**
 * 视频画面填充模式
 */
var TRTCKitVideoFillMode = {
    Fill = 0, ///< 图像铺满屏幕，超出显示视窗的视频部分将被截掉
    Fit = 1, ///< 图像长边填满屏幕，短边区域会被填充黑色
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
}