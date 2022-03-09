function setup() {

    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();


}

function draw() {

    image(video, 230, 150, 220, 200);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    circle(590, 50, 80);
    circle(50, 430, 80);
    circle(590, 430, 80);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(90, 40, 460, 30 );
    rect(90, 420, 460, 30);
    rect(40, 85, 30, 310);
    rect(580, 85, 30, 310);


}

function take_snapshot() {

    save('pic.png');

}



