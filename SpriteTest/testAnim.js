// test.js
var cv=document.getElementById("game_canvas");
var ctx=cv.getContext("2d");
//cvbox.fillStyle="#FF0000";
var sprites = new Array();



myImage = new Image();
myImage.onload = function() {
	ctx.drawImage(myImage,0,0);
	newAnimation(4, 's');
	drawSprites();
}
myImage.src = 's1.png';

/*	numSprites = number of sprites in the animation
	name = name of sprites without their number. File names of sprites will be name1.png, name2.png etc */
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
	var x = 0;
	var i = 0;
	while (i<sprites.length) {
		ctx.drawImage(sprites[i], x, 0);
		x = x + 18;
		i = i + 1;
		console.log("drawSprites");
	}
}







/*
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
    cvbox.fillRect(this.x, this.y, this.lth, this.wth);
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

function Gravity-Box(delta_vee){ // try to make a box that falls.
   var gbox=cv.getContext("2d");
   gbox.fillStyle="#FFFFFF";
   gbox.fillRect(50,0,75,50);
   }

window.addEventListener("load", newobj.drawObj, false) //invoke function
*/
