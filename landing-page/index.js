let tl = gsap.timeline({ repeat: -1, yoyo: true});

let animazione = tl.to(".pancakeLoop1", {y: 25, x: 18, duration: 1.5, stagger: 0.2, ease: "power0.inOut"})
    .to(".pancakeLoop2", {y: 35, x: 25, duration: 1.5, stagger: 0.2, ease: "power0.inOut"}, "-=1.5")

document.querySelector("section.sectionSeven > div.sectionSeven-centralDiv > div:nth-child(4) > button").addEventListener('mouseover', ()=>{
    gsap.to("section.sectionSeven > div.sectionSeven-centralDiv > div:nth-child(4) > button",{opacity: 0.7, duration: 0.2})
    document.querySelector("section.sectionSeven > div.sectionSeven-centralDiv > div:nth-child(4) > button").addEventListener("mouseout",()=> {
        gsap.to("section.sectionSeven > div.sectionSeven-centralDiv > div:nth-child(4) > button",{opacity: 1, duration: 0.2})})

})


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


// document.querySelector("div.bottomFooterLeft > div.rightSide").addEventListener('mouseover',(ev)=>{
//     ev.stopPropagation();
//     gsap.to("div.bottomFooterLeft > div.rightSide",{opacity:0.6, duration: 0.3})
//     document.querySelector("div.bottomFooterLeft > div.rightSide").addEventListener('mouseleave', (ev)=>{
//         ev.stopPropagation();
//         gsap.to("div.bottomFooterLeft > div.rightSide",{opacity:1, duration: 0.2})
//         })})

document.querySelector("div.bottomFooterLeft > div.rightSide > div.showedSide").addEventListener('click',(ev)=>{
    ev.stopPropagation();
    document.querySelector("div.bottomFooterLeft > div.rightSide > div.languages").style.display = "block"
    gsap.fromTo("div.bottomFooterLeft > div.rightSide > div.languages",{opacity:0}, {opacity: 1, duration: 0.5})
    document.querySelector("html").addEventListener('click', async ()=>{
       await  gsap.fromTo("div.bottomFooterLeft > div.rightSide > div.languages",{opacity:1}, {opacity: 0, duration: 0.5})
        document.querySelector("div.bottomFooterLeft > div.rightSide > div.languages").style.display = "none"
    })
})
