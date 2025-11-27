import React from 'react';
import { Box, Typography, Button, Avatar, IconButton } from '@mui/material';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProfilePic from './profile.jpeg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
        textAlign: 'center',
      }}
    >
      <Avatar
        alt="Amisha Gupta"
        src={ProfilePic}
        sx={{ width: 180, height: 180, mb: 3, border: '3px solid #90caf9' }}
      />
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: '700' }}>
        Amisha Gupta
      </Typography>
      <Typography variant="h5" component="h2" color="primary" sx={{ mb: 3 }}>
        <TypeAnimation
          sequence={[
            'Software Engineer',
            2000,
            'Cloud Technology Enthusiast',
            2000,
            'Aspiring MS in CS Candidate',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Typography>
      <Typography variant="body1" paragraph sx={{ maxWidth: '600px', my: 2, color: 'text.secondary' }}>
        Welcome to my digital space. I am a passionate software engineer with experience in building robust applications and a keen interest in cloud computing and systems design.
      </Typography>
      <Box sx={{ my: 2 }}>
        <Button
          component={Link}
          to="contact"
          smooth={true}
          duration={500}
          variant="contained"
          color="primary"
          size="large"
          sx={{ mr: 2 }}
        >
          Contact Me
        </Button>
        <Button
          component="a" // Assuming your resume will be in the public folder
          href="/Macy_Steve_Resume.pdf"
          target="_blank"
          variant="outlined"
          color="secondary"
          size="large"
        >
          Download CV
        </Button>
      </Box>
      <Box>
        <IconButton href="https://linkedin.com/in/dummy-profile" target="_blank" sx={{ color: '#fff', '&:hover': { color: '#90caf9' }}}>
          <LinkedInIcon fontSize="large"/>
        </IconButton>
        <IconButton href="https://github.com/dummy-profile" target="_blank" sx={{ color: '#fff', '&:hover': { color: '#90caf9' }}}>
          <GitHubIcon fontSize="large"/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;