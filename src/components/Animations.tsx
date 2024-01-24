import { gsap } from 'gsap';
import React from 'react'; 

// Stagger reveal for dropdown
export const staggerReveal = (ref: Element | HTMLElement | NodeListOf<Element> | Array<Element> | string | null) => {
  gsap.to(ref, {
    duration: 0.8,
    height: "auto",
    autoAlpha: 1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07
    }
  });
};

// Stagger reveal close for dropdown
export const staggerRevealClose = (ref: Element | HTMLElement | NodeListOf<Element> | Array<Element> | string | null) => {
  gsap.to(ref, {
    duration: 0.8,
    height: 0,
    autoAlpha: 0,
    ease: "power3.inOut"
  });
};

// Hover animation for list items
export const onHover = (e: React.MouseEvent<HTMLLIElement>) => {
  gsap.to(e.currentTarget, { // Use currentTarget instead of target
    duration: 0.1,
    color: "#ffffff",
    scale: 1.1,
    ease: "power1.inOut"
  });
};

// Hover out animation for list items
export const onHoverOut = (e: React.MouseEvent<HTMLLIElement>) => {
  gsap.to(e.currentTarget, { // Use currentTarget instead of target
    duration: .1,
    color: "#ffffff",
    scale: 1,
    ease: "power1.inOut"
  });
};
