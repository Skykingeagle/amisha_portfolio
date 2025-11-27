import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles'; // <-- THE CRUCIAL CHANGE IS HERE
import particlesConfig from '../particles-config';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // This effect will run only once on component mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the FULL bundle. This includes all features like trails and repulse.
      await loadFull(engine);
    }).then(() => {
      // Once the engine is initialized, we are ready to render the particles
      setInit(true);
    });
  }, []);


  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particlesConfig} // This will now use your enhanced config
      />
    );
  }

  // Render nothing while the engine is initializing
  return null;
};

export default ParticleBackground;