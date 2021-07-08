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

import LoadPage from "./animPage";
import Image from "./image";

class Index {
  constructor() {
    document.body.style.opacity = 1;
    this.init();
  }

  init() {
    try {
      new Image(document.querySelector("figure"));
      new LoadPage(document.querySelector(".container"));
    } catch (e) {
      console.error(e.message);
    }
  }
}

const index = new Index();
