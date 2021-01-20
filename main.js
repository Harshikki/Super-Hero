var canvas = new fabric.Canvas('myCanvas');

player_x = 15;
player_y = 15;

block_width = 30;
block_height = 30;

var user_object = "";
var block_object = "";

function player_update() {
   fabric.Image.fromURL("player.png",function(Img)
   {
   user_object = Img;
   user_object.scaleToWidth(150);
   user_object.scaleToHeight(150);
   user_object.set(
   { top:player_y,
     left:player_x
   });
   canvas.add(user_object);
});
}

function new_imge(get_image) {
    fabric.Image.fromURL(get_image,function(Img)
    {
    block_object = Img;
    block_object.scaleToWidth(150);
    block_object.scaleToHeight(150);
    block_object.set(
    { top:player_y,
      left:player_x
    });
    canvas.add(block_object);
 });
 }

 window.addEventListener("keydown",my_keydown);
 function my_keydown(e) {
 key_pressed = e.keyCode;
 if (e.shiftKey == true && key_pressed == '80'){
   block_height = block_height + 10;
   block_width = block_width + 10;
   console.log("p");
 }
 if (e.shiftKey == true && key_pressed == '77'){
  block_height = block_height - 10;
  block_width = block_width - 10;
  console.log("m");
 }

 if (key_pressed == '70') {
  new_imge('ironman_face.png');
  console.log("f");
}
if (key_pressed == '66') {
  new_imge('spiderman_body.png');
  console.log("b");
}
if (key_pressed == '76') {
  new_imge('hulk_legs.png');
  console.log("l");
}
if (key_pressed == '82') {
  new_imge('thor_right_hand.png');
  console.log("r");
}
if (key_pressed == '72') {
  new_imge('captain_america_left_hand.png');
  console.log("h");
}
if (key_pressed == '38') {
  up();
  console.log("up_key");
}
if (key_pressed == '40') {
  down();
  console.log("down_key");
}
if (key_pressed == '37') {
  left();
  console.log("left_key");
}
if (key_pressed == '39') {
  right();
  console.log("right_key");
}
 }
 function up() { 
  if(player_y >=0) {
    player_y = player_y - block_height;
    canvas.remove(user_object); player_update(); 
    }
  }
function down() { 
    if(player_y <=500) {
      player_y = player_y + block_height;
      canvas.remove(user_object); player_update(); 
      }
    }
function left() { 
      if(player_x >=0) {
        player_x = player_x - block_width;
        canvas.remove(user_object); player_update(); 
        }
      }
function right() { 
        if(player_x <=800) {
          player_x = player_x + block_width;
          canvas.remove(user_object); player_update(); 
          }
        }