var imgs = document.body.getElementsByClassName("clickimg");
for (var i = 0; i < imgs.length; i++) {
    var source = imgs[i].src;
    imgs[i].addEventListener("click", function() { imagePopup(source); });
}

function imagePopup(src) {
    var popupBackground = document.createElement("div");
    popupBackground.className = "popupbg";
    popupBackground.addEventListener("click", function() { popupBackground.remove(); });
    popupBackground.innerHTML = `<img src="${src}" class="popupimg">`;
    document.body.appendChild(popupBackground);
    console.log(src);
}