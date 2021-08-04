//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var balll = document.getElementById('balll');
//write a function that can change the position of the html element "ball"
function moveBall() {
  velocityx = Math.floor(Math.random()*1200);
  velocityy = Math.floor(Math.random()*700);
var positionx=0;
var positiony=0;
var reverse = false;
var reverse2 = false;
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 1200;
  var ymin=0;
  var ymax=700;
  var e = positionx;
  var yy = positiony;
  if(Xmax < e)
  {
    reverse = true;
  }
  else if(Xmin > e)
  {
    reverse = false;
  }
  if(ymax < yy)
  {
    reverse2 = true;
  }
  else if(ymin > yy)
  {
    reverse2 = false;
  }
  if(reverse === false)
  {
   positionx = velocityx + positionx;
   ball.style.left = positionx;
  }
  if(reverse2 === false)
  {
    positiony = velocityy + positiony;
    ball.style.top = positiony;
  }
   if(reverse === true)
  {
    positionx = positionx - velocityx;
    ball.style.left = positionx;
      
   }
   if(reverse2===true)
   {
    positiony = positiony - velocityy;
    ball.style.top = positiony;
   }
   velocityx = Math.floor(Math.random()*100);
   velocityy = Math.floor(Math.random()*100);


}
function moveBall2() {
  velocityx = Math.floor(Math.random()*1200);
  velocityy = Math.floor(Math.random()*700);
var positionx=0;
var positiony=0;
var reverse = false;
var reverse2 = false;
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 1200;
  var ymin=0;
  var ymax=700;
  var e = positionx;
  var yy = positiony;
  if(Xmax < e)
  {
    reverse = true;
  }
  else if(Xmin > e)
  {
    reverse = false;
  }
  if(ymax < yy)
  {
    reverse2 = true;
  }
  else if(ymin > yy)
  {
    reverse2 = false;
  }
  if(reverse === false)
  {
   positionx = velocityx + positionx;
   balll.style.left = positionx;
  }
  if(reverse2 === false)
  {
    positiony = velocityy + positiony;
    balll.style.top = positiony;
  }
   if(reverse === true)
  {
    positionx = positionx - velocityx;
    balll.style.left = positionx;
      
   }
   if(reverse2===true)
   {
    positiony = positiony - velocityy;
    balll.style.top = positiony;
   }
   velocityx = Math.floor(Math.random()*100);
   velocityy = Math.floor(Math.random()*100);
   


}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
setInterval(moveBall2, 100);
console.log("ryan is gay");