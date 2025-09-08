document.addEventListener("DOMContentLoaded", () => {
  const img1 = document.getElementById("img-1");
  let img1Counter = 0;

  const img2 = document.getElementById("img-2");
  let img2Counter = 0;

  const img3 = document.getElementById("img-3");
  let img3Counter = 0;

  img1.addEventListener("click", () => {
    if (img1Counter == 1) {
      // Abrir video em tela cheia no site
      console.log("video");

      img1Counter = 0;
    } else {
      console.log("oi");
      img1.children[0].src = "testeSucesso.png";
      img1Counter++;
    }
  });

  img2.addEventListener("click", () => {
    if (img2Counter == 1) {
      // Abrir video em tela cheia no site
      console.log("video");

      img2Counter = 0;
    } else {
      console.log("oi");
      img2.children[0].src = "testeSucesso.png";
      img2Counter++;
    }
  });

  img3.addEventListener("click", () => {
    if (img3Counter == 1) {
      // Abrir video em tela cheia no site
      console.log("video");

      img3Counter = 0;
    } else {
      console.log("oi");
      img3.children[0].src = "testeSucesso.png";
      img3Counter++;
    }
  });
});
