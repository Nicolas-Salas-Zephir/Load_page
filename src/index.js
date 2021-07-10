/*
 *
 * This Code Snippet Is Heavily Inspired By Ivan Gorbunov
 * https://dribbble.com/shots/15985374-THE-VALERY-Studio-s-page
 *
 * Unsplash Image of Annie Spratt
 * https://unsplash.com/@anniespratt
 *
 */

import "./styles.scss";
import Image from "./image";
import Transition from "./transitionPage";

class Index {
  constructor() {
    
    this.init();
  }

  init() {
    try {
      if (document.location.href === "http://localhost:1035/index.html" || document.location.href === "http://localhost:1035/") {
         new Image(document.querySelector("figure"));
      }
      new Transition();
    } catch (e) {
      console.error(e.message);
    }
  }
}

const index = new Index();
