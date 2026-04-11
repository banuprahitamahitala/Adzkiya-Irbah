window.onload = () => {
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 50,
      spread: 55,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

const audio = document.getElementById("bgm");
const btn = document.getElementById("musicBtn");

// daftar lagu
const playlist = [
  "asset/YBIMH.mp3",
  "asset/AY.mp3",
  "asset/WITW.mp3"
];

let current = 0;
let isStarted = false;

// play lagu
function playTrack(index) {
  audio.src = playlist[index];
  audio.play();
}

// tombol klik
btn.addEventListener("click", () => {
  if (!isStarted) {
    playTrack(current);
    isStarted = true;
    btn.innerHTML = "🔊";
  } else {
    if (audio.paused) {
      audio.play();
      btn.innerHTML = "🔊";
    } else {
      audio.pause();
      btn.innerHTML = "🔇";
    }
  }
});

// auto pindah lagu
audio.addEventListener("ended", () => {
  current = (current + 1) % playlist.length;
  playTrack(current);
});