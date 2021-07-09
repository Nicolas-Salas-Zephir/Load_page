import barba from "@barba/core";
import { animEnter, animLeave } from "./animations"

export default class Transition {
  constructor() {
    this.initTransitionPage();
  }

  initTransitionPage() {
    barba.init({
      transitions: [
        {
          
          once({ next }) {
            animEnter(next.container);
          },
          leave: ({ current }) => animLeave(current.container),
          enter({ next }) {
            animEnter(next.container);
          }        
        }
      ]
    });
  }
}
