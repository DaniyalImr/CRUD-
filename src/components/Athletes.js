import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Box,
} from '@mui/material';

// Importing the local images
import Athlete1 from './Athlete1.jpg';
import Athlete2 from './Athlete2.jpg';
import Athlete3 from './Athlete3.jpg';
import Athlete4 from './Athlete4.jpg';

export default function Athlete() {
  // Example athlete data using the imported images
  const athleteData = [
    {
      name: 'Athlete 1',
      imageUrl: Athlete1,
      bio: 'This is a description of Athlete 1.',
    },
    {
      name: 'Athlete 2',
      imageUrl: Athlete2,
      bio: 'This is a description of Athlete 2.',
    },
    {
      name: 'Athlete 3',
      imageUrl: Athlete3,
      bio: 'This is a description of Athlete 3.',
    },
    {
      name: 'Athlete 4',
      imageUrl: Athlete4,
      bio: 'This is a description of Athlete 4.',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header with AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Athlete Home Page
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content Container */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Athlete Page
        </Typography>

        <Typography variant="body1" gutterBottom>
          Here you can find information about our featured athletes. Learn more about their careers and achievements.
        </Typography>

        {/* Grid Layout for Athletes List */}
        <Grid container spacing={4}>
          {/* Athlete Cards with Images */}
          {athleteData.map((athlete, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ minHeight: 350 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={athlete.imageUrl}  // Using local image
                  alt={athlete.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {athlete.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {athlete.bio}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                  <Button size="small">Follow</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2, mt: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body1" align="center">
            © 2024 Athletes Inc. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
