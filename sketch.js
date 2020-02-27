

//All states for state machine
var state=0;
var titleState=0;
var introState=1;
var sleepyState=2;
var fruitState=3;
var veggieState=4;
var climbingState=5;
var branchState=6;
var cocoonState=7;
var bflyState=8;
var endState=9;

//var for sounds
var sleepMusic;
var bubPop;
var yummy;
var notYummy;
var iLikeItALot;
var screamo;
var yay;

//var for food pictures
var apple;
var orange;
var pear;
var cheese;
var carrot;
var broc;
var radish;
var cake;
//var for drawing Caterpillar
var incremX=0;
var incremY=0;
//picture for slide 1
var hungryboi;
//picture for slide 9
var butterboi;

//moving sun var for slide 2
var sun1=0;
//moving bubble var for slide 3
var bub=0;

//moving sun var and color changers for slide 8
var sun2=0;
var r=56;
var g=189;
var b=255;

//bool for slide 2
var nextslide2=false;
//bool for slide 3
var worm1=true;
var stillSleep=true;
var bubGrow=true;
//bool for slide 4
var appleCheck=false;
var orangeCheck=false;
var pearCheck=false;
//bool for slide 5
var carrotCheck=false;
var brocCheck=false;
var radCheck=false;
//bool for slide 6
var climbC=false;
var climbL=false;
var climbI=false;
var climbM=false;
var climbB=false;
var climbU=false;
var climbP=false;
//bool for slide 7
var branchCheck=false;
//bool for slide 9
var replayer=false;








function setup() 
	{
		createCanvas(1000,800);
	}

function preload()
	{
		hungryboi=loadImage('assets/hungryBoi.png');
		butterboi=loadImage('assets/bfly.png');

		//preload the foods
		apple=loadImage('assets/apple.png');
		orange=loadImage('assets/orange.png');
		pear=loadImage('assets/pear.png');
		cheese=loadImage('assets/cheese.png');
		carrot=loadImage('assets/carrot.png');
		broc=loadImage('assets/broccoli.png');
		radish=loadImage('assets/radish.png');
		cake=loadImage('assets/cake.jpg');

		//preload sounds
		sleepMusic=loadSound('assets/sleepytime.mp3');
		bubPop=loadSound('assets/pop.mp3');
		yummy=loadSound('assets/yum.mp3');
		notYummy=loadSound('assets/ew.mp3');
		iLikeItALot=loadSound('assets/like.mp3');
		screamo=loadSound('assets/scream.mp3');
		yay=loadSound('assets/yay.mp3');
	}

function draw() 
	{
		background(0);

		if(state>endState)
		{
			state=titleState;
		}

		//state machine
		if (state==titleState)
		{
			drawTitle();
		}else if(state==introState)
		{
			drawIntro();
		}else if(state==sleepyState)
		{
			drawSleepy();
		}else if(state==fruitState)
		{
			drawFruits();
		}else if(state==veggieState)
		{
			drawVeg();
		}else if(state==climbingState)
		{
			drawClimb();
		}else if(state==branchState)
		{
			drawBranch();
		}else if(state==cocoonState)
		{
			drawCocoon();
		}else if(state==bflyState)
		{
			drawBfly();
		}
	}

function drawTitle()
	{
		//draw background
		fill(255, 240, 230);
		noStroke();
		rect(0,0,1000,650);

		//image
		image(hungryboi,width/2-300,height/2-100);

		//Next button
		fill(255, 115, 0);
		stroke(255);
		strokeWeight(6);
		rect(width/2-150,675,300,100);
		strokeWeight(1);

		fill(0);
		stroke(0);
		textSize(40);
		text("Start",width/2-50,740);

		text("The Very",width/2+100,200);
		text("Hungry",width/2+130,250);
		text("Caterpillar",width/2+80,300);
	}

