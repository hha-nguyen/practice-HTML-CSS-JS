const player: HTMLDivElement = document.querySelector('.player');
const video: HTMLVideoElement= document.querySelector('.player__video');
const progress: HTMLDivElement = document.querySelector('.player__progress');
const progressBar: HTMLDivElement = document.querySelector('.player__progress__filled');

const toggle: HTMLDivElement = player.querySelector('.toggle');
const skipButtons: NodeList = player.querySelectorAll('[data-skip]');
const volumn: HTMLInputElement = player.querySelector('.player__volumn input');
const time: HTMLDivElement = player.querySelector('.player__time');

const togglePlay = (): void => {
    if (video.paused) {
        video.play();
        toggle.innerHTML = "<i class='bx bx-pause' ></i>";
    } else {
        video.pause();
        toggle.innerHTML = "<i class='bx bx-play'></i>";
    }
};

const handleProgress = (): void => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
    
    time.innerHTML = `${formatTime(video.currentTime)}/${formatTime(video.duration)}`;
};

const scrub = (e: MouseEvent): void => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

const formatTime = (time: number): string => {
    let minutes: number = Math.floor(time / 60);
    let seconds: number = Math.floor(time - minutes*60);
    let minutesValue: string, secondsValue: string;
    minutesValue = minutes < 10 ? '0' + minutes : `${minutes}`;
    secondsValue = seconds < 10 ? '0' + seconds : `${seconds}`;

    return minutesValue + ':' + secondsValue;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach((button: Element) => {
    button.addEventListener('click', () => {
        video.currentTime += +button.getAttribute('data-skip');
    });
});

progress.addEventListener('click', scrub);

volumn.addEventListener('change', () => {
    video.volume = Number(volumn.value);
});


