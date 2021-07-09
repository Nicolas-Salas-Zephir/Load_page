import gsap from 'gsap';

const animLeave = (container) => {
    return gsap.to(container, { autoAlpha: 0, duration: 2, clearProps: "all", ease: "none" })
}

export default animLeave;