import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';

export default function TranspoDesire() {

    let mockup = ['/TranspoDesire/create_survey.png', '/TranspoDesire/preview_data.png', '/TranspoDesire/equation.png']

    return(
        <React.Fragment>
          <Container>
            <Box mx={3}>

              <Container>
                <Box>
                  <Container>
                  <Typography variant="h1" component="h2" align="center">TranspoDesire</Typography>
                  {/* <Grid container spacing={2} align='center' mt={2}>
                    <Grid item xs={0} md={2}>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box>
                        <img src='/akads_logo.png' style={{width: '70%', objectFit: 'cover'}}></img>
                      </Box>
                    </Grid>
                    <Grid item xs={0} md={2}>
                    </Grid>
                  </Grid>*/}
                  </Container> 

                  <Box>
                    <Typography variant="body1" gutterBottom mt={2}>
                      TranspoDesire is a government project that aims to measure the desirability of certain routes in the Philippines with accompanying data visualizations to better aid local government units create roads and policies, despite not being data scientists themselves. I work as a React.js frontend developer in a team of two. The project is currently ongoing.
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      As the frontend developer, I implemented the login page and the admin page that the engineers will be using. 
                    </Typography>

                    <Typography variant="h2" gutterBottom mt={2}>
                      The Tool
                    </Typography>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/TranspoDesire/tool1.png' style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/TranspoDesire/tool2.png' style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>


                    <Typography variant="h2" gutterBottom mt={2}>
                      Admin Page
                    </Typography>

                    <Typography variant="h6" gutterBottom mt={2}>
                      Mockups
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      I have made rough mock-ups of the admin page through Figma to help with implementation.
                    </Typography>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src={mockup[0]} style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src={mockup[1]} style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src={mockup[2]} style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>
                   

                    <Typography variant="h2" gutterBottom mt={2}>
                      Samples of the Admin Page
                    </Typography>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/TranspoDesire/landing.png' style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/TranspoDesire/users.png' style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>

                  

                  </Box>

                </Box>
              </Container>
            </Box>
          </Container>
        </React.Fragment>
    )
}