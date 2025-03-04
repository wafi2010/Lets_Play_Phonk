const songs = [
  {
    title: "UpDeta",
    artist: "SigmaMusicArt",
    src: "phonk2.mp3",
    img: "sc.png",
  },
  {
    title: "Aggressive Phonk",
    artist: "Brazilian Phonk",
    src: "phonk3.mp3",
    img: "th.png",
  },
  {
    title: "UCHA - Brazilian Phonk",
    artist: "ScrewedQueen",
    src: "phonk4.mp3",
    img: "ucha.png",
  },
];
let currentIndex = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
function playSong(index) {
  currentIndex = index;
  document.getElementById("current-title").textContent = songs[index].title;
  document.getElementById("current-artist").textContent = songs[index].artist;
  document.getElementById("current-img").src = songs[index].img;
  audio.src = songs[index].src;
  audio.play();
  playBtn.classList.replace("bx-play", "bx-pause");
}
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.classList.replace("bx-play", "bx-pause");
  } else {
    audio.pause();
    playBtn.classList.replace("bx-pause", "bx-play");
  }
}
function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(currentIndex);
}
function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(currentIndex);
}
