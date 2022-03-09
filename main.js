var canvas = new fabric.Canvas('myCanvas')
// Create canvas variable

//Set initial positions for ball and hole images.
ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 500;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			left: hole_x, top: hole_y
		});
		canvas.add(hole_obj);
	})
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			left: ball_x, top: ball_y
		});
		canvas.add(ball_obj);
	})
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_x == hole_x)&& (ball_y== hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "You Have Hit the Goal!!!!!😇😇😀😃😄";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0){
			ball_y = ball_y - 20;
			console.log("ball image height = 50");
			console.log("Up key is pressed, new X = " + ball_x + "Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
		// Write a code to move ball upward.
	}

	function down()
	{
		if(ball_y<=550){
			ball_y = ball_y + 20;
			console.log("ball image height = 50");
			console.log("Down key is pressed, new X = " + ball_x + "Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - 20;
			console.log("ball image height = 50");
			console.log("Left key is pressed, new X = " + ball_x + "Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + 20;
			console.log("ball image height = 50");
			console.log("Right key is pressed, new X = " + ball_x + "Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
			// Write a code to move ball right side.
		}
	}
	
}

