//Menja Video 
var vid = document.getElementById("video");
var statusElement = document.getElementById("status");
var currentlyPlaying = 1;
var currentlPlayingTime;

var src1 = "https://www.playgwent.com/video/ciri-intro.22.mp4";

var src2 = "https://www.playgwent.com/video/nithral-intro.22.mp4";

var src3 = "https://www.playgwent.com/video/yennefer-intro.22.mp4";

var src4 = "https://www.playgwent.com/video/geralt-intro.22.mp4";

function myFunction() {
    currentlPlayingTime = vid.currentTime;
    if (currentlyPlaying === 1) {
        vid.src = src1;
        currentlyPlaying = 2;
        statusElement.innerText = 'Going to play video1..';
    } else if(currentlyPlaying === 2){
        vid.src = src2;
        currentlyPlaying = 3;
        statusElement.innerText = 'Going to play video2..';
    }else if(currentlyPlaying === 3){
        vid.src = src3;
        currentlyPlaying = 4;
        statusElement.innerText = 'Going to play video3..';
    }else if(currentlyPlaying === 4){
        vid.src = src4;
        currentlyPlaying = 1;
        statusElement.innerText = 'Going to play video4..';
    }
    vid.load();
    vid.addEventListener('loadedmetadata', function () {
        vid.currentTime = currentlPlayingTime;
    }, false);
}

//Umesto html taga <video autoplay loop>, JS za video loop
var videoLoop = document.getElementById('video');
if (typeof videoLoop.loop == 'boolean') 
{
	videoLoop.loop = true;
} 
else 
{
	videoLoop.addEventListener('ended', function () 
	{
		this.currentTime = 0;
		this.play();
	}, false);
}
videoLoop.play();