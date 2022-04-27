var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio")
function new_image(){
    fabric.Image.fromURL("https://media.istockphoto.com/vectors/handwritten-lettering-of-happy-birthday-mom-vector-illustration-vector-id1198179144?k=20&m=1198179144&s=612x612&w=0&h=FRFhtv5nmw8drRLtyG3RmtZvP5Dc8iC6KUNgXQ1_F6c=",function (Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToWidth(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
}
function playSound(){
    x.play();
}