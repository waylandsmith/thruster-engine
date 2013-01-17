// test.js

// initial stuff

function init(){
	setInterval(draw,33); // could use window.requestAnimationFrame
	setTimeout(draw,33); // not sure what this does
	newAnimation(3, 'plane');
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

// Sprite Animation

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

// Game Objects //
// these assume players have one primary character.

// we'll 'define' a few constructors (essentially, classes)

function Animal(controller) {
    // animals interact with the world and move
    // controller:  is the animal controlled by the computer, or the player?
    };
// prototypal stuff here    
function Vegetable() {
    // vegetables can be interacted with and moved, but don't do so themselves
    }; 
// prototypal stuff here    
function Mineral() {
    // minerals cannot be interacted with and have no physical properties
    }; 
// prototypal stuff here

// var CoderArt = { name : "foo", x : 0, y : 0, src : '' };
// CoderArt.src=''

// motion //

function teleport(subject,dest) {
    /* this 'teleports' - moves w/out physics.  It has just two arguments - the thing teleporting, and the target.
    * dest should be an array with [x,y].
    * teleport could also be called by other move functions as a lower-level component */
    subject.x = dest[0];
    subject.y = dest[1]; // on redraw the subject should appear with a new XY
    }

function vee(){}

function move(subject,t,vee,deltav){
    if (!vee) var vee = 0; // wait....vee should be a function
    if (!deltav) var deltav = 0; // should add something for friction or air resistance?  later.
    // for i in t, vee = vee + deltav
    vee = vee + (deltav * t)
    }

// Controls
/*
 * 
function ctrlMv(){
    function kdRight(evt,key){
        switch (evt.keyCode){
            console.log(keydown);
            }
        return "right"
        }

    function kdLeft(evt,key){
        switch (evt.keyCode){
            console.log(keydown);
            }
        return "left"
        }
	
    function kdUp(evt,key){
        switch (evt.keyCode){
            console.log(keydown);
            }
        return "up"
        }
	
    function kdDown(evt,key){
        switch (evt.keyCode){
            console.log(keydown);
            }
        return "down"
        }
    }

*/
// window.addEventListener('keydown','KeyDown');

function kd(evt){
//    if (evt.keycode)
    }

function ctrls(gametype) {
    switch(gametype) {
        case "shooter":
        
        }
    }


// Gametype

// Shooter



// Gametype