function drawIntro()
	{
		//draw background
		fill(56, 189, 255);
		noStroke();
		rect(0,0,1000,650);

		//draw back button
		fill(255, 115, 0);
		stroke(255);
		strokeWeight(6);
		rect(50,675,300,100);
		strokeWeight(1);

		fill(0);
		stroke(0);
		textSize(40);
		text("Back",150,740);

		//draw sun
		fill(255, 221, 0);
		stroke(255, 221, 0);
		ellipse(300,500-sun1,100,100);
		if(sun1<130)
		{
			sun1=sun1+1;
		}else
		{
			nextslide2=true;
		}

		//draw grass
		fill(0, 181, 15);
		stroke(0, 181, 15);
		arc(width/2,height/2+250,2000,500,PI,2*PI,OPEN);

		//draw tree
		fill(94, 44, 0);
		stroke(56, 27, 1);
		rect(800,250,40,300);

		//draw leaves
		fill(12, 79, 0);
		stroke(12, 79, 0);
		ellipse(770,250,100,100);
		ellipse(850,270,100,100);
		ellipse(750,200,120,120);
		ellipse(860,220,100,100);
		ellipse(830,180,100,100);
		ellipse(870,160,100,100);
		ellipse(865,300,100,100);
		ellipse(740,270,100,100);
		ellipse(800,260,100,100);

		//next button appears after sun moves
		if(nextslide2)
		{
			fill(255, 115, 0);
			stroke(255);
			strokeWeight(6);
			rect(width/2+150,675,300,100);
			strokeWeight(1);

			fill(0);
			stroke(0);
			textSize(40);
			text("Next",width/2+250,740);
		}
	}

function drawSleepy()
	{
		fill(0, 179, 0);
		noStroke();
		rect(0,0,1000,650);

		fill(0);
		stroke(0);
		textSize(80);
		text("Wake",100,100);
		text("up",135,160);
		text("Wormie!",90,240);

		//Draw Wormie
		drawWormie(100,500);

		//draw back button
		fill(255, 115, 0);
		stroke(255);
		strokeWeight(6);
		rect(50,675,300,100);
		strokeWeight(1);

		fill(0);
		stroke(0);
		textSize(40);
		text("Back",150,740);

		//As long as worm is still asleep
		if(stillSleep)
		{
			//draw eyes
			fill(255, 85, 0);
			stroke(255, 85, 0);
			strokeWeight(5);
			ellipse(305,500,20,30);
			ellipse(345,500,20,30);
			stroke(0);
			arc(305,500,20,30,0,PI,OPEN);
			arc(345,500,20,30,0,PI,OPEN);

			//draw sleepy bubble
			fill(130, 232, 255);
			strokeWeight(3);
			stroke(105, 227, 255);
			ellipseMode(CORNERS);
			ellipse(325,520,335+bub,510-bub);

			if(bub<80 && bubGrow)
			{
				bub=bub+0.5;
				//print("bub grow");
			}else if(bub>=70 && bubGrow)
			{
				bubGrow=false;
				//print("bub stop grow");
			}else if(bub>5 && bubGrow==false)
			{
				bub=bub-3;
				//print("bub shrink");
			}else if(bub<=5 && bubGrow==false)
			{
				bubGrow=true;
				//print("bub stop shrink");
			}

			ellipseMode(CENTER);
			strokeWeight(1);
		}else if(!stillSleep)
		{
			fill(255, 115, 0);
			stroke(255);
			strokeWeight(6);
			rect(width/2+150,675,300,100);
			strokeWeight(1);

			fill(0);
			stroke(0);
			textSize(40);
			text("Next",width/2+250,740);
		}
		
	}

function drawFruits()
	{
		fill(255, 240, 230);
		noStroke();
		rect(0,0,1000,650);

		//draw wormie
		drawWormie(200,400);

		//draw back button
		fill(255, 115, 0);
		stroke(255);
		strokeWeight(6);
		rect(50,675,300,100);
		strokeWeight(1);

		fill(0);
		stroke(0);
		textSize(40);
		text("Back",150,740);

		//display foods
		image(apple,600,150,100,100);
		image(orange,800,150,100,100);
		image(cheese,600,350,100,100);
		image(pear,800,350,100,100);

		//write text
		fill(0);
		stroke(0);
		textSize(80);
		text("Eat",100,100);
		text("the",80,200);
		text("fruits!",110,300);

		if(appleCheck && orangeCheck && pearCheck)
		{
			fill(255, 115, 0);
			stroke(255);
			strokeWeight(6);
			rect(width/2+150,675,300,100);
			strokeWeight(1);

			fill(0);
			stroke(0);
			textSize(40);
			text("Next",width/2+250,740);
		}

		

	}

