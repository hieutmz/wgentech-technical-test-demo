import "./css/second-section.css";

document.querySelector("div#second-section-component").innerHTML = `
  <div class="second-section-first-panel">
  <div class="second-section-first__right-panel">
      <span class="right-panel__title">Lorem ipsum</span>
      <div class="right-panel__paragraph">
        <span class="paragraph__title">
          Excepteur eiusmod consectetur
        </span>
        <p class="paragraph__description">
          Proident dolore nisi eiusmod excepteur aliquip esse ut
          excepteur. Non excepteur sunt reprehenderit sit ex ullamco
          eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
          elit minim commodo qui culpa cillum duis fugiat consequat
          pariatur.
        </p>
      </div>
      <div class="right-panel__paragraph">
        <span class="paragraph__title">
          Quis aliqua reprehenderit
        </span>
        <p class="paragraph__description">
          Proident dolore nisi eiusmod excepteur aliquip esse ut
          excepteur. Non excepteur sunt reprehenderit sit ex ullamco
          eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
          elit minim commodo qui culpa cillum duis fugiat consequat
          pariatur.
        </p>
      </div>
      <div class="right-panel__paragraph">
        <span class="paragraph__title">
          Ad sit cillum amet duis quis commodo
        </span>
        <p class="paragraph__description">
          Proident dolore nisi eiusmod excepteur aliquip esse ut
          excepteur. Non excepteur sunt reprehenderit sit ex ullamco
          eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
          elit minim commodo qui culpa cillum duis fugiat consequat
          pariatur.
        </p>
      </div>
    </div>
    <img
      id="lake"
      src="/public/images/image.png"
      alt="lake"
      class="second-section-first-panel__img"
    />
  </div>
  <div class="second-section-second-panel">
    <div class="second-section-second__left-panel">
      <span class="second-right-panel__title">
        Mollit aliquip do ipsum consectetur
      </span>
      <div class="second-right-panel__description">
        <p class="second-right-panel__description__p">
          Ex laborum ea qui consectetur mollit commodo eiusmod culpa
          dolor cupidatat. Ullamco dolore irure ea sit elit velit non
          officia. Ad eu reprehenderit in et voluptate mollit.
          Reprehenderit incididunt magna consequat enim sit eiusmod est
          dolor laborum cupidatat.
        </p>
        <p class="second-right-panel__description__p">
          Ipsum minim mollit irure dolore. Sint fugiat deserunt dolor
          aute enim et cillum adipisicing cillum nostrud anim. Sit
          dolore incididunt dolore do sunt pariatur consectetur id qui
          pariatur eu incididunt adipisicing. Irure sint fugiat officia
          veniam consectetur. Esse laborum amet aliqua ad in sunt labore
          duis.
        </p>
      </div>
    </div>
    <img
      id="non-la-viet-nam"
      src="/images/image-3.png"
      alt="Non la Viet Nam"
      class="second-section-second-panel__img"
    />
  </div>
`;

function handleResize2() {
  if (window.innerWidth === 375) {
    const firstImage = document.querySelector("img#lake");
    const secondImage = document.querySelector("img#non-la-viet-nam");

    if (firstImage && secondImage) {
      firstImage.src = "/images/mobiles/lake-mobile.png";
      firstImage.height = 422;
      firstImage.width = 358;
      secondImage.src = "/images/mobiles/non-la-mobile.png";
      secondImage.height = 422;
      secondImage.width = 358;
    }
  }
}

handleResize2();
