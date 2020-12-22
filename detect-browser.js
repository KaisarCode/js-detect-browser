// Detect browser
function detectBrowser() {
    var out = 'other';
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') !== -1) out = 'safari';
    if (ua.indexOf('firefox') !== -1) out = 'firefox';
    if (ua.indexOf('chrome') !== -1) out = 'chrome';
    if (ua.indexOf('chromium') !== -1) out = 'chrome';
    if (ua.indexOf('opera') !== -1) out = 'opera';
    if (ua.indexOf('opr') !== -1) out = 'opera';
    if (ua.indexOf('msie') !== -1) out = 'ie';
    if (ua.indexOf('edg') !== -1) out = 'edge';
    return out;
};
