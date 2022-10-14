noseX=  0;
noseY= 0;
rightWristX=0;
leftWristX=0;
difference = 0;





function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550 , 550);
    canvas.position(660,150);
    posenet =ml5.poseNet(video , modelLoaded);
    posenet.on('pose' , gotPoses);

}

function modelLoaded()
{
   console.log("posenet is intialiazed")
}

function draw()
{
    background('#8d9199');
    document.getElementById("square_side").innerHTML = "width & height of a square will be = "+difference+"px";
    fill('pink');
    stroke('black');
    textSize(difference);
    text('Mahendra',noseX,noseY);
  
    

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);



    }
        
    
}

