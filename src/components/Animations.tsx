import { gsap } from 'gsap';

// Stagger reveal for dropdown
export const staggerReveal = (ref: null) => {
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
export const staggerRevealClose = (ref:null) => {
  gsap.to(ref, {
    duration: 0.8,
    height: 0,
    autoAlpha: 0,
    ease: "power3.inOut"
  });
};

// Hover animation for list items
export const onHover = (e: { target: any; }) => {
  gsap.to(e.target, {
    duration: 0.3,
    color: "#ffffff",
    scale: 1.1,
    ease: "power1.inOut"
  });
};

// Hover out animation for list items
export const onHoverOut = (e: { target: any; }) => {
    gsap.to(e.target, {
      duration: 0.3,
      color: "#718096", // Slate gray color, adjust if your original color is different
      scale: 1,
      ease: "power1.inOut"
    });
  };
  