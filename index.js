const display = document.querySelector("#display");

function hover(img) {
	img.style.opacity = 0.5;
    img.style.border = "1px solid red";
    display.src = img.src;
}

function leave(img) {
	img.style.opacity = 1;
    img.style.border = "none";
}
