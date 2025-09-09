document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById("video-container");
  const videoPlayer = document.getElementById("video-player");
  const celulas = document.querySelectorAll(".celula");

  const videoSources = {
    "celula-neuronio": "src/videos/Neuroleto.mp4",
    "celula-pincel": "src/videos/Elio.mp4",
    "celula-gustativa": "src/videos/Caliciforme.mp4",
  };

  const fecharVideo = () => {
    videoContainer.style.display = "none";
    videoPlayer.pause();
    videoPlayer.src = "";
  };

  celulas.forEach((celula) => {
    celula.addEventListener("click", () => {
      const celulaId = celula.id;
      const videoSrc = videoSources[celulaId];

      if (videoSrc) {
        videoPlayer.src = videoSrc;
        videoContainer.style.display = "flex";
        videoPlayer.play();

        videoPlayer.requestFullscreen().catch((err) => {
          console.log(
            "Não foi possível entrar em modo tela cheia:",
            err.message
          );
        });
      }
    });
  });

  videoPlayer.addEventListener("ended", fecharVideo);

  videoContainer.addEventListener("click", (event) => {
    if (event.target === videoContainer) {
      fecharVideo();
    }
  });
});
