hp = "";
pp = "";

function preload()
{
    hp = loadSound("hp.mp3");
    pp = loadSound("pepa.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}