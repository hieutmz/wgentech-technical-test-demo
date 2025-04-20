export function handleResize() {
  if (window.innerWidth === 375) {
    const imageLeft = document.querySelector("img#image-guom-lake");
    console.log("🚀 ~ handleResize ~ imageLeft:", imageLeft);
    const imageRight = document.querySelector("img#women-and-cargo-bikes");
    const firstImage = document.querySelector("img#lake");
    console.log("🚀 ~ handleResize ~ firstImage:", firstImage);
    const secondImage = document.querySelector("img#non-la-viet-nam");
    console.log("🚀 ~ handleResize ~ secondImage:", secondImage);

    if (imageLeft && imageRight && firstImage && secondImage) {
      imageLeft.src = "/images/mobiles/guom-lake-mobile.png";
      imageRight.src = "/images/mobiles/women-and-cargo-bikes-mobile.png";
      firstImage.src = "/images/mobiles/lake-mobile.png";
      secondImage.src = "/images/mobiles/women-and-cargo-bikes-mobile.png";
    }
  }
}
