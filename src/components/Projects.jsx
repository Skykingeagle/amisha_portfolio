// src/components/Projects.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip,
  Stack,
  Paper,
  Avatar,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const projectData = [
  {
    title: "IoT-Based Automated Plant Watering System",
    description:
      "Engineered a smart IoT solution to eliminate manual plant care. The system integrates soil moisture sensors with an ESP8266 microcontroller to monitor hydration levels in real-time and automatically triggers a water pump, ensuring optimal plant health.",
    tech: ["IoT", "ESP8266", "Arduino", "C++", "Sensors"],
    githubLink: "#", // TODO: Add your GitHub link
    liveLink: null, // No live link for this type of project
  },
  {
    title: "Real-Time License Plate Recognition System",
    description:
      "Developed a high-accuracy system using Python and OpenCV to detect and extract alphanumeric characters from vehicle license plates in images. The project involved advanced image processing, contour detection, and character segmentation techniques.",
    tech: ["Python", "OpenCV", "Computer Vision", "NumPy"],
    githubLink: "#", // TODO: Add your GitHub link
    liveLink: null,
  },
];

const Projects = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ fontWeight: "600", mb: 4 }}
      >
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* reverted to your original project card styling */}
        {projectData.map((project, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "rgba(30, 30, 30, 0.7)",
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 30px rgba(144, 202, 249, 0.2)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {project.tech.map((techItem, i) => (
                    <Chip
                      key={i}
                      label={techItem}
                      color="primary"
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                {project.githubLink && (
                  <Button
                    href={project.githubLink}
                    target="_blank"
                    size="small"
                    variant="outlined"
                  >
                    GitHub
                  </Button>
                )}
                {project.liveLink && (
                  <Button
                    href={project.liveLink}
                    target="_blank"
                    size="small"
                    variant="contained"
                  >
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* NEW & IMPROVED AI CARD */}
      <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            maxWidth: 700,
            width: "100%",
            p: 2,
            borderRadius: 4,
            position: "relative",
            overflow: "visible",
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            backdropFilter: "blur(10px)",
            "&::before": {
              // Animated gradient border
              content: '""',
              position: "absolute",
              inset: -1,
              borderRadius: "inherit",
              padding: "2px",
              background: "linear-gradient(135deg, #667eea, #764ba2, #6B21A8)",
              backgroundSize: "200% 200%",
              animation: "gradient-animation 4s ease infinite",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            },
            "@keyframes gradient-animation": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems="center"
          >
            <Avatar
              sx={{ bgcolor: "primary.main", width: 60, height: 60, m: 2 }}
            >
              <AutoAwesomeIcon fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Talk to my AI Assistant
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I've built a{" "}
                <strong>Retrieval-Augmented Generation (RAG)</strong> chatbot
                that's trained on my professional documents. Ask it about my
                resume, projects, or statement of purpose!
              </Typography>
            </Box>
            {/* <Button
              variant="contained"
              endIcon={<ArrowDownwardIcon />}
              sx={{
                mt: { xs: 2, sm: 0 },
                flexShrink: 0,
                transform: "rotate(-45deg)",
                boxShadow: "0 8px 20px rgba(118, 75, 162, 0.4)",
              }}
            >
              Try Me
            </Button> */}
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default Projects;
