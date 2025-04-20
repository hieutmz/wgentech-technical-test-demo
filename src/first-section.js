import "./css/first-section.css";

document.querySelector("div#first-section-component").innerHTML = `
  <span class="first-section-component__title">Lorem ullamco</span>
  <div class="first-section-component__image-description">
    <img
      id="image-guom-lake"
      class="image-description__image-guom-lake"
      src="/images/image-4.png"
      alt="Guom Lake"
    />
    <img 
      id="women-and-cargo-bikes"
      src="/images/image-1.png" 
      class="image-description__women-and-cargo-bikes"
      alt="women and cargo bikes"
    />
  </div>
  <div class="first-section-component__description">
    <p class="description__p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur
      eiusmod consectetur proident Lorem reprehenderit esse do anim
      velit in aliquip dolore ut officia. Consectetur reprehenderit
      proident do exercitation eu. Sunt fugiat pariatur elit est laboris
      quis. Esse mollit incididunt quis amet. Qui non irure incididunt
      laborum nisi cillum consequat aliquip aliquip cillum in. Ut
      excepteur labore voluptate tempor cupidatat dolor eiusmod do ipsum
      Lorem cupidatat do labore.
    </p>
    <p class="description__p">
      Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur.
      Non excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem
      incididunt nisi mollit nostrud. Irure velit enim elit minim
      commodo qui culpa cillum duis fugiat consequat pariatur.
    </p>
  </div>
`;

function handleResize() {
  if (window.innerWidth === 375) {
    const imageLeft = document.querySelector("img#image-guom-lake");
    const imageRight = document.querySelector("img#women-and-cargo-bikes");

    if (imageLeft && imageRight) {
      imageLeft.src = "/images/mobiles/guom-lake-mobile.png";
      imageRight.src = "/images/mobiles/women-and-cargo-bikes-mobile.png";
    }
  }
}

handleResize();
