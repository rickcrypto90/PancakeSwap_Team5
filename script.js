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

const swap = `<div id="sub-res-data">
<h6>ciao</h6>
<p>195.496%</p>
<p>APR</p>
</div>

<div id="subtitle-res-data">
<h6>TRIVIA-BNB LP</h6>
<p>178.866%</p>
<p>APR</p>
</div>

<div id="subtitle-res-data">
<h6>BTCST-BNB LP</h6>
<p>117.474%</p>
<p>APR</p>
</div>

<div id="subtitle-res-data">
<h6>BTCST-BNB LP</h6>
<p>117.474%</p>
<p>APR</p>
</div>

<div id="subtitle-res-data">
<h6>SDAO-BUSD LP</h6>
<p>92.448%</p>
<p>APR</p>
</div>

<div id="subtitle-res-data">
<h6>DUET-CAKE LP</h6>
<p>90.325%</p>
<p>APR</p>
</div>`;
