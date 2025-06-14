// --- Random khác mỗi thiết bị (không cần API) ---
function getDeviceFingerprint() {
  const data = [
    navigator.userAgent,
    navigator.language,
    screen.width,
    screen.height,
    screen.colorDepth,
    new Date().getTimezoneOffset()
  ].join('|');

  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const chr = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return Math.abs(hash);
}

function pseudoRandom(seed) {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

const fingerprint = getDeviceFingerprint();
const now = Date.now();
const seed = fingerprint ^ now;
const random = pseudoRandom(seed);
// --- Kết thúc block random thiết bị ---

const videoSources = [
  "https://v1.pinimg.com/videos/mc/720p/47/95/dc/4795dc2539e5175107bfce9eeda217cd.mp4",
  "https://motionbgs.com/media/923/itachi-and-kisame-in-the-rain.960x540.mp4",
  "https://motionbgs.com/media/5615/mob.960x540.mp4",
  "https://motionbgs.com/media/7778/saber-alter.960x540.mp4",
  "https://motionbgs.com/media/5969/goku-explosive-aura.960x540.mp4",
  "https://motionbgs.com/media/5623/shigeo-kageyama-cosmic.960x540.mp4"
];

const videoId = Math.floor(random() * videoSources.length);
const bgSource = document.getElementById("bg-source");
const bgVideo = document.getElementById("background-video");

if (bgSource && bgVideo) {
  bgSource.src = videoSources[videoId];
  bgVideo.load();
}
