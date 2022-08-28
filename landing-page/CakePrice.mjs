(async function CakePrice(){let fetched = await fetch("https://api.pancakeswap.info/api/v2/tokens");
let response = await fetched.json();
let price = await response.data["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"].price
let prezzo = Number(price).toFixed(3);
document.querySelector(".nav-right-icon-price").innerHTML = "$"+prezzo.toString();
document.querySelector(".nav-right-icon-price").style.color= "#fff";
return prezzo;
})();
