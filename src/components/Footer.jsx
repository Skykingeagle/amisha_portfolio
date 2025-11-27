import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#1e1e1e' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'© '}
        {new Date().getFullYear()}
        {' Amisha Gupta. All Rights Reserved.'}
      </Typography>
    </Box>
  );
};

export default Footer;