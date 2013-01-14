// test.js

// initial stuff

function init(){
	setInterval(draw,33); // could use window.requestAnimationFrame
	setTimeout(draw,33); // not sure what this does
	newAnimation(3, 'Billy');
	}
var sprites = new Array();
var count = 0;
var stage = 0;

// canvas //
var canv=document.getElementById("game_canvas");
var ctx=canv.getContext("2d");
ctx.fillStyle="#123456";

// ctx.globalCompositeOperation = 'destination-over'; // idk what this does, should look it up+
// canvas //
// frames //

// the real challenge of Canvas has been the lack of frames and fundamentally static quality of the system
// but we can change that now!  Implementing our own frames is step number 1 of building an engine

function refreshFrame(){
      ctx.clearRect(0,0,480,360);
}
// we'll want eventListeners for input

// frames //

// image //

var borg_cube = new Image(); // this is how we reference a saved image
borg_cube.onload = function(){
   ctx.drawImage(borg_cube,0,0);
};
borg_cube.src = 'prog-art1.svg';


// image //
// functions
// create image
function showimg(){
//   ctx.restore();
   ctx.fillStyle="#123456";
   ctx.fillRect(0,0,50,50);
   ctx.save();
   }
// destroy image
function killimg(){
//   ctx.restore();
   ctx.fillStyle="green";
   ctx.fillRect(0,0,50,50);
   }


// draw function //

function draw(){
	refreshFrame();
	drawSprites();
	
	count = count + 1;
	if (count >= 30) {
		if (stage == 2) {
			stage = 0;
		}
		else {
			stage = stage + 1;
		}
	count = 0;
	}
}





function newAnimation(numSprites, name) {
	var i = 0;
	while (i < numSprites) {
		sprites[i] = new Image();
		sprites[i].src = name + (i+1) + '.png';
		i = i + 1;
		console.log("newAnimation");
		console.log(numSprites);
	}
}

function drawSprites() {
	var i = 0;
	while (i<sprites.length) {
		ctx.drawImage(sprites[stage], 0, 0);
		i = i + 1;
		console.log("drawSprites");
	}
}


/*
var cv=document.getElementById("game_canvas");
var cvbox=cv.getContext("2d");
cvbox.fillStyle="#FF0000";
cvbox.fillRect(0,0,50,50);
  //    cvbox.fillRect(0,0,150,75);
      //
      // my trying out JS OOP

var newobj = {
      name: "block",
      x : 0,
      y : 0,
      lth : 50,
      wth : 50
};

newobj.moveblock = function() {
   this.x + 200;
}    
newobj.drawObj = function() {
   objbox.fillRect(this.x, this.y, this.lth, this.wth);
}
newobj.centjump = function() {
   objbox.translate(100,100);
}

function makeRandBox(){
   var new_box, x, y, l, w;
   x = Math.floor(Math.random()*200);
   y = Math.floor(Math.random()*200);
   l = y + 50;
   w = x + 50;
   new_box=cv.getContext("2d");
   new_box.fillstyle="#123456";
   new_box.fillRect(x,y,l,w);
}

function teleport(){
   cvbox.translate(100,100);
}

var canvas; // the canvas element which will draw on
var ctx; // the "context" of the canvas that will be used (2D or 3D)
var dx = 50; // the rate of change (speed) horizontal object
var x = 30; // horizontal position of the object (with initial value)
var y = 0; // vertical position of the object (with initial value)
var WIDTH = 1000; // width of the rectangular area
var HEIGHT = 340; // height of the rectangular area
var tile1 = new Image (); // Image to be loaded and drawn on canvas
var posicao = 0; // display the current position of the character
var NUM_POSICOES = 6; // Number of images that make up the movement

function KeyDown(evt){ // taken straight from: http://mrbool.com/html5-canvas-moving-a-character-with-sprites/26239
   switch (evt.keyCode) {
        case 39:  // Arrow to the right
            if (x + dx < WIDTH){
                x += dx;
                posicao++;
                if(posicao == NUM_POSICOES)
                    posicao = 1;
            }
            break;            
    }
}



function GravityBox(delta_vee){
// try to make a box that falls. - currently causes an out of memory crash.
   var gbox=cv.getContext("2d");
   gbox.fillStyle="#FFFFFF";
   gbox.fillRect(50,0,75,50);
   // you could either find a way to MOVE the existing rect, or delete the rect and refill in a new location.
   var stopwatch = 0, speed = 0;
   do
      {stopwatch = 1;
       speed = speed + delta_vee;
       gbox.translate(0,speed)}
   while (stopwatch < 60);
   // need to count time, too
   }


if (window.addEventListener)
 window.addEventListener("load", newobj.drawObj, false) //invoke function
window.onload=newobj.drawObj() //function invoked again, since no event handler conflicts
*/
