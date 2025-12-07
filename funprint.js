function sendToFunPrint(text) {
    let encoded = encodeURIComponent(text);
    window.location.href = "funprint://print?text=" + encoded;
}