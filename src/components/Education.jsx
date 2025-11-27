import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: '600' }}>
        Education
      </Typography>
      <Paper elevation={3} sx={{ p: 3, background: '#1e1e1e' }}>
        <ListItem>
          <ListItemIcon>
            <SchoolIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Bachelor of Technology in Computer Science and Business Systems"
            secondary="Bharati Vidyapeeth College of Engineering, Deemed to be University  | 2020 - 2024"
            primaryTypographyProps={{ variant: 'h6', fontWeight: '500' }}
            secondaryTypographyProps={{ color: 'text.secondary' }}
          />
        </ListItem>
        <Typography variant="body2" sx={{ pl: 7 }}>
          Graduated with a focus on software development, database management, and cloud infrastructure. Awarded a Patent for final year project on distributed systems, with a CGPA of 8.82
        </Typography>
      </Paper>
    </Box>
  );
};

export default Education;