var imgs = document.body.getElementsByClassName("clickimg");
for (var i = 0; i < imgs.length; i++) {
    var source = imgs[i].src;
    imgs[i].addEventListener("click", imagePopupEvent);
    console.log(source);
}

function imagePopupEvent() {
    imagePopup(this.src);
}

function imagePopup(src) {
    var popupBackground = document.createElement("div");
    popupBackground.className = "popupbg";
    popupBackground.addEventListener("click", function() { popupBackground.remove(); allowScrolling(true); });
    popupBackground.innerHTML = `<img src="${src}" class="popupimg">`;
    document.body.appendChild(popupBackground);
    allowScrolling(false);
}

function allowScrolling(allow) {
    document.body.style.overflow = allow ? "auto" : "hidden";
    document.body.style.userSelect = allow ? "auto" : "none";
}