import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';

export default function CoDo() {

    let v1 = ['/CoDo/v1_1.png', '/CoDo/v1_2.png', '/CoDo/v1_3.png', '/CoDo/v1_4.png']
    let v2 = ['/CoDo/v2_1.png', '/CoDo/v2_2.png']
    let v3 = ['/CoDo/v3_1.png', '/CoDo/v3_2.png', '/CoDo/v3_3.png', '/CoDo/v3_4.png']
    
    return(
        <React.Fragment>
          <Container>
            <Box mx={3}>

              <Container>
                <Box>
                  <Container>
                  <Typography variant="h1" component="h2" align="center">CoDo</Typography>
                  <Grid container spacing={2} align='center' mt={2}>
                    <Grid item xs={0} md={2}>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box>
                        <img src='/codo_logo.png' style={{width: '70%', objectFit: 'cover'}}></img>
                      </Box>
                    </Grid>
                    <Grid item xs={0} md={2}>
                    </Grid>
                  </Grid>
                  </Container> 

                  <Box>
                    <Typography variant="body1" gutterBottom mt={2}>
                      CoDo is a personal project that we worked on as a team of four
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      As a UX researcher, I collaborated with creating need-finding questions and outlined the usability tests. In addition, I specified the metrics used during the usability tests.
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                    As the UX designer, I designed the bill information, the payment options, the payment screen, and the split bill screen.
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      <span style={{fontWeight: 'bold'}}>Problem</span>: There are several inconveniences when living in a condo such as:

                      <Box ml={3}>
                        <ul>
                          <li>• Losing track of late bills</li>
                          <li>• Making roommates cooperate on the shared bills</li>
                          <li>• General upkeep</li>
                        </ul>
                      </Box>
                    </Typography>
                    
                    <Typography variant="body1" gutterBottom mt={2}>
                      <span style={{fontWeight: 'bold'}}>Challenge</span>: How might we improve the efficiency of responsibilities of condo residents?
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      <span style={{fontWeight: 'bold'}}>Solution</span>: CoDo is a condominium/dormitory companion app mainly for students to automate certain activities with a click of a button.
                    </Typography>

                    <Box my={2}>
                      <Typography variant="h2" component="h2">Research</Typography>
                      
                      <Typography variant="body1" gutterBottom mt={2}>
                      We interviewed 6 condo residents that were composed of students. Their problems varied greatly. These include:
                        <Box ml={3}>
                          <ul>
                            <li>• Missing home-cooked meals</li>
                            <li>• Bothersome roommates and neighbors</li>
                            <li>• Late bill fees</li>
                            <li>• Lack of security</li>
                            <li>• Crowded elevators</li>
                            <li>• Poor laundry services</li>
                            <li>• Arguing between roommates on whose turn it is to pay the bill</li>
                            <li>• Poor internet connection</li>
                          </ul>
                        </Box>
                    </Typography>

                    <Typography variant="h2" gutterBottom mt={2}>
                      Storyboards
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      Some of the sample storyboards I made were based on some of the problems of the users. The first storyboard shows the context of the problem and the second one shows one of our proposed solutions
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      Problem
                    </Typography>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/CoDo/Storyboard1.png' style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>

                    <Typography variant="body1" gutterBottom mt={2}>
                      Proposed Solution
                    </Typography>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/CoDo/Storyboard2.png' style={{width:"100%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>

                    <Typography variant="h2" gutterBottom mt={2}>
                      Design, Test, Iterate
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      After going through the insights, we chose to narrow down the problems to bill and utility services as these were common and frequent activities. We created prototypes using GravitDesigner and Invision. We had 3 rounds of iterations to evaluate and improve our designs. There were a total of 25 participants. 
                    </Typography>

                    <Typography variant="h6" gutterBottom mt={2}>
                      Version 1
                    </Typography>

                    <Carousel autoPlay={true} indicators={true}>
                      {v1.map(img => 
                          <img src={img} style={{height:'50vh'}} />
                      )}
                    </Carousel>

                    <Typography variant="h6" gutterBottom mt={2}>
                      Version 2
                    </Typography>

                    <Carousel autoPlay={true} indicators={true}>
                      {v2.map(img => 
                          <img src={img} style={{height:'50vh'}} />
                      )}
                    </Carousel>

                    <Typography variant="h6" gutterBottom mt={2}>
                      Version 3
                    </Typography>

                    <Carousel autoPlay={true} indicators={true}>
                      {v3.map(img => 
                          <img src={img} style={{height:'50vh'}} />
                      )}
                    </Carousel>

                    <Typography variant="h6" gutterBottom mt={2}>
                      Final Design
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      An offline InVision version of the final design can be interacted through this link: https://adisol.github.io/codo-app/
                    </Typography>

                    <Grid container spacing={2} align='center' mt={2}>
                      <Grid item xs={0} md={1}>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <img src='/CoDo/codo_final.png' style={{width:"90%"}}></img>
                      </Grid>
                      <Grid item xs={0} md={1}>
                      </Grid>
                    </Grid>

                  </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Container>
        </React.Fragment>
    )
}