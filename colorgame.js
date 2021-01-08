  var numSquares = 8;
  var colors = generateRandomColors(numSquares)
  var squares = document.querySelectorAll(".square")
  var pickedColor = pickColor();
  var colorDisplay = document.getElementById("colorDisplay")
  var messageDisplay = document.querySelector("#message")
  var h1 = document.querySelector("h1")
 var effect= document.querySelector("#effect")
 var easy= document.querySelector("#easy")
  var hard = document.querySelector("#hard")
var medium = document.querySelector("#medium")
var veryhard = document.querySelector("#veryhard")


easy.addEventListener("click",function(){
hard.classList.remove("selected")
easy.classList.add("selected")
medium.classList.remove("selected")
veryhard.classList.remove("selected")
numSquares = 3;
colors = generateRandomColors(numSquares)
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i =0; i < squares.length;i++){
  if(colors[i]){

  

  squares[i].style.background = colors[i];
  }else{
    squares[i].style.background = "none"
  }
}
})

medium.addEventListener("click",function(){
  hard.classList.remove("selected")
  easy.classList.remove("selected")
  medium.classList.add("selected")
  veryhard.classList.remove("selected")
  numSquares = 5;
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i =0; i < squares.length;i++){
    if(colors[i]){
  
    
  
    squares[i].style.background = colors[i];
    }else{
      squares[i].style.background = "none"
    }
  }
  })
  
  


  hard.addEventListener("click",function(){
    hard.classList.add("selected")
    easy.classList.remove("selected")
    medium.classList.remove("selected")
    veryhard.classList.remove("selected")
    numSquares = 6;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i =0; i < squares.length;i++){
      if(colors[i]){
    
      
    
      squares[i].style.background = colors[i];
      }else{
        squares[i].style.background = "none"
      }
    }
    })
    
    
  veryhard.addEventListener("click",function(){
    veryhard.classList.remove("selected")
    hard.classList.remove("selected")
    easy.classList.remove("selected")
    medium.classList.remove("selected")
    numSquares = 8;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
      for (var i =0; i < squares.length;i++){
      squares[i].style.background = colors[i];
      
      squares[i].style.background = "block"
    
      
      }
    
    })
    
    
  















effect.addEventListener("click",function(){
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent  = "";
  this.textContent = " NEW COLORS"
  
for (var i =0; i < squares.length;i++)
  {squares[i].style.background = colors[i];
  
  }
  h1.style.background = "steelblue"
})




colorDisplay.textContent = pickedColor;
  for(var i =0; i < squares.length;i++){squares[i].style.background = colors[i];
  
  squares[i].addEventListener("click",function () {
    var clickedColor = this.style.background;
    
    if(clickedColor <= pickedColor ){
      messageDisplay.textContent = "correct";
      effect.textContent = "Play Again"
      changeColors(clickedColor);
      h1.style.background = clickedColor;

    }else{
      this.style.background = "black";
      messageDisplay.textContent =  "Try Again"
    }
    
  })
  
  
  }
function changeColors(color) {
  for(var i = 0;i < colors.length; i++){
    squares[i].style.background = color;
  }
}
  
  function pickColor() {
  var random = Math.floor(Math.random()*colors.length ); 
  return colors[random]
  }
  
function generateRandomColors(num) {
  var arr = []
  for(var i = 0;i < num;i++ ){
    arr.push(randomColor());

  }
  return arr 
}

function randomColor () {
  var r = Math.floor(Math.random ()* 256)
  var g = Math.floor(Math.random ()* 256)
  var b = Math.floor(Math.random ()* 256)
  return "rgb("+ r + " , "+ g + "," + b + ")";
}









  