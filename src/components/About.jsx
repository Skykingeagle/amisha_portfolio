import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: '600' }}>
        About Me
      </Typography>
      <Typography variant="body1" align="center" sx={{ maxWidth: '800px', margin: '0 auto' }}>
        I am a dedicated software engineer with two years of hands-on experience in the industry. My journey in technology has been driven by a relentless curiosity and a passion for solving complex problems. I thrive in collaborative environments and am now seeking to deepen my expertise through a Master's program in Computer Science, aiming to contribute to cutting-edge research and development.
      </Typography>
    </Box>
  );
};

export default About;