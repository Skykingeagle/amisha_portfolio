const particlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: -1, 
  },
  particles: {
    number: {
      value: 60, 
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#90caf9', 
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#90caf9', // Line color
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1, // Slower speed for a classier, more subtle effect
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab', // Grab effect on hover
      },
      onclick: {
        enable: true,
        mode: 'push', // Push particles on click
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_opacity: 1,
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default particlesConfig;