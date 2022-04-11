const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://adriennesoliven.com',
  title: 'AS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Adrienne Soliven',
  role: ['User Researcher', 'Web Developer', 'Aspiring UX Designer'],
  description:
    'Hello world!',
  resume: '/soliven_resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/adrienne-soliven-7725831aa/',
    github: 'https://github.com/adisol',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AnimoSched',
    description:
      'A web application aimed to help students create their class schedules.',
    stack: ['UX Research', 'Frontend Dev', 'UX Design'],
    // paper: 'https://www.cetjournal.it/index.php/cet/article/view/CET2188092',
    // livePreview: 'https://dlsudatasci.github.io/covidapp',
    image: './animosched_logo.png',
    link: '/AnimoSched',
  },
  
  {
    name: 'CoDo',
    description:
      'CoDo is a condominium/dormitory companion app project that was done through InVision.',
    stack: ['UX Research', 'UX Design'],
    image: './codo_logo.png',
    link: '/CoDo',
  },
  
  {
    name: 'Akads PH',
    description:
      'Akads is an all-in-one online platform that helps parents find tutors for their kids.',
    stack: ['Frontend Dev', 'UX Research'],
    youtubeVid: 'https://www.youtube.com/watch?v=AZuWV_sB53k',
    livePreview: 'https://akadsph.com',
    image: './akads_logo.png',
    link: '/AkadsPH',
  },
  {
    name: 'TranspoDesire 2.0',
    description:
      'Transport desirability index visualization web application to aid in the assessment and planning of transport systems in the Philippines.',
    stack: ['Frontend Dev'],
    image: './transpodesire_logo.png',
    link: '/TranspoDesire',
  },
  
]

const programming_skills = [
  'Python',
  'C++',
  'React.js',
  'Django',
  'Flask',
  'Node.js',
  'LaTeX',
  'Java',
  'Bash Scripting and Vim',
]

const technical_skills = [
  'AWS Cloud',
  'Git',
  'Debian-based Linux Systems',
  'Machine Learning',
  'Computer Vision',
  'Pytorch',
  'Scipy',
  'Pandas',
  'Numpy',
  'BeautifulSoup',
  'Matplotlib',
  'Seaborn',
  'Dvorak Keyboard Layout',
  'Microsoft Windows Systems'
]

const hobbies = [
  'Proficient in playing an acoustic or electric guitar',
  'Adept in blitz and bullet chess',
  'Reading psychology books',
  'Learning languages and uncommon skills'
]



const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'adriennesoliven@gmail.com'
}

export { header, about, projects, programming_skills, technical_skills, hobbies, contact }
