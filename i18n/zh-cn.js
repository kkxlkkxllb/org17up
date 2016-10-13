window.i18n = (function anonymous() {
var pluralFuncs = {
  "zh-cn": function (n, ord) {
    if (ord) return 'other';
    return 'other';
  }
};
var fmt = {};
var number = function (value, offset) {
  if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
  return value - (offset || 0);
};
var plural = function (value, offset, lcfunc, data, isOrdinal) {
  if ({}.hasOwnProperty.call(data, value)) return data[value]();
  if (offset) value -= offset;
  var key = lcfunc(value, isOrdinal);
  if (key in data) return data[key]();
  return data.other();
};
var select = function (value, data) {
  if ({}.hasOwnProperty.call(data, value)) return data[value]();
  return data.other()
};

return {
  ac_m: {
    t_m: function(d) { return "17UP 会员"; },
    t_logined: function(d) { return "已登录"; },
    l_per: function(d) { return "偏好设置"; },
    l_mode: function(d) { return "应用场景"; },
    l_media: function(d) { return "直播媒体"; },
    l_eye: function(d) { return "护眼滤镜"; },
    l_lang: function(d) { return "首选语言"; },
    t_logout: function(d) { return "登出"; },
    t_close: function(d) { return "收起"; },
    c_close: function(d) { return "关闭"; },
    c_green: function(d) { return "绿波"; },
    c_blue: function(d) { return "蓝波"; },
    o_record: function(d) { return "录播"; },
    o_live: function(d) { return "直播"; },
    m_audio: function(d) { return "音频"; },
    m_both: function(d) { return "视频＋音频"; }
  },
  c_pl: {
    load_a: function(d) { return "正在加载音轨..."; },
    err_cs: function(d) { return "文件格式解析错误"; },
    err_fns: function(d) { return "文件格式不支持"; },
    err_snap: function(d) { return "请开始播放后再截图"; },
    t_ol: function(d) { return "打开本地播放文件"; },
    t_pb: function(d) { return "播放／暂停"; },
    t_brf: function(d) { return "浏览器全屏"; },
    t_snap: function(d) { return "截取画面"; },
    t_play: function(d) { return "开始播放"; },
    t_resume: function(d) { return "继续播放"; },
    t_replay: function(d) { return "再次播放"; }
  },
  frame_ctrl: {
    pageP: function(d) { return "第"; },
    pageE: function(d) { return "页"; },
    skip: function(d) { return "跳转"; },
    insert: function(d) { return "新建一页"; },
    removeC: function(d) { return "确定移除本页吗？"; }
  },
  live_video: {
    mdOn: function(d) { return "直播中"; },
    mdOff: function(d) { return "开启直播"; }
  },
  login: {
    t_login: function(d) { return "登录"; },
    t_regi: function(d) { return "注册"; },
    btn_login: function(d) { return "立即登录"; },
    fg_pwd: function(d) { return "忘记密码？"; },
    reset_pwd: function(d) { return "重置密码"; },
    back: function(d) { return "返回"; },
    btn_regi: function(d) { return "立即注册"; },
    email: function(d) { return "邮箱"; },
    pwd: function(d) { return "密码"; },
    nick: function(d) { return "昵称"; },
    tip_email: function(d) { return "输入注册的邮箱地址"; },
    tip_caps: function(d) { return "当前键盘已锁定为大写模式，请注意"; }
  },
  record_ctrl: {
    record: function(d) { return "录制"; },
    pauseR: function(d) { return "暂停"; },
    resumeR: function(d) { return "继续"; }
  },
  sketch_ctrl: {
    pen: function(d) { return "画笔"; },
    mark: function(d) { return "荧光笔"; },
    pic: function(d) { return "图片"; },
    text: function(d) { return "文字输入"; },
    erase: function(d) { return "橡皮擦"; },
    undo: function(d) { return "撤销上一次擦除"; },
    color: function(d) { return "调色"; },
    px: function(d) { return "像素"; }
  },
  user_navbar: {
    zoomIn: function(d) { return "放大"; },
    zoomOut: function(d) { return "缩小"; },
    remove: function(d) { return "移除当前页"; },
    contact: function(d) { return "联系我"; },
    player: function(d) { return "我的录制"; },
    newSection: function(d) { return "新增一章节"; },
    rmSection: function(d) { return "删除当前章节"; },
    upSection: function(d) { return "更新章节标题"; },
    pref: function(d) { return "我的账户"; },
    pdf: function(d) { return "从PDF批量创建页面"; },
    quiz: function(d) { return "我的习题库"; }
  }
}
})();