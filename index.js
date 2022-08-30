// INIZIO JS SECTION 7 - FRANCESCO

gsap.to(".pancakeLoop1", {repeat: -1, yoyo: true, y: 22, x: 12, duration: 1.5, ease: "power1.inOut"})
gsap.to(".pancakeLoop2", {repeat: -1, yoyo: true, y: 24, x: 18, duration: 1.5, ease: "power1.inOut", delay: 0.1} )
gsap.to(".pancakeLoop3", {repeat: -1, yoyo: true, y: 27, x: 15, duration: 1.5, ease: "power1.inOut", delay: 0.3})
gsap.to(".pancakeLoop4", {repeat: -1, yoyo: true, y: 22, x: 12, duration: 1.5, ease: "power1.inOut"})
gsap.to(".pancakeLoop5", {repeat: -1, yoyo: true, y: 24, x: 18, duration: 1.5, ease: "power1.inOut", delay: 0.1} )
gsap.to(".pancakeLoop6", {repeat: -1, yoyo: true, y: 27, x: 15, duration: 1.5, ease: "power1.inOut", delay: 0.3})

document.querySelector("section.sectionSeven > div.sectionSeven-centralDiv > div:nth-child(4) > button").addEventListener('mouseover', ()=>{
    gsap.to("section.sectionSeven > div.sectionSeven-centralDiv > div:nth-child(4) > button",{opacity: 0.7, duration: 0.2})
    document.querySelector("section.sectionSeven > div.sectionSeven-centralDiv > div:nth-child(4) > button").addEventListener("mouseout",()=> {
        gsap.to("section.sectionSeven > div.sectionSeven-centralDiv > div:nth-child(4) > button",{opacity: 1, duration: 0.2})})

    })
// FINE JS SECTION 7 - FRANCESCO

// INIZIO JS FOOTER - FRANCESCO
document.querySelector("div.bottomFooterRight > div.rightSide > a > button").addEventListener("mouseover", () =>{
    gsap.to("div.bottomFooterRight > div.rightSide > a > button", {opacity: 0.7, duration: 0.2});
    document.querySelector("div.bottomFooterRight > div.rightSide > a > button").addEventListener('mouseout',()=>{
        gsap.to("div.bottomFooterRight > div.rightSide > a > button", {opacity: 1, duration: 0.2});

    })
});

document.querySelector("div.bottomFooterRight > div.leftSide > a").addEventListener('mouseover', ()=>{
    gsap.to("div.bottomFooterRight > div.leftSide > a img", {scale: 1.2, duration: .5})
    document.querySelector("div.bottomFooterRight > div.leftSide > a").addEventListener('mouseout', ()=>{
        gsap.to("div.bottomFooterRight > div.leftSide > a img", {scale: 1, duration: .5})})
})


window.addEventListener("DOMContentLoaded",async()=>{
    let fetched = await fetch("https://api.pancakeswap.info/api/v2/tokens");
    let response = await fetched.json();
    let price = await response.data["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"].price
    numero = Number(price).toFixed(3);
    console.log(numero)
    let selettore = document.querySelector("div.bottomFooterRight > div.leftSide > a > div");
    selettore.textContent = `$${numero}`;
    
    setInterval(async ()=>{
    let fetched = await fetch("https://api.pancakeswap.info/api/v2/tokens");
    let response = await fetched.json();
    let price = await response.data["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"].price
    numero = Number(price).toFixed(3);
    console.log(numero)
    let selettore = document.querySelector("div.bottomFooterRight > div.leftSide > a > div");
    selettore.textContent = `$${numero}`;
    }, 1000);
})

document.querySelector('div.bottomFooterLeft > div.leftSide').addEventListener('click', ()=>{
    if(document.querySelector('body').classList.contains('dark-mode')){
        document.querySelector('body').classList.remove('dark-mode')
        gsap.to('div.leftSide > div.slider', {x: 15, duration: 0.3})
        document.querySelector('div.bottomFooterLeft > div.leftSide').style.backgroundColor='#666171'
        document.querySelector('div.leftSide > div.slider').style.backgroundColor='#27262c'
        document.querySelector('div.bottomFooterLeft > div.leftSide div.nightMode img').style.filter='invert(33%) sepia(87%) saturate(483%) hue-rotate(219deg) brightness(87%) contrast(86%)'
        document.querySelector('div.bottomFooterLeft > div.leftSide div.lightMode img').style.filter='invert(12%) sepia(3%) saturate(1947%) hue-rotate(210deg) brightness(94%) contrast(90%)'

    }
    else{
        document.querySelector('body').classList.add('dark-mode')
         gsap.to('div.leftSide > div.slider', {x: -14, duration: 0.3})
         document.querySelector('div.bottomFooterLeft > div.leftSide').style.backgroundColor='rgb(189, 194, 196)'
         document.querySelector('div.leftSide > div.slider').style.backgroundColor='white'
         document.querySelector('div.bottomFooterLeft > div.leftSide div.nightMode img').style.filter='invert(100%) sepia(5%) saturate(0%) hue-rotate(45deg) brightness(107%) contrast(105%)'
         document.querySelector('div.bottomFooterLeft > div.leftSide div.lightMode img').style.filter='invert(65%) sepia(67%) saturate(496%) hue-rotate(347deg) brightness(103%) contrast(103%)'
    }
})
// FINE JS FOOTER - FRANCESCO