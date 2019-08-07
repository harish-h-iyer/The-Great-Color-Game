var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var begBtn = document.querySelector("#beg");
var proBtn = document.querySelector("#pro");
var squares = document.querySelectorAll(".square");

colorDisplay.textContent = pickedColor;

begBtn.addEventListener("click",function(){
    begBtn.classList.add("selected");
    proBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }    
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent="";

});

proBtn.addEventListener("click",function(){
    begBtn.classList.remove("selected");
    proBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i<squares.length;i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent="";    

});

resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0; i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent="";
    this.textContent = "New Color"
});

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "You are Genius!!";
            resetButton.textContent = "Play Again?"
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!"
        }
    });

}

function changeColor(color){
    for(var i = 0; i <squares.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
   var arr = [];
    for(var i = 0; i<num; i++){
        arr.push(randomColor());
    }

   return arr;
}
function randomColor(){
    //red
    var r = Math.floor(Math.random()*256);
    //green
    var g = Math.floor(Math.random()*256);
    //blue
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}