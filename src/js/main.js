import "../styles/main.scss";
import Swiper from "swiper";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { initFaq } from "./components/faq";

// Initialize Swiper for Promo section
const promoSlider = new Swiper(".promo__slider", {
  modules: [Navigation, EffectFade, Autoplay],
  effect: "fade",
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  speed: 1200,
  navigation: {
    nextEl: ".promo__nav-btn--next",
    prevEl: ".promo__nav-btn--prev",
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
});

// Initialize FAQ
initFaq();

// Initialize Request Validation
import { initRequestValidation } from "./components/request";
initRequestValidation();

// Preloader Logic
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.classList.add("preloader--hidden");
    // Optional: Remove from DOM after transition
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }
});
