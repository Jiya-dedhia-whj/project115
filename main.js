function preload()
{
  mustache = loadImage('https://w7.pngwing.com/pngs/314/989/png-transparent-moustache-mustache-hair-beard-mustache-png-thumbnail.png')
}
function setup()
{
    canvas = createCanvas(600,550);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600,550);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
  image(video,0,0,600,550);
}
function take_snapshot()
{
    save("mustache.png")
}
function modelLoaded()
{
    console.log('Model is Loaded');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose_x = " + results[0].pose.nose.x);
        console.log("nose_y = " + results[0].pose.nose.y);
    }
}