function drawVeg()
	{
		fill(255, 240, 230);
		noStroke();
		rect(0,0,1000,650);

		//draw wormie
		drawWormie(200,400);

		//draw back button
		fill(255, 115, 0);
		stroke(255);
		strokeWeight(6);
		rect(50,675,300,100);
		strokeWeight(1);

		fill(0);
		stroke(0);
		textSize(40);
		text("Back",150,740);

		//display foods
		image(carrot,600,150,100,100);
		image(broc,800,150,100,100);
		image(radish,600,350,100,100);
		image(cake,800,350,100,100);

		//write text
		fill(0);
		stroke(0);
		textSize(80);
		text("Eat",100,100);
		text("the",80,200);
		text("Veggies!",110,300);

		if(carrotCheck && brocCheck && radCheck)
		{
			fill(255, 115, 0);
			stroke(255);
			strokeWeight(6);
			rect(width/2+150,675,300,100);
			strokeWeight(1);

			fill(0);
			stroke(0);
			textSize(40);
			text("Next",width/2+250,740);
		}

	}

function drawClimb()
	{
		fill(56, 189, 255);
		noStroke();
		rect(0,0,1000,650);

		//draw grass
		fill(6, 181, 0);
		stroke(6, 181, 0);
		arc(500,650,2000,700,PI,2*PI,OPEN);

		//draw tree
		fill(94, 44, 0);
		stroke(56, 27, 1);
		rect(850,0,700,600);

		triangle(850,600,600,600,850,450);

		//wormie
		drawWormie(100,500);

		//draw back button
		fill(255, 115, 0);
		stroke(255);
		strokeWeight(6);
		rect(50,675,300,100);
		strokeWeight(1);

		fill(0);
		stroke(0);
		textSize(40);
		text("Back",150,740);

		//write instructions
		textSize(80);
		text("Type",100,100);
		text("to",120,200);
		text("Climb!",90,300);

		//'climb up' appears as you type it
		textSize(20);
		if(climbC)
		{
			text("C",400,400);
		}

		if(climbL)
		{
			text("L",420,400);
		}

		if(climbI)
		{
			text("I",440,400);
		}

		if(climbM)
		{
			text("M",460,400);
		}

		if(climbB)
		{
			text("B",480,400);
		}

		if(climbU)
		{
			text("U",400,420);
		}

		if(climbP)
		{
			text("P",420,420);
		}

		//next button
		if (climbC && climbL && climbI && climbM && climbB && climbU && climbP)
		{
			fill(255, 115, 0);
			stroke(255);
			strokeWeight(6);
			rect(width/2+150,675,300,100);
			strokeWeight(1);

			fill(0);
			stroke(0);
			textSize(40);
			text("Next",width/2+250,740);
		}


	}

function drawBranch()
	{
		fill(255, 240, 230);
		noStroke();
		rect(0,0,1000,650);

		//wormie
		drawWormie(400,550);

		//draw back button
		fill(255, 115, 0);
		stroke(255);
		strokeWeight(6);
		rect(50,675,300,100);
		strokeWeight(1);

		fill(0);
		stroke(0);
		textSize(40);
		text("Back",150,740);

		//write instructions
		textSize(60);
		text("Where",400,100);
		text("should",380,200);
		text("Wormie",430,300);
		text("cocoon?",400,400);

		//draw strong branch
		fill(94, 44, 0);
		stroke(56, 27, 1);
		triangle(1000,400,800,250,1000,350);
		//healthy leaf
		fill(7, 201, 0);
		stroke(7, 201, 0);
		ellipse(900,250,50,120);
		//flower
		fill(255, 0, 204);
		stroke(255, 0, 204);
		ellipse(800,250,40,40);
		ellipse(800,230,30,30);
		ellipse(800,270,30,30);
		ellipse(820,250,30,30);
		ellipse(780,250,30,30);

		fill(255, 251, 0);
		stroke(255, 251, 0);
		ellipse(800,250,10,10);

		//draw weak branch
		noFill();
		stroke(56, 27, 1);
		strokeWeight(30);
		arc(0,350,600,400,PI,2*PI,OPEN);
		strokeWeight(1);
		//dying leaf
		fill(133, 49, 0);
		stroke(133, 49, 0);
		ellipse(100,220,50,120);

		if(branchCheck)
		{
			fill(255, 115, 0);
			stroke(255);
			strokeWeight(6);
			rect(width/2+150,675,300,100);
			strokeWeight(1);

			fill(0);
			stroke(0);
			textSize(40);
			text("Next",width/2+250,740);
		}



	}

