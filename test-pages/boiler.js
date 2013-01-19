(function() {
  var buttoncontrol, canv, countr, ctx, draw, drawSprites, init, newAnimation, sprites, stage;

  init = function() {
    return 
    setInterval(draw,33); // could use window.requestAnimationFrame, but this seems to be less browser-specific
    setTimeout(draw,33);
	;
  };

  sprites = [];

  countr = 0;

  stage = 0;

  canv = document.getElementById("game_canvas");

  ctx = canv.getContext("2d");

  ctx.fillStyle = "blue";

  draw = function() {
    ctx.clearRect(0, 0, 480, 360);
    drawSprites;
    countr = countr + 1;
    if (countr >= 30) {
      if (stage === 2) {
        stage = 0;
      } else {
        stage = stage + 1;
      }
    }
    return countr = 0;
  };

  newAnimation = function(numSprites, name) {
    var i, _results;
    i = 0;
    _results = [];
    while (i < numSprites) {
      sprites[i] = new Image;
      sprites[i].src = name + (i + 1) + ".png";
      _results.push(i = i + 1);
    }
    return _results;
  };

  drawSprites = function() {
    var i, _results;
    i = 0;
    _results = [];
    while (i < sprites.length) {
      ctx.drawImage(sprites[stage], 0, 0);
      _results.push(i = i + 1);
    }
    return _results;
  };

  /* problem - Coffee returns one value by default, doesn't yet know that Subject is an object and Dest an array
  teleport = (subject,dest) ->
      subject.x = dest[0]
      subject.y = dest[1]
  */

  buttoncontrol = function(k) {
    if (k === right) {
      return alert("right");
    } else if (k === left) {
      return alert("left");
    } else {
      return alert("something broke!");
    }
  };

  /*
  Copyright 2013 Matthew Meneghini
  Copyright 2013 Edward Pantridge
  
  This is our CoffeeScript port of the Thruster Engine, now called Boiler.
  
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are
   * met:
   * 
   * * Redistributions of source code must retain the above copyright
   *   notice, this list of conditions and the following disclaimer.
   * * Redistributions in binary form must reproduce the above
   *   copyright notice, this list of conditions and the following disclaimer
   *   in the documentation and/or other materials provided with the
   *   distribution.
   * * Neither the name of the  nor the names of its
   *   contributors may be used to endorse or promote products derived from
   *   this software without specific prior written permission.
   * 
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
   * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
   * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
   * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
   * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
  */

}).call(this);
