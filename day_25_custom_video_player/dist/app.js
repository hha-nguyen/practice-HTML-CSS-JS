var player = document.querySelector('.player');
var video = document.querySelector('.player__video');
var progress = document.querySelector('.player__progress');
var progressBar = document.querySelector('.player__progress__filled');
var toggle = player.querySelector('.toggle');
var skipButtons = player.querySelectorAll('[data-skip]');
var volumn = player.querySelector('.player__vollume input');
var time = player.querySelector('.player__time');
var togglePlay = function () {
    if (video.paused) {
        video.play();
        toggle.innerHTML = "<i class='bx bx-pause' ></i>";
    }
    else {
        video.pause();
        toggle.innerHTML = "<i class='bx bx-play'></i>";
    }
};
var handleProgress = function () {
    var percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = "".concat(percent, "%");
    time.innerHTML = "".concat(formatTime(video.currentTime), "/").concat(formatTime(video.duration));
};
var scrub = function (e) {
    var scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};
var formatTime = function (time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);
    var minutesValue, secondsValue;
    minutesValue = minutes < 10 ? '0' + minutes : "".concat(minutes);
    secondsValue = seconds < 10 ? '0' + seconds : "".concat(seconds);
    return minutesValue + ':' + secondsValue;
};
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        video.currentTime += +button.getAttribute('data-skip');
    });
});
progress.addEventListener('click', scrub);
volumn.addEventListener('change', function () {
    video.volume = Number(volumn.value);
});