function drawCocoon()
	{
		fill(r, g, b);
		noStroke();
		rect(0,0,1000,650);

		//draw back button
		fill(255, 115, 0);
		stroke(255);
		strokeWeight(6);
		rect(50,675,300,100);
		strokeWeight(1);

		fill(0);
		stroke(0);
		textSize(40);
		text("Back",150,740);

		//draw sun
		fill(255, 221, 0);
		stroke(255, 221, 0);
		ellipse(200,0+sun2,100,100);

		//draw grass
		fill(12, 87, 0);
		stroke(12, 87, 0);
		arc(500,650,2000,400,PI,2*PI,OPEN);

		//draw branch
		fill(94, 44, 0);
		stroke(56, 27, 1);
		rect(0,0,1000,80);

		//draw cocoon
			fill(140, 68, 0);
			stroke(140, 68, 0);
			ellipse(500,50,70,40);

			fill(189, 104, 0);
			stroke(189, 104, 0);
			ellipse(500,60,80,45);

			fill(140, 68, 0);
			stroke(140, 68, 0);
			ellipse(500,70,85,50);

			fill(189, 104, 0);
			stroke(189, 104, 0);
			ellipse(500,80,90,55);

			fill(140, 68, 0);
			stroke(140, 68, 0);
			ellipse(500,90,90,55);

			fill(189, 104, 0);
			stroke(189, 104, 0);
			ellipse(500,100,90,55);

			fill(140, 68, 0);
			stroke(140, 68, 0);
			ellipse(500,110,90,55);		

			fill(189, 104, 0);
			stroke(189, 104, 0);
			ellipse(500,120,95,55);

			fill(140, 68, 0);
			stroke(140, 68, 0);
			ellipse(500,130,100,55);

			fill(189, 104, 0);
			stroke(189, 104, 0);
			ellipse(500,140,105,55);

			fill(140, 68, 0);
			stroke(140, 68, 0);
			ellipse(500,150,110,55);

			fill(189, 104, 0);
			stroke(189, 104, 0);
			ellipse(500,160,120,55);

			fill(140, 68, 0);
			stroke(140, 68, 0);
			ellipse(500,170,130,55);	

			fill(189, 104, 0);
			stroke(189, 104, 0);
			ellipse(500,180,140,55);

			fill(140, 68, 0);
			stroke(140, 68, 0);
			ellipse(500,190,130,55);

			fill(189, 104, 0);
			stroke(189, 104, 0);
			ellipse(500,200,120,55);

			fill(140, 68, 0);
			stroke(140, 68, 0);
			ellipse(500,210,100,55);			

		if(sun2<550)
		{
		sun2=sun2+3;
		}

		if(r>0)
		{
			r--;
		}

		if (g>0)
		{
			g--;
		}

		if (b>0)
		{
			b--;
		}

		if (r==0 && g==0 && b==0)
		{
			fill(255, 115, 0);
			stroke(255);
			strokeWeight(6);
			rect(width/2+150,675,300,100);
			strokeWeight(1);

			fill(0);
			stroke(0);
			textSize(40);
			text("Next",width/2+250,740);
		}

	}

function drawBfly()
	{
		fill(56, 189, 255);
		noStroke();
		rect(0,0,1000,650);

		//draw back button
		fill(255, 115, 0);
		stroke(255);
		strokeWeight(6);
		rect(50,675,300,100);
		strokeWeight(1);

		fill(0);
		stroke(0);
		textSize(40);
		text("Back",150,740);

		if(replayer)
		{
			//Draw replay button
			fill(255, 115, 0);
			stroke(255);
			strokeWeight(6);
			rect(width/2+150,675,300,100);
			strokeWeight(1);

			fill(0);
			stroke(0);
			textSize(40);
			text("Replay?",width/2+230,740);
		}

		//butterfly
		imageMode(CENTER);
		image(butterboi,500,400);
		imageMode(CORNER);

		fill(0);
		stroke(0);
		textSize(60);
		text("You did it!",150,150);
		text("Wormie is all grown up!",250,600);
		textSize(10);
		text("Give Wormie a high five!",600,300);



	}

