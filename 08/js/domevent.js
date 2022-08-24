var pic = document.querySelector("#pic");
pic.addEventListener("mouseover", changePic, false);
pic.addEventListener("mouseout", originPic, false);

function changePic() {
  pic.src = "images/boy.png";
}
function drawBorder() {
  pic.style.border = "2px dotted #666";
}

function originPic() {
  pic.src = "images/girl.png";
}
