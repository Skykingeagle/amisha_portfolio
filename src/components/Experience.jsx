import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

// Custom styled card component
const SleekCard = ({ children }) => (
  <Box sx={{
    my: 2,
    p: 3,
    background: 'rgba(30, 30, 30, 0.7)', // Frosted glass effect
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(144, 202, 249, 0.2)', // Glow effect
    }
  }}>
    {children}
  </Box>
);

const experienceData = [
  {
    role: 'Full-Stack Software Engineer',
    company: 'Tata Communications',
    period: 'July 2024 - Present',
    points: [
      'Architecting and developing full-stack employee portals and tracking applications using the MERN stack (MongoDB, Express.js, React, Node.js).',
      'Implementing and managing CI/CD pipelines for automated deployments and infrastructure provisioning, significantly reducing manual intervention.',
      'Collaborating with project managers to translate business requirements into robust, user-centric features in an Agile environment.',
    ]
  },
  {
    role: 'Cloud Engineering Intern',
    company: 'Tata Communications',
    period: 'March 2024 - June 2024',
    points: [
      'Developed serverless applications using AWS Lambda and API Gateway to create efficient, event-driven backend services.',
      'Utilized DynamoDB for scalable, high-performance NoSQL data storage and management.',
      'Monitored application health by integrating AWS CloudWatch APIs and setting up custom alerts.',
      'Gained hands-on experience with both AWS and Azure cloud shells for diagnostics and management.',
    ]
  },
  {
    role: 'Frontend Solutions Intern',
    company: 'LTI Mindtree',
    period: 'June 2023 - August 2023',
    points: [
      'Designed intuitive and responsive user interfaces for a new Employee Central portal, focusing on improving user experience.',
      'Developed and deployed custom frontend components and widgets on the ServiceNow platform, extending its native capabilities.',
      'Collaborated with the service delivery team to translate business requirements into functional and visually appealing frontend solutions.',
    ]
  }
];

const Experience = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: '600', mb: 4 }}>
        Professional Experience
      </Typography>
      <List>
        {experienceData.map((exp, index) => (
          <SleekCard key={index}>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <WorkIcon color="primary" sx={{ fontSize: 30 }}/>
              </ListItemIcon>
              <ListItemText
                primary={`${exp.role} at ${exp.company}`}
                secondary={exp.period}
                primaryTypographyProps={{ variant: 'h6', fontWeight: '500' }}
                secondaryTypographyProps={{ color: 'text.secondary', mt: 0.5 }}
              />
            </ListItem>
            <Box component="ul" sx={{ pl: 7, color: 'text.secondary', mt: 1, paddingLeft: '20px' }}>
              {exp.points.map((point, i) => (
                <Typography component="li" variant="body2" key={i} sx={{ mb: 0.5 }}>
                  {point}
                </Typography>
              ))}
            </Box>
          </SleekCard>
        ))}
      </List>
    </Box>
  );
};

export default Experience;