// Global vars
var canvas = document.getElementById("imagecanvas");
var canvasCtx = canvas.getContext("2d");
var canvasSize = 2;

// Default canvas image
let img = new Image();
img.onload = function() {
	canvas.width = 16;
	canvas.height = 16;
	canvasCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
img.src = "blank.png";

// Event listeners
document.getElementById("imagebutton").addEventListener("click", function(){document.getElementById("imageupload").click();});
document.getElementById("imageupload").addEventListener("change", uploadFile);
function uploadFile() {
	if (!this.files[0]) return;

	let fileReader = new FileReader();
	fileReader.onload = function() {
		let img = new Image();
		img.onload = function() {
			canvas.width = 16;
			canvas.height = 16;
			if (canvasSize == 1 || canvas == 2) canvas.width = 32;
			if (canvasSize == 1 || canvas == 3) canvas.height = 32;
			canvasCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
		}
		img.src = fileReader.result;
	}
	fileReader.readAsDataURL(this.files[0]);
}

var canvasOptions = document.getElementsByClassName("canvasoption");
for (let i = 0; i < canvasOptions.length; i++) {
	canvasOptions[i].addEventListener("click", function() {
		// Change css for buttons
		for (let j = 0; j < canvasOptions.length; j++) {
			canvasOptions[j].className = "canvasoption";
		}
		canvasOptions[i].className = "canvasoption selected";
		canvasSize = canvasOptions[i].value;

		// Update canvas
		if (!canvas) return;
		console.log(canvas.toDataURL());
	});
}