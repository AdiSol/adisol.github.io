import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import DescriptionIcon from '@material-ui/icons/Description';


export default function AnimoSched() {

    const theme = createTheme({
      typography: {
        fontFamily: 'Poppins, sans-serif',
      }
    })

    let personas = ['/AnimoSched/personas/meticulous_mike.png', '/AnimoSched/personas/delayed_denny.png', '/AnimoSched/personas/busy_bea.png', '/AnimoSched/personas/clique_cara.png', '/AnimoSched/personas/easygoing_elliot.png', '/AnimoSched/personas/efficient_ericka.png']
    let v1 = ['/AnimoSched/v1/v1_landing.png', '/AnimoSched/v1/v1_search.png', '/AnimoSched/v1/v1_preferences.png', '/AnimoSched/v1/v1_create.png', '/AnimoSched/v1/v1_save.png']
    let v2 = ['/AnimoSched/v2/v2_landing.png', '/AnimoSched/v2/v2_preference.png', '/AnimoSched/v2/v2_search.png']
    let v3 = ['/AnimoSched/v3/v3_preference.png', '/AnimoSched/v3/v3_friends.png', '/AnimoSched/v3/v3_search.png', '/AnimoSched/v3/v3_customize.png']
    let mvp = ['/AnimoSched/mvp/mvp_flowchart.png', '/AnimoSched/mvp/mvp_courses.png', '/AnimoSched/mvp/mvp_save.png', '/AnimoSched/mvp/mvp_friends1.png', '/AnimoSched/mvp/mvp_friends2.png']

    return(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Container>
            <Box mx={3}>
              <Container>
                <Box>
                  <Container>
                  <Typography variant="h1" component="h4" align="center">AnimoSched</Typography>
                  <Grid container spacing={2} align='center' mt={2}>
                    <Grid item xs={0} md={2}>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box>
                        <img src='/animosched_logo.png' style={{width: '70%', objectFit: 'cover'}}></img>
                      </Box>
                    </Grid>
                    <Grid item xs={0} md={2}>
                    </Grid>
                  </Grid>
                    
                    
                  </Container>
                  <div className='intro'>
                    <Typography variant="body1" gutterBottom mt={2}>
                      AnimoSched is a research and software engineer project. My roles in the project were <span style={{fontWeight: 'bold'}}>lead UX</span> researcher and <span style={{fontWeight: 'bold'}}>React.js frontend developer</span>. We were a team of 4 people.
                    </Typography>
                    <Typography variant="body1" gutterBottom mt={2}>
                      As a lead UX researcher, I designed all of the user tests and protocols that were followed by our team. I also handled the majority of the user interview by acting as the main moderator. I also led the compilation of insights and subsequent analyses.
                    </Typography>
                    <Typography variant="body1" gutterBottom mt={2}>
                      As the frontend developer, I implemented four of the six pages used in our website. I handled the displaying of the schedule as well as the structure of the input fields.
                    </Typography>
                    <Typography variant="body1" gutterBottom mt={2}>
                      <span style={{fontWeight: 'bold'}}>Problem</span>: Students experience various difficulties when creating schedules such as:
                      <Box ml={3}>
                        <ul>
                          <li>• Inefficiency and redundancy</li>
                          <li>• Information overload</li>
                          <li>• Proneness to errors</li>
                        </ul>
                      </Box>
                    </Typography>
                    
                    <Typography variant="body1" gutterBottom mt={2}>
                      <span style={{fontWeight: 'bold'}}>Challenge</span>: How might we design a schedule-making system that could help students improve decision-making and reduce their cognitive load?
                    </Typography>

                    <Typography variant="body1" gutterBottom mt={2}>
                      <span style={{fontWeight: 'bold'}}>Solution</span>:  Animosched is a website that allows students to semi-automatically create schedules based on their preferences and their friends’ schedules so that they can be satisfied with their schedules with less effort and stress.
                    </Typography>
                  </div>
                </Box>
              </Container>

              <Container >
                <Box my={2}>
                  <Typography variant="h4" component="h4">Research</Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                    Before starting anything, we wanted to understand whether the problem we want to address is an actual problem at all. In addition, we wanted to what exactly are the sentiments of students when it comes to schedule making.
                  </Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                  Research Goals
                    <Box ml={3}>
                      <ul>
                        <li>• How do they typically create schedules?</li>
                        <li>• Do they utilize any strategies when creating schedules?</li>
                        <li>• What do they prioritize when creating schedules?</li>
                        <li>• What is the common frustration they experience?</li>
                        <li>• What tools are they currently using for schedules?</li>
                        <li>• Why is creating a satisfactory schedule important for them?</li>
                      </ul>
                    </Box>
                  </Typography>
                  <Typography variant="h6" gutterBottom mt={2}>
                    Research Methodologies
                  </Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                    As UX Research Lead, I guided the team through a 3-step need-finding activity to collect data so that we can get answers for our research goals. 
                  </Typography>
                  <Grid container spacing={2} align='center' mt={2}>
                    <Grid item xs={0} md={1}>
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <img src='/AnimoSched/needfinding.png' style={{width:"100%"}}></img>
                    </Grid>
                    <Grid item xs={0} md={1}>
                    </Grid>
                  </Grid>

                  <Typography variant="body1" gutterBottom mt={2}>
                      <span style={{fontWeight: 'bold'}}>Observations</span>: We found that there is a problem among students when creating schedules. The schedules they create are vital when comes to keeping up with the course requirements, balancing time, and lifestyle. 
                  </Typography>
                </Box>
              </Container>

              <Container >
                <Box my={2}>
                  <Typography variant="h4" component="h4">Insights</Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                    We used affinity diagrams to organize all the data that we collected and consolidated insight from it.
                  </Typography>
                  <Grid container spacing={2} align='center' mt={2}>
                    <Grid item xs={0} md={1}>
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <img src='/AnimoSched/affinity_diagram/affinity_students.png' style={{width:"100%"}}></img>
                    </Grid>
                    <Grid item xs={0} md={1}>
                    </Grid>
                  </Grid>
                  <Typography variant="h6" gutterBottom mt={2}>
                    User Personas
                  </Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                    We found common patterns and situations and grouped them into user personas to better envision the needs and pain points of the students. We used these personas to ideate the features that would address their problems. 
                  </Typography>
                  {/* <Grid container spacing={2} align='center' mt={2}>
                    <Grid item xs={0} md={2}>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box>
                        <img src='/AnimoSched/personas/meticulous_mike.png' style={{width: '70%', objectFit: 'cover'}} onClick={() => setState({ open: true })}></img>
                      </Box>
                    </Grid>
                    <Grid item xs={0} md={2}>
                    </Grid>
                  </Grid> */}
                  <Carousel autoPlay={true} indicators={true}>
                      {personas.map(persona => 
                        <center>
                          <img src={persona} style={{height:'50vh'}} />
                        </center>
                      )}
                  </Carousel>
                  <Typography variant="h6" gutterBottom mt={2}>
                    Customer Journey Map
                  </Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                    We created customer journey maps for each main user personas so that we could envision each step they would take to complete certain tasks. This was also used to better inform our ideation phase. 
                  </Typography>
                  <Grid container spacing={2} align='center' mt={2}>
                    <Grid item xs={0} md={1}>
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <img src='/AnimoSched/customer_journey.png' style={{width:"100%"}}></img>
                    </Grid>
                    <Grid item xs={0} md={1}>
                    </Grid>
                  </Grid>

                  <Typography variant="h6" gutterBottom mt={2}>
                    Preferences
                  </Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                  Students have varying preferences when it comes to creating a schedule depending on their situation, so we compiled it into a taxonomy. This would be incorporated in the later design.
                  </Typography>
                  <Grid container spacing={2} align='center' mt={2}>
                    <Grid item xs={0} md={1}>
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <img src='/AnimoSched/prefTaxonomy.jpeg' style={{width:"100%"}}></img>
                    </Grid>
                    <Grid item xs={0} md={1}>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            
              <Container >
                <Box my={2}>
                  <Typography variant="h4" component="h4">Design, Test, Iterate</Typography>
                  <Typography variant="h6" gutterBottom mt={2}>
                    Prototypes
                  </Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                  Despite our minimal experience with design at the time, we were able to create usable mockups which proved to be valuable during the implementation stage.
                  </Typography>

                  <Typography variant="h6" gutterBottom mt={2} align='center'>
                    Version 1
                  </Typography>
                  <Carousel autoPlay={true} indicators={true}>
                      {v1.map(image => 
                        <center>
                          <img src={image} style={{height:'45vh'}} />
                        </center>
                      )}
                  </Carousel>

                  <Typography variant="h6" gutterBottom mt={2} align='center'>
                    Version 2
                  </Typography>
                  <Carousel autoPlay={true} indicators={true}>
                      {v2.map(image => 
                        <center>
                          <img src={image} style={{height:'50vh'}} />
                        </center>
                      )}
                  </Carousel>

                  <Typography variant="h6" gutterBottom mt={2} align='center'>
                    Version 3
                  </Typography>
                  <Carousel autoPlay={true} indicators={true}>
                      {v3.map(image => 
                        <center>
                          <img src={image} style={{height:'50vh'}} />
                        </center>
                      )}
                  </Carousel>

                  <Typography variant="h4" gutterBottom mt={2}>
                   Minimum Viable Product
                  </Typography>
                  <Carousel autoPlay={true} indicators={true}>
                      {mvp.map(image => 
                          <center>
                            <img src={image} style={{height:'45vh'}} />
                          </center>
                      )}
                  </Carousel>
                  
                  <Typography variant="h6" gutterBottom mt={2}>
                    Test
                  </Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                    We iterated AnimoSched several times until we were able to satisfy the target users. We finally compared AnimoSched against how students typically make their own schedules.
                  </Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                    We tested with a total of 42 students. They are composed of 7 groups each, with each group having individual group tasks
                  </Typography>
                  
                  <Typography variant="body1" gutterBottom mt={2}>
                  We used the following metrics to evaluate mental effort, stress, emotions, and usability:
                      <Box ml={3}>
                        <ul>
                          <li style={{marginBottom: '10px'}}>• <a className='link link--icon' href='https://www.ueq-online.org/'>User Experience Questionaire (UEQ)</a></li>
                          <li style={{marginBottom: '10px'}}>• <a className='link link--icon' href='https://humansystems.arc.nasa.gov/groups/tlx/'>NASA Task Load Index (NASA-TLX)</a></li>
                          <li style={{marginBottom: '10px'}}>• <a className='link link--icon' href='https://doi.apa.org/doiLanding?doi=10.1037%2F0022-3514.54.6.1063'>Positive and Negative Affect Schedule (PANAS)</a></li>
                          <li style={{marginBottom: '10px'}}>• <a className='link link--icon' href='https://measuringu.com/papers/Sauro_Dumas_CHI2009.pdf'>Subjective Mental Effort Questionaire (SMEQ)</a></li>
                          <li style={{marginBottom: '10px'}}>• Survey Questions</li>
                        </ul>
                      </Box>
                  </Typography>


                </Box>
              </Container>

              <Container >
                <Box my={2}>
                  <Typography variant="h4" component="h4">Conclusion</Typography>
                  <Typography variant="body1" gutterBottom mt={2}>
                    Overall, AnimoSched showed significant improvements in decision-making, cognitive load, stress, and the satisfaction of students with schedule making. A research paper was written for this project and was published in CHI 2021, a top-tier HCI conference. A more detailed discussion can be found in the paper.
                    <a
                    href='https://comet.dlsu.edu.ph/files/2021manzano_sat_scheduler_chi.pdf'
                    aria-label='paper'
                    className='link link--icon'
                    >
                      <DescriptionIcon/>
                    </a>
                  </Typography>
                  

                </Box>
              </Container>
            
            
            </Box>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    )
   
};

