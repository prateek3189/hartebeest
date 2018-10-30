var video = document.getElementById('vid');
var remainingTime = document.getElementById('remainingTime');
var totalTime = document.getElementById('totalTime');
var playPause = document.getElementById('playPause');
var stop = document.getElementById('stop');
var rewind = document.getElementById('rewind');
var begin = document.getElementById('begin');
var end = document.getElementById('end');
var fastForward = document.getElementById('fastForward');
var volume = document.getElementById('volume');
var mute = document.getElementById('mute');
var scrubber = document.getElementById('scrubber');
var playbackRate = document.getElementById('playbackRate');

var TIME_STEP = 5;
var vol = 0;

// To Format Time
var formatTime = function(seconds) {
    seconds = Math.round(seconds);
    var minutes = 0;
    if(seconds >= 60) {
        minutes = Math.floor(seconds / 60);
        seconds = (seconds - (minutes * 60));
    }

    seconds = seconds + '';
    if(seconds.length === 1) {
        seconds = 0 + seconds;
    }

    return minutes + ':' + seconds;
}

// To perform Play or Pause operation
var playOrPauseVideo = function() {
    scrubber.max = Math.round(video.duration);

    if(video.paused || video.ended) {
        video.play();
        playPause.innerText = 'Pause';
    } else {
        video.pause();
        playPause.innerText = 'Play';
    }
}

// To Stop the video
var stopVideo = function() {
    video.pause();
    video.currentTime = 0;
    playPause.innerText = 'Play';
    video.playbackRate = 1;
    playbackRate.value = 1;
}

// begin click event
var beginVideo = function() {
    video.currentTime = 0;
}

// rewind click event
var rewindVideo = function() {
    video.currentTime -= TIME_STEP;
}

// fast forward click event
var fastForwardVideo = function() {
    video.currentTime += TIME_STEP;
}

// end click event
var endVideo = function() {
    video.currentTime = video.duration;
    playPause.innerText = 'Play';
}

// volume click event
var volumeVideo = function() {
    video.volume = this.value;
}

// mute video
var muteVideo = function() {
    if(!video.muted) {
        vol = volume.value;
    }

    video.muted = !video.muted;

    if(video.muted) {
        volume.value = 0;
        mute.innerText = 'Unmute';
    } else {
        volume.value = vol;
        mute.innerText = 'Mute';
    }
}

// Scrubber video
var scrubberVideo = function() {
    video.currentTime = this.value;
}

// Scrubber video
var playBackRateVideo = function() {
    video.playbackRate = this.value;
}

// Time update event
var timeUpdateVideo = function() {
    totalTime.innerText = formatTime(video.duration);
}

// Remaining Time
var remainingTimeVideo = function() {
    remainingTime.innerText = formatTime(video.currentTime);
    scrubber.value = video.currentTime;
    if(video.currentTime === video.duration) {
        playPause.innerText = 'Play';
    }
}

// Bind events with buttons
video.addEventListener('click', playOrPauseVideo, false);
playPause.addEventListener('click', playOrPauseVideo, false);
stop.addEventListener('click', stopVideo, false);
begin.addEventListener('click', beginVideo, false);
rewind.addEventListener('click', rewindVideo, false);
fastForward.addEventListener('click', fastForwardVideo, false);
end.addEventListener('click', endVideo, false);
volume.addEventListener('change', volumeVideo, false);
mute.addEventListener('click', muteVideo, false);
scrubber.addEventListener('change', scrubberVideo, false);
playbackRate.addEventListener('change', playBackRateVideo, false);
video.addEventListener('play', timeUpdateVideo, false);
video.addEventListener('timeupdate', remainingTimeVideo, false);
