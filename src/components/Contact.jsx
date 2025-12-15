import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ fontWeight: "600" }}
      >
        Get In Touch
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        I'm currently open to new opportunities and collaborations. Feel free to
        reach out.
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <IconButton
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amishagupta3011@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://www.linkedin.com/in/amisha-gupta-897a7720a/"
            target="_blank"
            color="primary"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://github.com/AmishaGupta2001"
            target="_blank"
            color="primary"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
