function setup(){
    canvas=createCanvas(640,640);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    circle(-100,-100,100);
    circle(-740,-100,100);
    fill(0,255,0);
    image(video,0,0,640,480);
}
function take_snapshot(){
    save('mypicture.png');
}