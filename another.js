function internalHandler(e) {
    e.preventDefault(); 
    e.returnValue = "";
    return "Are you Really Sure to Leave! THIS WILL NOT SAVE"; 
}

if (window.addEventListener) {
    window.addEventListener('beforeunload', internalHandler, true);
} else if (window.attachEvent) {
    window.attachEvent('onbeforeunload', internalHandler);
}