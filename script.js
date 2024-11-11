let progress = document.getElementById("progress");
let song = document.getElementById("song");
let btn = document.getElementById("play");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playing() {
  if (btn.classList.contains("bi-pause")) {
    song.pause();
    btn.classList.remove("bi-pause");
    btn.classList.add("bi-play-fill");
  } else {
    song.play();
    btn.classList.add("bi-pause");
    btn.classList.remove("bi-play-fill");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();

  song.currentTime = progress.value;
};
