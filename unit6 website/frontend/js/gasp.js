import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".carreerwhois", {
    scrollTrigger: {
        trigger: ".carreerwhois",
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    },
    opacity: 0,
    x: -600,
    duration: 1
});
gsap.from(".carreeragsap", {
    scrollTrigger: {
        trigger: ".carreeragsap",
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    },
    opacity: 0,
    x: -600,
    duration: 1
});
gsap.from(".applgsap", {
    scrollTrigger: {
        trigger: ".applgsap",
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    },
    opacity: 0,
    x: -600,
    duration: 1
});
gsap.from(".coursesgasp", {
    scrollTrigger: {
        trigger: ".coursesgasp",
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    },
    opacity: 0,
    x: -600,
    duration: 1
});
gsap.from(".contactgasp", {
    scrollTrigger: {
        trigger: ".contactgasp",
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    },
    opacity: 0,
    x: -600,
    duration: 1
});