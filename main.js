function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Intialized!');
}

function gotPoses(results) {
 if(results < 0) {
console.log(results);
 }
}