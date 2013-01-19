
/* problem - Coffee returns one value by default, doesn't yet know that Subject is an object and Dest an array
teleport = (subject,dest) ->
    subject.x = dest[0]
    subject.y = dest[1]
*/

(function() {
  var controlButtons;

  controlButtons = function(k) {
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
  
  This is our CoffeeScript port of the Thruster Engine, called Boiler.
  
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
