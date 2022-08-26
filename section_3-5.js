//Animaazioni monete Sezione 3
gsap.to("#coin1", {repeat: -1, yoyo: true, y: 40, x: 12, duration: 2, ease: "power1.inOut"})
gsap.to("#coin2", {repeat: -1, yoyo: true, y: 24, x: 18, duration: 2, ease: "power1.inOut", delay: 0.1} )
gsap.to("#coin3", {repeat: -1, yoyo: true, y: 22, x: 15, duration: 2, ease: "power1.inOut", delay: 0.3})

//Animazioni carte e palline da biliardo Sezione 5
gsap.to("#m-c-1", {repeat: -1, yoyo: true, y: 27, x: 2, duration: 2, ease: "power1.inOut"})
gsap.to("#m-c-2", {repeat: -1, yoyo: true, y: 22, x: 16, duration: 2, ease: "power1.inOut", delay: 0.1} )
gsap.to("#m-c-3", {repeat: -1, yoyo: true, y: 10, x: 15, duration: 2.5, ease: "power1.inOut", delay: 0.3})
gsap.to("#m-c-4", {repeat: -1, yoyo: true, y: 15, x: 12, duration: 1.5, ease: "power1.inOut"})
gsap.to("#b-b-1", {repeat: -1, yoyo: true, y: 10, x: 12, duration: 2, ease: "power1.inOut", delay: 0.1} )
gsap.to("#b-b-2", {repeat: -1, yoyo: true, y: 15, x: 15, duration: 2, ease: "power1.inOut", delay: 0.3})
gsap.to("#b-b-3", {repeat: -1, yoyo: true, y: 10, x: 20, duration: 2.5, ease: "power1.inOut"})
gsap.to("#b-b-4", {repeat: -1, yoyo: true, y: 24, x: 10, duration: 2, ease: "power1.inOut", delay: 0.1} )

//Funzioni aggiornare dati Sezione 5

const jackpotPrediction = document.getElementById('jackpot-prediction');
const jackpotLottery = document.getElementById('jackpot-lottery');

function updatePrediction() {
    for(counter=200; counter<500; counter++) {
        jackpotPrediction.innerHTML = `$${counter} billion`;
    }
}

function updateLottery() {
    for(counter=1000; counter<1200; counter++) {
        jackpotLottery.innerHTML = `$${counter}`;
    }
    
}


updatePrediction();
updateLottery();
setInterval(updatePrediction, 3000, 250);
setInterval(updateLottery, 3000);