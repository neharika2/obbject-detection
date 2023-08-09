status1="";
objects=[];
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
   
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
img=""
function preload(){
    img=loadImage('dog_cat.jpg');
}
function draw(){
    image(video,0,0,380,380);
    //text("Dog",40,40)
    //noFill();
    //stroke("#004444");
    //rect(40,40,300,350);
    //text("Cat",320,60)
    //rect(280,60,300,330)
    if(status1!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectdetector.detect(video,gotresults)
        for(var i=0; i<objects.length;i++){
            document.getElementById("status").innerHTML="status:Objects Detected";
            fill(r,g,b);
            percent= floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function modelloaded(){
console.log("model loaded");
status1=true;

}
function gotresults(error,results){
if(error){
    console(error);
}
else{
    console.log(results);
    objects=results;
}
}
function start(){
    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting object";  
}