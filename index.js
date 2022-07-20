let tl = gsap.timeline({ repeat: -1, yoyo: true });

let animazione = tl.to("#main-img", { y: 25, x: 18, duration: 1.5, stagger: 0.2, ease: "power0.inOut" })
    .to("#top-right", { y: 35, x: 25, duration: 1.5, stagger: 0.2, ease: "power0.inOut" }, "-=1.5")
    .to("#top-left", { y: 35, x: 25, duration: 1.5, stagger: 0.2, ease: "power0.inOut" }, "-=1.5")
    .to("#bottom-right", { y: 35, x: 25, duration: 1.5, stagger: 0.2, ease: "power0.inOut" }, "-=1.5")