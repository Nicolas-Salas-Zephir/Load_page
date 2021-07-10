import barba from "@barba/core";
import { animEnter } from "./animations"
import { animLeave } from "./animations"

export default class Transition {
  constructor() {
    this.initTransitionPage();
  }

  initTransitionPage() {
    barba.init({
      transitions: [
        {
          name: "home",
          to: {
            namespace: ["home"],
          },
          once({ next }) {
            animEnter.animEnterHome(next.container);
          },
          leave: ({ current }) => animLeave.animLeaveFade(current.container),
          enter({ next }) {
            animEnter.animEnterHome(next.container);
          }        
        },
        {
          name: "fade",
          to: {
            namespace: ["fade"],
          },
          once({ next }) {
            animEnter.animEnterfade(next.container);
          },
          leave: ({ current }) => animLeave.animLeaveHome(current.container),
          enter({ next }) {
            animEnter.animEnterfade(next.container);
          }        
        }
      ]
    });
  }
}
