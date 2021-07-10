import gsap from 'gsap';

const animEnterHome = container => {
    const title = container.querySelector("main h1 span");
    const header = container.querySelector(".wrap-header");
    const button = container.querySelector(".main-header button");
    const h2El = container.querySelector(".main-presentation h2");
    const paraEl = container.querySelector(".main-presentation p");
    const images = container.querySelector("figure");
    const image = container.querySelector("figure .active-img");

    const tl = gsap.timeline();
    
    tl  
        .set(title, { autoAlpha: 1 })
        .fromTo(header, { yPercent: 101, rotateZ: 2 }, { yPercent: 0, rotateZ: 0, duration: 2, clearProps: "all" }, 0)
        .fromTo(title, { yPercent: 101, rotateZ: 2 }, { yPercent: 0, rotateZ: 0, duration: 2, clearProps: "all" }, 0)
        .fromTo(button, { opacity: 0 }, { opacity: 1, duration: 3, clearProps: "all" }, 0.2)
        .fromTo(h2El, { opacity: 0 }, { opacity: 1, duration: 3, clearProps: "all" }, 0.7)
        .fromTo(paraEl, { opacity: 0 }, { opacity: 1, duration: 3, clearProps: "all" }, 0.9)
        .fromTo(images, { clipPath: "inset(0 0% 105% 0)"},{ duration: 2, clipPath: "inset(0 0% 0% 0)", ease: "Expo.easeOut" }, 0.3);
    return tl;
}

const animEnterfade = container => {
    const title = container.querySelector("main h1 span");
    const header = container.querySelector(".wrap-header");
    const tl = gsap.timeline();

    tl
        .set(title, { autoAlpha: 1 })
        .fromTo(title, { yPercent: 101, rotateZ: 2 }, { yPercent: 0, rotateZ: 0, duration: 2, clearProps: "all" }, 0)
        .fromTo(header, { yPercent: 101, rotateZ: 2 }, { yPercent: 0, rotateZ: 0, duration: 2, clearProps: "all" }, 0)
    return tl;
}

export default {animEnterHome, animEnterfade};