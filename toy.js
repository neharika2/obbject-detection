Status = "";
toy_image="";
function preload(){
    Elephant_image = loadImage("image-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(640,350);
    canvas.position(315,200 );
    object_detector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById('status')
}
function modelloaded(){
    console.log("model is loaded");
    Status=true;
    object_detector.detect(toy_image,gotResults);
}
function gotResults (){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw(){
    image(toy_image,0,0,640,350);
}