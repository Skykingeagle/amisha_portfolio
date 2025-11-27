import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';

const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'];

const Header = () => {
  return (
    <AppBar component="nav" sx={{ background: 'rgba(18, 18, 18, 0.8)', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Amisha Gupta
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Link key={item} to={item.toLowerCase()} smooth={true} duration={500}>
              <Button sx={{ color: '#fff', margin: '0 8px' }}>
                {item}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;