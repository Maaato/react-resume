export const ParticlesParams = {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1,
      direction: "bottom",
      out_mode: "out",
    },
  },
};
