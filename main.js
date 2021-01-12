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