function drawWormie(xcord,ycord)
	{

		
			//Draw body
			fill(38, 255, 0);
			stroke(38, 255, 0);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;
			
			fill(0, 145, 90);
			stroke(0, 145, 90);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;
			
			fill(17, 74, 1);
			stroke(17, 74, 1);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;
			
			fill(38, 255, 0);
			stroke(38, 255, 0);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;
			
			fill(0, 145, 90);
			stroke(0, 145, 90);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;
			
			fill(17, 74, 1);
			stroke(17, 74, 1);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;
			

			fill(38, 255, 0);
			stroke(38, 255, 0);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;

			fill(0, 145, 90);
			stroke(0, 145, 90);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;

			fill(17, 74, 1);
			stroke(17, 74, 1);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;

			fill(38, 255, 0);
			stroke(38, 255, 0);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;

			fill(0, 145, 90);
			stroke(0, 145, 90);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;

			fill(17, 74, 1);
			stroke(17, 74, 1);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;

			fill(38, 255, 0);
			stroke(38, 255, 0);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;

			fill(0, 145, 90);
			stroke(0, 145, 90);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;

			fill(17, 74, 1);
			stroke(17, 74, 1);
			ellipse(xcord+incremX,ycord,50,100);
			incremX=incremX+15;

			//draw head
			fill(255, 85, 0);
			stroke(255, 85, 0);
			ellipse(xcord+incremX,ycord,100,120);

			//draw eyes
			fill(0, 145, 90);
			stroke(255, 247, 0);
			strokeWeight(4);
			ellipse(xcord+incremX-20,ycord,20,30);
			ellipse(xcord+incremX+20,ycord,20,30);
			strokeWeight(1);

			//print(xcord+incremX-20);
			//print(ycord);

			//draw nose
			fill(189, 63, 0);
			stroke(189, 63, 0);
			ellipse(xcord+incremX,ycord+20,10,10);

			//print(xcord+incremX,ycord+20);

			//draw feet
			fill(43, 14, 0);
			stroke(43, 14, 0);
			ellipse(xcord-10,ycord+50,5,10);
			ellipse(xcord,ycord+50,5,10);
			ellipse(xcord+155,ycord+50,5,10);
			ellipse(xcord+165,ycord+50,5,10);
			ellipse(xcord+175,ycord+50,5,10);
			ellipse(xcord+185,ycord+50,5,10);

			//draw antenna
			fill(226, 122, 255);
			stroke(226, 122, 255);
			ellipse(xcord+incremX-20,ycord-70,7,40);
			ellipse(xcord+incremX+20,ycord-70,7,40);

		
		incremX=0;
	}

function keyPressed()
	{
		if (key==' ')
		{
			state++;
		}
		//key presses for slide 6
		if(state==climbingState && key=='c')
		{
			climbC=true;
		}else if(state==climbingState && key=='l')
		{
			climbL=true;
		}else if(state==climbingState && key=='i')
		{
			climbI=true;
		}else if(state==climbingState && key=='m')
		{
			climbM=true;
		}else if(state==climbingState && key=='b')
		{
			climbB=true;
		}else if(state==climbingState && key=='u')
		{
			climbU=true;
		}else if(state==climbingState && key=='p')
		{
			climbP=true;
		}
	}

