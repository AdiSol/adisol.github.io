import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LaunchIcon from '@material-ui/icons/Launch'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export default function Akads() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
    }
  })

    return(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Container>
            <Box mx={3}>

              <Container>
                <Box>
                  <Container>
                    <center> <h1> AkadsPH </h1></center>
                    
                  
                  <Grid container spacing={2} align='center' mt={2}>
                    <Grid item xs={0} md={2}>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box>
                        <img src='/akads_logo.png' style={{width: '70%', objectFit: 'cover'}}></img>
                      </Box>
                    </Grid>
                    <Grid item xs={0} md={2}>
                    </Grid>
                  </Grid>
                  </Container>

                  <Box>
                    
                    <Box mb={1}>
                      <a
                        href='https://akadsph.com'
                        aria-label='live preview'
                        className='link link--icon'
                        style={{margiRight: '40px'}}
                      >
                        Website <LaunchIcon />
                      </a>
                    </Box>
                    

                    <a
                      href='https://www.youtube.com/watch?v=AZuWV_sB53k'
                      aria-label='youtube vid'
                      className='link link--icon'
                    >
                      Video <YouTubeIcon />
                    </a>
                    <Typography variant="body1" gutterBottom mt={2}>
                      AkadsPH is an online tutor matching platform. I worked as a <span style={{fontWeight: 'bold'}}>React.js frontend developer</span> and the <span style={{fontWeight: 'bold'}}>lead UX researcher</span> in this project. We were a team of 4 developers. The website can be accessed <a className='link link--icon' href='https://www.akadsph.com/'>here</a>.
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      As a lead UX researcher, I designed and conducted all the usability tests the stakeholders needed. The compilation of insights and subsequent analyses was done by me.
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      As the frontend developer, I implemented the landing page, the tutor payouts, the tutor requests form, the tutor application form, the credits store, and all the modal interactions.
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                    The website that was created was based on just a few designs their designer presented to us in Figma. We improvised the designs of other pages that were not specifically indicated in the mockup. In addition to those, we provided recommendations that would make interactions more intuitive.
                    </Typography>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/Akads/figma.png' style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>


                    <Typography variant="h6" gutterBottom mt={2}>
                      Usability Tests
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                    I planned out the tasks for both tutors and parents to do on the AkadsPH. I moderated for all the usability tests.
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      For quantitative evaluation, we used the System Usability Score (SUS) and time task completion to measure the usability of the product and how long it would take to complete.
                    </Typography>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/Akads/akads_sus.png' style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>

                    <Typography variant="body1" gutterBottom mt={2}>
                      For qualitative, we take note of specific quotes, actions, and reactions of the participants.
                    </Typography>
                    <Typography variant="body1" gutterBottom mt={2}>
                    After compiling the observations, I consolidated the positive and negative remarks and provided recommendations with varying severities to the stakeholders.
                    </Typography>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/Akads/landing1.png' style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/Akads/landing2.png' style={{width:"100%"}}></img>
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
      </ThemeProvider>
    )
}