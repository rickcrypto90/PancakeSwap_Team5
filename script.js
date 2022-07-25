let tl = gsap.timeline({ repeat: -1, yoyo: true });

let animazione = tl
  .to("figure", {
    y: 15,
    x: 5,
    duration: 1.5,
    stagger: 0.2,
    ease: "power0.inOut",
  })
  .to(
    "#arrow",
    { y: 10, x: 5, duration: 1, stagger: 0.2, ease: "power0.in" },
    "-=1.5"
  )
  .to(
    "#cake",
    { y: 15, x: 5, duration: 1, stagger: 0.2, ease: "power0.in" },
    "-=1.5"
  )
  .to(
    "#folder",
    { y: 15, x: 5, duration: 1, stagger: 0.2, ease: "power0.in" },
    "-=1.5"
  );

const title = document.querySelector(".title-res-data>span");
const arrows = document.querySelector(".title-res-data>button");
const prova = document.querySelector(".res-data");

arrows.addEventListener("click", () => {
  if (title.innerHTML === "Syrup Pools") {
    title.innerHTML = "Farms";
  } else if (title.innerHTML === "Farms") {
    title.innerHTML = "Syrup Pools";
  }
});

// const swap = `<div id="sub-res-data">
// <h6>ciao</h6>
// <p>195.496%</p>
// <p>APR</p>
// </div>

// <div id="subtitle-res-data">
// <h6>TRIVIA-BNB LP</h6>
// <p>178.866%</p>
// <p>APR</p>
// </div>

// <div id="subtitle-res-data">
// <h6>BTCST-BNB LP</h6>
// <p>117.474%</p>
// <p>APR</p>
// </div>

// <div id="subtitle-res-data">
// <h6>BTCST-BNB LP</h6>
// <p>117.474%</p>
// <p>APR</p>
// </div>

// <div id="subtitle-res-data">
// <h6>SDAO-BUSD LP</h6>
// <p>92.448%</p>
// <p>APR</p>
// </div>

// <div id="subtitle-res-data">
// <h6>DUET-CAKE LP</h6>
// <p>90.325%</p>
// <p>APR</p>
// </div>`;
