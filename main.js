nose_x=0;
nose_y=0;
function preload() {
mustache=loadImage('https://i.postimg.cc/HLBfPcx2/istockphoto-485318064-170667a-removebg-preview.png')
}

function setup(){
   canvas=createCanvas(302,302);
   canvas.center();
  video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotposes);
}

function draw(){
image(video,0,0,300,300);
image(mustache,nose_x,nose_y,70,55);
}

function takesnapshot(){
  save('mustache_filter.png')  
}

function modelLoaded(){
 console.log("model loaded"); 
}
function gotposes(results){
if(results.length > 0){
console.log(results);
nose_x=results[0].pose.nose.x - 29;
nose_y=results[0].pose.nose.y ;
 
}
}