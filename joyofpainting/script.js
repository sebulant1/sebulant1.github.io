// Global vars
var canvas = document.getElementById("imagecanvas");
canvas.width = 32;
canvas.height = 32;
var canvasCtx = canvas.getContext("2d");
var canvasSize = 0;

// Default canvas image
var img = new Image();
img.onload = function() {
	drawImgToCanvas();
}
img.src = "blank.png";

// Event listeners
document.getElementById("imagebutton").addEventListener("click", function(){document.getElementById("imageupload").click();});
document.getElementById("imageupload").addEventListener("change", uploadFile);
function uploadFile() {
	if (!this.files[0]) return;

	let fileReader = new FileReader();
	fileReader.onload = function() {
		img = new Image();
		img.onload = function() {
			drawImgToCanvas()
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
		if (img.src.includes("blank.png")) return;
		drawImgToCanvas()
	});
}

function drawImgToCanvas() {
	canvas.width = 32;
	canvas.height = 32;
	let x1 = 0;
	let y1 = 0;
	let x2 = 32;
	let y2 = 32;
	if (canvasSize == 0) {
		canvas.width = 16;
		canvas.height = 16;
		x2 = 16;
		y2 = 16;
	}
	else if (canvasSize == 2) {
		y1 = 8;
		y2 = 16;
	}
	else if (canvasSize == 3) {
		x1 = 8;
		x2 = 16;
	}
	canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
	canvasCtx.drawImage(img, x1, y1, x2, y2);
}

document.getElementById("test").addEventListener("change", function() {
	nbt.parseUncompressed(this.files[0]);
});
