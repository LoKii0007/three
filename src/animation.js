import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Animation = (current) => {
  gsap.registerPlugin(ScrollTrigger);

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".yellow",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });

  t1.fromTo(
    current.rotation,
    {
      x: 0,
      y: 0,
      z: 0,
    },
    {
      x: 0,
      y: 1.5,
      z: 0,
    }
  );

  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".yellow",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });

  t2.fromTo(
    current.position,
    {
      x: -5,
      y:-3
    },
    {
      x: 2,
      y:0
    }
  );
};

export const Animation0 = (position) => {
  gsap.registerPlugin(ScrollTrigger);

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".green",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });

  t1.fromTo(
    position,
    {
      x: 0,
      y: 15,
      z: 0,
    },
    {
      x: 0,
      y: 0,
      z: 0,
    }
  );
};

export const Animation1 = (position) => {
  gsap.registerPlugin(ScrollTrigger);

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".green",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });

  t1.fromTo(
    position,
    {
      x: -48,
      y: 0,
      z: 0,
    },
    {
      x: 0,
      y: 0,
      z: 0,
    }
  );
};

export const Animation2 = (position) => {
  gsap.registerPlugin(ScrollTrigger);

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".green",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });

  t1.fromTo(
    position,
    {
      x: 30,
      y: 10,
      z: 0,
    },
    {
      x: 0,
      y: 0,
      z: 0,
    }
  );
};
export const Animation3 = (position) => {
  gsap.registerPlugin(ScrollTrigger);

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".green",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });

  t1.fromTo(
    position,
    {
      x: 30,
      y: 10,
      z: 0,
    },
    {
      x: 0,
      y: 0,
      z: 0,
    }
  );
};

export const Animation4 = (position) => {
  gsap.registerPlugin(ScrollTrigger);

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".green",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });

  t1.fromTo(
    position,
    {
      x: 3,
      y: -17,
      z: 3,
    },
    {
      x: 0,
      y: 0,
      z: 0,
    }
  );
};
export const Animation5 = (position) => {
  gsap.registerPlugin(ScrollTrigger);

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".green",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
  });

  t1.fromTo(
    position,
    {
      x: 0,
      y: 0,
      z: 15,
    },
    {
      x: 0,
      y: 0,
      z: 0,
    }
  );
};