function mouseClicked()
	{
		if (state==titleState && mouseX>=350 && mouseX<=650 && mouseY>=675 && mouseY<=775)
		{
			print("move to state 1");
			state++;
		}else if(state==introState && mouseX>=50 && mouseX<=350 && mouseY>=675 && mouseY<=775)
		{
			print("move to state 0");
			state--;
			sun1=0;
			nextslide2=false;

		}else if(state==introState && mouseX>=650 && mouseX<=950 && mouseY>=675 && mouseY<=775)
		{
			print("move to state 2");
			state++;
			sun1=0;
			nextslide2=false;
			sleepMusic.play();
		}
		
		//buttons for sleepy slide
		if (state==sleepyState && mouseX>=325 && mouseX<=(335+bub) && mouseY>=(510-bub) && mouseY<=520)
		{
			print("pop");
			stillSleep=false;
			sleepMusic.stop();
			bubPop.play();
		}else if(state==sleepyState && mouseX>=50 && mouseX<=350 && mouseY>=675 && mouseY<=775)
		{
			print("move to state 1");
			state--;
			worm1=true;
			stillSleep=true;
			bubGrow=true;
			bub=0;
			
		}else if(state==sleepyState && mouseX>=650 && mouseX<=950 && mouseY>=675 && mouseY<=775 && !stillSleep)
		{
			print("move to state 3");
			state++;
			worm1=true;
			stillSleep=true;
			bubGrow=true;
			bub=0;
		}


		//buttons for fruit state
		if (state==fruitState && mouseX>=600 && mouseX<=700 && mouseY>=150 && mouseY<=250)
		{
			yummy.play();
			appleCheck=true;
		}else if(state==fruitState && mouseX>=800 && mouseX<=900 && mouseY>=150 && mouseY<=250)
		{
			yummy.play();
			orangeCheck=true;
		}else if(state==fruitState && mouseX>=600 && mouseX<=700 && mouseY>=350 && mouseY<=450)
		{
			notYummy.play();
		}else if(state==fruitState && mouseX>=800 && mouseX<=900 && mouseY>=350 && mouseY<=450)
		{
			yummy.play();
			pearCheck=true;
		}else if(state==fruitState && mouseX>=50 && mouseX<=350 && mouseY>=675 && mouseY<=775)
		{
			appleCheck=false;
			pearCheck=false;
			orangeCheck=false;
			sleepMusic.play();
			state--;
			print("move to state 2");
		}else if(state==fruitState && mouseX>=650 && mouseX<=950 && mouseY>=675 && mouseY<=775 && appleCheck && orangeCheck && pearCheck)
		{
			appleCheck=false;
			pearCheck=false;
			orangeCheck=false;
			state++;
			print("move to state 4");
		}


		//buttons for veg state
		if (state==veggieState && mouseX>=600 && mouseX<=700 && mouseY>=150 && mouseY<=250)
		{
			yummy.play();
			carrotCheck=true;
		}else if(state==veggieState && mouseX>=800 && mouseX<=900 && mouseY>=150 && mouseY<=250)
		{
			yummy.play();
			brocCheck=true;
		}else if(state==veggieState && mouseX>=600 && mouseX<=700 && mouseY>=350 && mouseY<=450)
		{
			yummy.play();
			radCheck=true;
		}else if(state==veggieState && mouseX>=800 && mouseX<=900 && mouseY>=350 && mouseY<=450)
		{
			notYummy.play();
		}else if(state==veggieState && mouseX>=50 && mouseX<=350 && mouseY>=675 && mouseY<=775)
		{
			carrotCheck=false;
			brocCheck=false;
			radCheck=false;
			state--;
			print("move to state 3");
		}else if(state==veggieState && mouseX>=650 && mouseX<=950 && mouseY>=675 && mouseY<=775 && carrotCheck && brocCheck && radCheck)
		{
			appleCheck=false;
			pearCheck=false;
			orangeCheck=false;
			state++;
			print("move to state 5");
		}


		//buttons for climb state
		if(state==climbingState && mouseX>=50 && mouseX<=350 && mouseY>=675 && mouseY<=775)
		{
			climbC=false;
			climbL=false;
			climbI=false;
			climbM=false;
			climbB=false;
			climbU=false;
			climbP=false;
			state--;
			print("move to state 4");
		}else if(state==climbingState && mouseX>=650 && mouseX<=950 && mouseY>=675 && mouseY<=775 && climbC && climbL && climbI && climbM && climbB && climbU && climbP)
		{
			climbC=false;
			climbL=false;
			climbI=false;
			climbM=false;
			climbB=false;
			climbU=false;
			climbP=false;
			state++;
			print("move to state 6");
		}

		//buttons for branch state
		if(state==branchState && mouseX<=350 && mouseY<=650)
		{
			screamo.play();
		}else if(state==branchState && mouseX>=650 && mouseY<=650)
		{
			branchCheck=true;
			iLikeItALot.play();
		}else if(state==branchState && mouseX>=50 && mouseX<=350 && mouseY>=675 && mouseY<=775)
		{
			branchCheck=false;
			state--;
			print("move to state 5");
		}else if(state==branchState && mouseX>=650 && mouseX<=950 && mouseY>=675 && mouseY<=775 && branchCheck)
		{
			branchCheck=false;
			state++;
			print("move to state 7");
		}

		//buttons for cocoon state
		if(state==cocoonState && mouseX>=50 && mouseX<=350 && mouseY>=675 && mouseY<=775)
		{
			r=56;
			g=189;
			b=255;
			state--;
			print("move to state 6");
		}else if(state==cocoonState && mouseX>=650 && mouseX<=950 && mouseY>=675 && mouseY<=775 && b==0)
		{
			r=56;
			g=189;
			b=255;
			state++;
			print("move to state 8");
			yay.play();
		}


		//buttons for bfly state
		if(state==bflyState && mouseX>=50 && mouseX<=350 && mouseY>=675 && mouseY<=775)
		{
			state--;
			replayer=false;
			print("move to state 7");
		}else if(state==bflyState && mouseX>500 && mouseY<650)
		{
			replayer=true;
		}else if(state==bflyState && mouseX>=650 && mouseX<=950 && mouseY>=675 && mouseY<=775 && replayer)
		{
			state=0;
			replayer==false;
			print("replay, move to state 0");
		}

	}





