import gsap from "gsap";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const resizes = () => {
  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
  });
};

const animLeaveHome = (container) => {
  const btnEl = container.querySelector(".main-header button");
  const h1El = container.querySelector(".main-header h1");
  const h2el = container.querySelector(".main-presentation h2");
  const pEl = container.querySelector(".main-presentation p");
  const header = container.querySelector("header");
  const figure = container.querySelector("figure");
  const image = container.querySelector("figure .active-img");
  const tl = gsap.timeline();

  resizes();
  
  if (sizes.width > 635) {
    tl.to(btnEl, { duration: 2, xPercent: -110, ease: "Power4.easeInOut" })
      .to(h1El, { duration: 3, xPercent: 130, ease: "Power4.easeInOut" }, 0)
      .to(h2el, { duration: 3, xPercent: -110, ease: "Power4.easeInOut" }, 0)
      .to(pEl, { duration: 3, xPercent: 110, ease: "Power4.easeInOut" }, 0)
      .to(header, { duration: 2, yPercent: -200, ease: "Power4.easeInOut" }, 0)
      .to(
        figure,
        { duration: 2, clipPath: "inset(0 0% 105% 0)", ease: "Circ.easeOut" },
        0.7
      )
      .to(image, { duration: 2, scale: 1.5, ease: "Power0.easeNone" }, 0);

    return tl;
  } else {
    tl.to(btnEl, { duration: 2, xPercent: 110, ease: "Power4.easeInOut" })
      .to(h1El, { duration: 3, xPercent: -130, ease: "Power4.easeInOut" }, 0)
      .to(h2el, { duration: 3, xPercent: -110, ease: "Power4.easeInOut" }, 0)
      .to(pEl, { duration: 3, xPercent: 110, ease: "Power4.easeInOut" }, 0)
      .to(header, { duration: 2, yPercent: -200, ease: "Power4.easeInOut" }, 0)
      .to(
        figure,
        { duration: 2, clipPath: "inset(0 0% 105% 0)", ease: "Circ.easeOut" },
        0.7
      )
      .to(image, { duration: 2, scale: 1.5, ease: "Power0.easeNone" }, 0);

    return tl;
  }
};

const animLeaveFade = (container) => {
  return gsap.to(container, {
    autoAlpha: 0,
    duration: 2,
    clearProps: "all",
    ease: "none",
  });
};

export default { animLeaveHome, animLeaveFade };
