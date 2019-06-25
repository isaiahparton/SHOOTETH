$.drawText = function(opts){
     var ctx = opts.ctx,
          spacing = opts.spacing || 1,
          textX = opts.x,
          textY = opts.y,
          n = 0;
     
     var textW = 0,
          textH = opts.scale*5;
          
     for(var i = 0; i < opts.text.length; i++){
          var char = opts.text[i].toLowerCase();
          if($.characters[char]){
               textW += $.characters[char][0].length*(opts.scale) + spacing;
          }
     }
     
     ctx.beginPath();
     for(var i = 0; i < opts.text.length; i++){
          var char = opts.text[i].toLowerCase();
          if($.characters[char]){
               var charData = $.characters[char],
                    charWidth = charData[0].length,
                    charHeight = charData.length,
                    charX,
                    charY;
               
               /*===============  Alignment  =================*/
               if(opts.vAlign === "top"){
                    charY = textY;
               }else if(opts.vAlign === "center"){
                    charY = Math.round(textY - textH/2);
               }else if(opts.vAlign = "bottom"){
                    charY = textY - textH
               }
               if(opts.hAlign === "left"){
                    charX = textX + n;
               }else if(opts.hAlign === "center"){
                    charX = Math.round(textX - textW/2 + n);
               }else if(opts.hAlign === "right"){
                    charX = textX - textW + n;
               }
               
               /*==============  Draw the character  ==============*/
               n += Math.round(charWidth*opts.scale + spacing);
               for(var y = 0; y < charData.length; y++){
               for(var x = 0; x < charData[y].length; x++){
                    if(charData[y][x] === "1"){
                         ctx.rect(charX + x*opts.scale, charY + y*opts.scale, opts.scale, opts.scale);
                    }
               }
               }
          }
     }
};

/*============  Characters  ==============*/
$.characters = {
     "blank": [
          "00000",
          "00000",
          "00000",
          "00000",
          "00000"
     ],
     " ": [
          "000",
          "000",
          "000",
          "000",
          "000"
     ],
     "<": [
          "001",
          "010",
          "100",
          "010",
          "001"
     ],
     ">": [
          "100",
          "010",
          "001",
          "010",
          "100"
     ],
     ".": [
          "0",
          "0",
          "0",
          "0",
          "1"
     ],
     ":": [
          "0",
          "1",
          "0",
          "1",
          "0"
     ],
      "|": [
          "1",
          "1",
          "1",
          "1",
          "1"
     ],
     "-": [
          "000",
          "000",
          "111",
          "000",
          "000"
     ],
     "[": [
          "111",
          "100",
          "100",
          "100",
          "111"
     ],
     "]": [
          "111",
          "001",
          "001",
          "001",
          "111"
     ],
     "/": [
          "00001",
          "00010",
          "00100",
          "01000",
          "10000"
     ],
     "!": [
     	"1",
     	"1",
     	"1",
     	"0",
     	"1"
     ],
      "#": [
     	"01010",
          "11111",
          "01010",
          "11111",
          "01010"
     ],
     "~": [
     	"11111",
          "10101",
          "11111",
          "10101",
          "11111"
     ],
     "?": [
     	"11111",
          "00001",
          "00111",
          "00000",
          "00100"
     ],
     ",": [
     	"0",
     	"0",
     	"0",
     	"0",
     	"1",
     	"1"
     ],
     "'": [
          "1",
          "1",
          "0",
          "0",
          "0"
     ],
     "0": [
          "01110",
          "10001",
          "10101",
          "10001",
          "01110"
     ],
     "1": [
          "01100",
          "00100",
          "00100",
          "00100",
          "11111"
     ],
     "2": [
          "11110",
          "00001",
          "01110",
          "10000",
          "11111"
     ],
     "3": [
          "11110",
          "00001",
          "01111",
          "00001",
          "11110"
     ],
     "4": [
          "10001",
          "10001",
          "11111",
          "00001",
          "00001"
     ],
     "5": [
          "11111",
          "10000",
          "11110",
          "00001",
          "11110"
     ],
     "6": [
          "01111",
          "10000",
          "11110",
          "10001",
          "01110"
     ],
     "7": [
          "11111",
          "00001",
          "00010",
          "00100",
          "00100"
     ],
     "8": [
          "01110",
          "10001",
          "01110",
          "10001",
          "01110"
     ],
     "9": [
          "01110",
          "10001",
          "01111",
          "00001",
          "01110"
     ],
     "a": [
          "11111",
          "10001",
          "11111",
          "10001",
          "10001"
     ],
     "b": [
          "11110",
          "10010",
          "11111",
          "10001",
          "11111"
     ],
     "c": [
          "11111",
          "10000",
          "10000",
          "10000",
          "11111"
     ],
     "d": [
          "11100",
          "10010",
          "10001",
          "10001",
          "11111"
     ],
     "e": [
          "11111",
          "10000",
          "11110",
          "10000",
          "11111"
     ],
     "f": [
          "11111",
          "10000",
          "11110",
          "10000",
          "10000"
     ],
     "g": [
          "11111",
          "10000",
          "10011",
          "10001",
          "11111"
     ],
     "h": [
          "10001",
          "10001",
          "11111",
          "10001",
          "10001"
     ],
     "i": [
          "11111",
          "00100",
          "00100",
          "00100",
          "11111"
     ],
     "j": [
          "00001",
          "00001",
          "00001",
          "10001",
          "11111"
     ],
     "k": [
          "10001",
          "10010",
          "11100",
          "10010",
          "10001"
     ],
     "l": [
          "10000",
          "10000",
          "10000",
          "10000",
          "11111"
     ],
     "m": [
          "11111",
          "10101",
          "10101",
          "10001",
          "10001"
     ],
     "n": [
          "10001",
          "11001",
          "10101",
          "10011",
          "10001"
     ],
     "o": [
          "11111",
          "10001",
          "10001",
          "10001",
          "11111"
     ],
     "p": [
          "11111",
          "10001",
          "11111",
          "10000",
          "10000"
     ],
     "q": [
          "11111",
          "10001",
          "10101",
          "10010",
          "11101"
     ],
     "r": [
          "11111",
          "10001",
          "11111",
          "10010",
          "10010"
     ],
     "s": [
          "11111",
          "10000",
          "11111",
          "00001",
          "11111"
     ],
     "t": [
          "11111",
          "00100",
          "00100",
          "00100",
          "00100"
     ],
     "u": [
          "10001",
          "10001",
          "10001",
          "10001",
          "11111"
     ],
     "v": [
          "10001",
          "10001",
          "10001",
          "01010",
          "00100"
     ],
     "w": [
          "10001",
          "10001",
          "10101",
          "10101",
          "11111"
     ],
     "x": [
          "10001",
          "01010",
          "00100",
          "01010",
          "10001"
     ],
     "y": [
          "10001",
          "10001",
          "11111",
          "00100",
          "00100"
     ],
     "z": [
          "11111",
          "00010",
          "00100",
          "01000",
          "11111"
     ]
};