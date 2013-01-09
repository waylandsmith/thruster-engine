// test.js
var cv=document.getElementById("game_canvas");
var cvbox=cv.getContext("2d");
cvbox.fillStyle="#FF0000";
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

if (window.addEventListener)
 window.addEventListener("load", newobj.drawObj, false) //invoke function
window.onload=newobj.drawObj() //function invoked again, since no event handler conflicts

