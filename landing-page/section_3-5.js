//Animazioni monete Sezione 3
gsap.to("#coin1", {repeat: -1, yoyo: true, y: 40, x: 12, duration: 2, ease: "power1.inOut"})
gsap.to("#coin2", {repeat: -1, yoyo: true, y: 24, x: 18, duration: 2, ease: "power1.inOut", delay: 0.1} )
gsap.to("#coin3", {repeat: -1, yoyo: true, y: 22, x: 15, duration: 2, ease: "power1.inOut", delay: 0.3})

//Animazioni carte e palline da biliardo Sezione 5
gsap.to("#m-c-1", {repeat: -1, yoyo: true, y: 27, x: 0, duration: 2, ease: "power1.inOut"})
gsap.to("#m-c-2", {repeat: -1, yoyo: true, y: 22, x: 22, duration: 2, ease: "power1.inOut", delay: 0.1} )
gsap.to("#m-c-3", {repeat: -1, yoyo: true, y: 10, x: 12, duration: 2.5, ease: "power1.inOut", delay: 0.3})
gsap.to("#m-c-4", {repeat: -1, yoyo: true, y: 15, x: 18, duration: 1.5, ease: "power1.inOut"})
gsap.to("#b-b-1", {repeat: -1, yoyo: true, y: 18, x: -6, duration: 1.5, ease: "power1.inOut", delay: 0.1} )
gsap.to("#b-b-2", {repeat: -1, yoyo: true, y: 15, x: -12, duration: 2.5, ease: "power1.inOut", delay: 0.3})
gsap.to("#b-b-3", {repeat: -1, yoyo: true, y: 10, x: -8, duration: 2, ease: "power1.inOut"})
gsap.to("#b-b-4", {repeat: -1, yoyo: true, y: 24, x: 0, duration: 2, ease: "power1.inOut", delay: 0.1} )

//Funzioni per aggiornare dati Sezione 5
const jackpotLottery = document.getElementById('jackpot-lottery');



const counterAnim1 = (qSelector, start = 0, end, duration = 1000) => {
    let internationalNumberFormat = new Intl.NumberFormat('en-US')
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = '$' + internationalNumberFormat.format(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

function getCounter(){
    jackpotLottery.innerHTML = counterAnim1('#jackpot-lottery', 78000, 90000, 20000);
}
getCounter();


setInterval(getCounter, 30000)