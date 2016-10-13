window.i18n = (function anonymous() {
var pluralFuncs = {
  en: function (n, ord) {
    var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
    if (ord) return (n10 == 1 && n100 != 11) ? 'one'
        : (n10 == 2 && n100 != 12) ? 'two'
        : (n10 == 3 && n100 != 13) ? 'few'
        : 'other';
    return (n == 1 && v0) ? 'one' : 'other';
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
    t_m: function(d) { return "17UP Member"; },
    t_logined: function(d) { return "Login Success!"; },
    l_per: function(d) { return "Preferences"; },
    l_mode: function(d) { return "Mode"; },
    l_media: function(d) { return "Media"; },
    l_eye: function(d) { return "BgColor"; },
    l_lang: function(d) { return "Language"; },
    t_logout: function(d) { return "Logout"; },
    t_close: function(d) { return "Close"; },
    c_close: function(d) { return "None"; },
    c_green: function(d) { return "Green"; },
    c_blue: function(d) { return "Blue"; },
    o_record: function(d) { return "Recorder"; },
    o_live: function(d) { return "Live"; },
    m_audio: function(d) { return "Audio Only"; },
    m_both: function(d) { return "Video + Audio"; }
  },
  c_pl: {
    load_a: function(d) { return "Loading Audio..."; },
    err_cs: function(d) { return "Source Parse Error"; },
    err_fns: function(d) { return "Not Supported File Type"; },
    err_snap: function(d) { return "Please Snap After Video Played"; },
    t_ol: function(d) { return "Open Local File"; },
    t_pb: function(d) { return "Play／Puase"; },
    t_brf: function(d) { return "Fullscreen"; },
    t_snap: function(d) { return "Snap"; },
    t_play: function(d) { return "Play"; },
    t_resume: function(d) { return "Resume"; },
    t_replay: function(d) { return "Play Again"; }
  },
  frame_ctrl: {
    pageP: function(d) { return ""; },
    pageE: function(d) { return "th"; },
    skip: function(d) { return "Skip"; },
    insert: function(d) { return "Insert Blank"; },
    removeC: function(d) { return "Confirm to remove this page?"; }
  },
  live_video: {
    mdOn: function(d) { return "Living"; },
    mdOff: function(d) { return "Enable"; }
  },
  login: {
    t_login: function(d) { return "Login"; },
    t_regi: function(d) { return "Register"; },
    btn_login: function(d) { return "Login"; },
    fg_pwd: function(d) { return "Forgot Password?"; },
    reset_pwd: function(d) { return "Reset Password"; },
    back: function(d) { return "Back"; },
    btn_regi: function(d) { return "Register Now"; },
    email: function(d) { return "Email"; },
    pwd: function(d) { return "Password"; },
    nick: function(d) { return "Nick Name"; },
    tip_email: function(d) { return "Please enter your email address"; },
    tip_caps: function(d) { return "Notice, Caps Lock Currently"; }
  },
  record_ctrl: {
    record: function(d) { return "Record"; },
    pauseR: function(d) { return "Pause"; },
    resumeR: function(d) { return "Resume"; }
  },
  sketch_ctrl: {
    pen: function(d) { return "Pencil"; },
    mark: function(d) { return "Mark"; },
    pic: function(d) { return "Pictrue"; },
    text: function(d) { return "Texture"; },
    erase: function(d) { return "Eraser"; },
    undo: function(d) { return "Undo Previous Erase"; },
    color: function(d) { return "Select Color"; },
    px: function(d) { return "pixel"; }
  },
  user_navbar: {
    zoomIn: function(d) { return "Zoom In"; },
    zoomOut: function(d) { return "Zoom Out"; },
    remove: function(d) { return "Remove This Frame"; },
    contact: function(d) { return "Contact"; },
    player: function(d) { return "My Videos"; },
    newSection: function(d) { return "New Section"; },
    rmSection: function(d) { return "Remove Section"; },
    upSection: function(d) { return "Update Section"; },
    pref: function(d) { return "My Account"; },
    pdf: function(d) { return "New Stage From PDF"; },
    quiz: function(d) { return "Insert Quiz"; }
  }
}
})();