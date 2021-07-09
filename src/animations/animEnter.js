import gsap from 'gsap';

const animEnter = container => {
    return gsap.from(container, { autoAlpha: 0, duration: 2, clearProps: "all", ease: "none" })
}

export default animEnter;