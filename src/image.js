import gsap from "gsap";

export default class Image {
  constructor(el) {
    this.DOM = {
      el: el
    };
    this.next = false;
    this.arrImage = [];
    this.DOM.image1 = this.DOM.el.querySelector("img:nth-child(1)");
    this.DOM.image2 = this.DOM.el.querySelector("img:nth-child(2)");
    this.DOM.images = this.DOM.el.querySelectorAll("img");

    [...this.DOM.images].forEach((a) => {
      this.arrImage.push(a);
    });

    // this.changeImage();
    // this.classActive();
    this.evtClick();
  }
  // changeImage() {
  //   const tl = gsap.timeline({ delay: 2, paused: true });
  //   tl.to(this.DOM.image1, {
  //     duration: 1,
  //     autoAlpha: 1,
  //     scale: 1.1
  //   }).to(
  //     this.DOM.image2,
  //     {
  //       duration: 3,
  //       opacity: 1,
  //       scale: 1,
  //       rotateZ: 0
  //     },
  //     "-=1"
  //   );
  //   tl.play(-3);
  // }

  evtClick() {
    this.arrImage.forEach((image, i) => {
      image.addEventListener("click", (e) => {
        if (!this.next) {
          this.next = true;
          this.show();
          this.timeout(1300);
        }
      });
    });
  }

  show() {
    setTimeout(() => {
      this.arrImage.splice(this.arrImage.length, 0, this.arrImage[0]);
      this.insertInTheHTML();
      this.removeClass();
      this.arrImage.shift();
    }, 1000);
    this.addClass();
  }

  removeClass() {
    this.arrImage[0].classList.remove("active-img");
  }

  addClass() {
    if (this.arrImage[1].className !== "active-img") {
      this.arrImage[1].classList.add("active-img");
    }
  }

  insertInTheHTML() {
    if (this.DOM.el) {
      this.DOM.el.appendChild(this.arrImage[0]);
    } else {
      console.error(`"${this.id}" n'est pas un id valide`);
    }
  }

  timeout(time) {
    setTimeout(() => {
      this.next = false;
    }, time);
  }
}
