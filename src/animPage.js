import "./styles.scss";
import gsap from "gsap";

export default class LoadPage {
  constructor(el) {
    this.DOM = {
      el: el
    };

    this.DOM.btnEl = this.DOM.el.querySelector(".main-header button");
    this.DOM.h1El = this.DOM.el.querySelector(".main-header h1");
    this.DOM.h2el = this.DOM.el.querySelector(".main-presentation h2");
    this.DOM.pEl = this.DOM.el.querySelector(".main-presentation p");
    this.DOM.header = this.DOM.el.querySelector("header");
    this.DOM.fImage = this.DOM.el.querySelector("figure");
    this.DOM.image = this.DOM.el.querySelector("figure img");

    this.tl = gsap.timeline({
      paused: true,
      defaults: { ease: "Power4.easeInOut" }
    });

    this.timeline();
  }

  timeline() {
    document.body.style.opacity = 1;
    this.tl
      .to(this.DOM.btnEl, { duration: 2, x: "-110%" })
      .to(this.DOM.h1El, { duration: 3, x: "130%" }, "-=2.20")
      .to(this.DOM.h2el, { duration: 3, x: "-110%" }, "-=2.8")
      .to(this.DOM.pEl, { duration: 3, x: "110%" }, "-=3.7")
      .to(this.DOM.header, { duration: 2, y: "-200%" }, "-=2.6")
      .to(
        this.DOM.fImage,
        { duration: 5, clipPath: "inset(0 0% 100% 0)" },
        "-=3.9"
      )
      .to(this.DOM.image, { duration: 2, scale: 1.5 }, "-=3.4");
    return this.tl.play(-3);
  }
}
