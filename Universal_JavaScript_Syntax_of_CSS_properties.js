function changeColorOnClick() {
  var div = document.getElementById("mydiv1");
  var currentColor = div.style.backgroundColor;
  4;
  var newColor;

  if (currentColor === "blue") {
    newColor = "red";
  } else {
    newColor = "blue";
  }
  div.style.backgroundColor = newColor;
}

function doubleFontSizeOnClick() {
  var text = document.getElementById("mydiv2");
  var currentSize = parseFloat(
    window.getComputedStyle(text).getPropertyValue("font-size")
  );
  var newSize = currentSize * 2;
  text.style.fontSize = newSize + "px";
}
// document.getElementById("mydiv").style.background = "blue";
