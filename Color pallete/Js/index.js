// function changeColor() {
//     var colorNameInput = document.getElementById("colorName");
//     var colorBox = document.getElementById("colorBox");
//     var colorName = colorNameInput.value;
//     colorBox.style.backgroundColor = colorName;
//     colorNameInput.style.color = colorName;
//     alert("Success! The color has been changed to " + colorName + ".");
// }

function changeColor() {

    var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink"];
    var colorNameInput = document.getElementById("colorName");
    var colorBox = document.getElementById("colorBox");
    var colorName = colorNameInput.value.toLowerCase();
    
    if (colorName === "") {
        alert("Please enter a color.");
    } 
    else if (colors.includes(colorName)) {
        colorBox.style.backgroundColor = colorName;
        colorNameInput.style.color = colorName;
        alert("Success! The color has been changed to " + colorName + ".");
    }
     else {
        alert("Color not found. Please enter one of the following colors");
    }
}
function resetColor() {
    var colorNameInput = document.getElementById("colorName");
    var colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = "white";
    colorNameInput.value = "";
    colorNameInput.style.color = "black";
}