//animazione
let tl = gsap.timeline({ repeat: -1, yoyo: true });

let animazione = tl.to("#main-img", { y: 25, x: 18, duration: 1.5, stagger: 0.2, ease: "power0.inOut" })
    .to("#top-right", { y: 35, x: 25, duration: 1.5, stagger: 0.2, ease: "power0.inOut" }, "-=1.5")
    .to("#top-left", { y: 35, x: 25, duration: 1.5, stagger: 0.2, ease: "power0.inOut" }, "-=1.5")
    .to("#bottom-right", { y: 35, x: 25, duration: 1.5, stagger: 0.2, ease: "power0.inOut" }, "-=1.5")

//fetching 
async function getApi() {
    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false&price_change_percentage=10s')
    let fetchApi = await response.json()
    let pancakeData = fetchApi.find(elem => elem.id === 'pancakeswap-token')
    console.log(pancakeData);
    return pancakeData;
}

let pancakeDataKeys = ['total_supply', 'circulating_supply'];
function updateData() {
    getApi().then(pancakeData => {
        for (let key of pancakeDataKeys) {
            let p = document.getElementById(key);
            if (p) {
                p.innerHTML = Math.round(pancakeData[key]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            else
                console.log('Error! no dom elem with this id: ' + key);
        }
        let marketCap = document.getElementById('market_cap');
        marketCap.innerHTML = `$${Math.round(pancakeData.market_cap)
            .toString().substring(0, 3)} million`

    })
}
updateData();
setInterval(updateData, 20000);
