(this.webpackJsonpadrienne_portfolio=this.webpackJsonpadrienne_portfolio||[]).push([[0],{155:function(e,t,n){},159:function(e,t,n){},165:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},182:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var s=n(38),i=n(11),a=n(0),c=n(1),r=Object(a.createContext)(),o=function(e){var t=e.children,n=Object(a.useState)("light"),s=Object(i.a)(n,2),o=s[0],d=s[1];Object(a.useEffect)((function(){var e="dark"===localStorage.getItem("themeName");d(e?"dark":"light")}),[]);return Object(c.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),d(e)}}],children:t})},d="Josh Manzano",l=[{name:"AnimoSched",description:"A web application aimed to help students create their class schedules.",stack:["UX Research","Frontend Dev","UX Design"],image:"./animosched_logo.png",link:"/AnimoSched"},{name:"CoDo",description:"CoDo is a condominium/dormitory companion app project that was done through InVision.",stack:["UX Research","UX Design"],image:"./codo_logo.png",link:"/CoDo"},{name:"Akads PH",description:"Akads is an all-in-one online platform that helps parents find tutors for their kids.",stack:["Frontend Dev","UX Research"],youtubeVid:"https://www.youtube.com/watch?v=AZuWV_sB53k",livePreview:"https://akadsph.com",image:"./akads_logo.png",link:"/AkadsPH"},{name:"TranspoDesire 2.0",description:"Transport desirability index visualization web application to aid in the assessment and planning of transport systems in the Philippines.",stack:["Frontend Dev"],image:"./transpodesire_logo.png",link:"/TranspoDesire"}],j="adriennesoliven@gmail.com",h=n(132),m=n.n(h),b=n(131),x=n.n(b),g=n(134),u=n.n(g),O=n(133),p=n.n(O),v=(n(155),function(){var e=Object(a.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,s=t.toggleTheme,o=Object(a.useState)(!1),d=Object(i.a)(o,2),h=d[0],b=d[1],g=function(){return b(!h)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[l.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"/#projects",onClick:g,className:"link link--nav",children:"Projects"})}):null,j?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"/#contact",onClick:g,className:"link link--nav",children:"Contact"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:s,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(c.jsx)(x.a,{}):Object(c.jsx)(m.a,{})}),Object(c.jsx)("button",{type:"button",onClick:g,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(c.jsx)(p.a,{}):Object(c.jsx)(u.a,{})})]})}),f=(n(159),function(){return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{}),Object(c.jsx)(v,{})]})});n(141);n(160),n(165);var y=function(){var e=d;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsx)("h1",{children:"Hi there, I'm Adrienne!\ud83d\udc4b"}),Object(c.jsx)("h2",{className:"about__role",children:"UX Researcher | Frontend Developer | Aspiring UX Designer"})]})},w=n(55),k=n.n(w),_=(n(167),n(83)),A=function(e){var t=e.project;return Object(c.jsx)(_.b,{to:t.link,children:Object(c.jsxs)("div",{className:"project",onClick:function(){return console.log("going to its page")},children:[Object(c.jsx)("img",{src:t.image,style:{width:"80px"}}),Object(c.jsxs)("div",{className:"projectDetails",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},k()())}))})]})]})})},B=(n(168),function(){return l.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projects"}),Object(c.jsx)("div",{className:"projects__grid",children:l.map((function(e){return Object(c.jsx)(A,{project:e},k()())}))})]}):null}),S=(n(169),n(135)),D=n.n(S),C=(n(170),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?s(!0):s(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(D.a,{fontSize:"large"})})}):null}),I=(n(171),function(){return j?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("h2",{className:"section__title",children:"Contact"}),Object(c.jsx)("a",{href:"mailto:".concat(j),children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),T=(n(172),function(){return Object(c.jsx)("footer",{className:"footer"})}),N=(n(173),function(){return Object(c.jsxs)("main",{children:[Object(c.jsx)(y,{}),Object(c.jsx)(B,{}),Object(c.jsx)(I,{})]})}),P=n(129),W=n(238),U=n(128),F=n(130),X=n(34),H=n.n(X);function R(){return Object(c.jsx)(a.Fragment,{children:Object(c.jsx)(P.a,{children:Object(c.jsxs)(W.a,{mx:3,children:[Object(c.jsx)(P.a,{children:Object(c.jsxs)(W.a,{children:[Object(c.jsxs)(P.a,{children:[Object(c.jsx)(U.a,{variant:"h1",component:"h2",align:"center",children:"AnimoSched"}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:2}),Object(c.jsx)(F.a,{item:!0,xs:12,md:8,children:Object(c.jsx)(W.a,{children:Object(c.jsx)("img",{src:"/animosched_logo.png",style:{width:"70%",objectFit:"cover"}})})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:2})]})]}),Object(c.jsxs)("div",{className:"intro",children:[Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"AnimoSched is a research and software engineer project. My roles in the project were lead UX researcher and React.js frontend developer. We were a team of 4 people."}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"As a lead UX researcher, I designed all of the user tests and protocols that were followed by our team. I also handled the majority of the user interview by acting as the main moderator. I also led the compilation of insights and subsequent analyses."}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"As the frontend developer, I implemented four of the six pages used in our website. I handled the displaying of the schedule as well as the structure of the input fields."}),Object(c.jsxs)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:[Object(c.jsx)("span",{style:{fontWeight:"bold"},children:"Problem"}),": Students experience various difficulties when creating schedules such as:",Object(c.jsx)(W.a,{ml:3,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"\u2022 Inefficiency and redundancy"}),Object(c.jsx)("li",{children:"\u2022 Information overload"}),Object(c.jsx)("li",{children:"\u2022 Proneness to errors"})]})})]}),Object(c.jsxs)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:[Object(c.jsx)("span",{style:{fontWeight:"bold"},children:"Challenge"}),": How might we design a schedule-making system that could help students improve decision-making and reduce their cognitive load?"]}),Object(c.jsxs)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:[Object(c.jsx)("span",{style:{fontWeight:"bold"},children:"Solution"}),":  Animosched is a website that allows students to semi-automatically create schedules based on their preferences and their friends\u2019 schedules so that they can be satisfied with their schedules with less effort and stress."]})]})]})}),Object(c.jsx)(P.a,{children:Object(c.jsxs)(W.a,{my:2,children:[Object(c.jsx)(U.a,{variant:"h2",component:"h2",children:"Research"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"Before starting anything, we wanted to understand whether the problem we want to address is an actual problem at all. In addition, we wanted to what exactly are the sentiments of students when it comes to schedule making."}),Object(c.jsxs)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:["Research Goals",Object(c.jsx)(W.a,{ml:3,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"\u2022 How do they typically create schedules?"}),Object(c.jsx)("li",{children:"\u2022 Do they utilize any strategies when creating schedules?"}),Object(c.jsx)("li",{children:"\u2022 What do they prioritize when creating schedules?"}),Object(c.jsx)("li",{children:"\u2022 What is the common frustration they experience?"}),Object(c.jsx)("li",{children:"\u2022 What tools are they currently using for schedules?"}),Object(c.jsx)("li",{children:"\u2022 Why is creating a satisfactory schedule important for them?"})]})})]}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Research Methodologies"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"As UX Research Lead, I guided the team through a 3-step need-finding activity to collect data so that we can get answers for our research goals."}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/AnimoSched/needfinding.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsxs)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:[Object(c.jsx)("span",{style:{fontWeight:"bold"},children:"Observations"}),": We found that there is a problem among students when creating schedules. The schedules they create are vital when comes to keeping up with the course requirements, balancing time, and lifestyle."]})]})}),Object(c.jsx)(P.a,{children:Object(c.jsxs)(W.a,{my:2,children:[Object(c.jsx)(U.a,{variant:"h2",component:"h2",children:"Insights"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"We used affinity diagrams to organize all the data that we collected and consolidated insight from it."}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/AnimoSched/affinity_diagram/affinity_students.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"User Personas"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"We found common patterns and situations and grouped them into user personas to better envision the needs and pain points of the students. We used these personas to ideate the features that would address their problems."}),Object(c.jsx)(H.a,{autoPlay:!0,indicators:!0,children:["/AnimoSched/personas/meticulous_mike.png","/AnimoSched/personas/delayed_denny.png","/AnimoSched/personas/busy_bea.png","/AnimoSched/personas/clique_cara.png","/AnimoSched/personas/easygoing_elliot.png","/AnimoSched/personas/efficient_ericka.png"].map((function(e){return Object(c.jsx)("img",{src:e,style:{height:"50vh"}})}))}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Customer Journey Map"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"We created customer journey maps for each main user personas so that we could envision each step they would take to complete certain tasks. This was also used to better inform our ideation phase."}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/AnimoSched/customer_journey.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Preferences"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"Students have varying preferences when it comes to creating a schedule depending on their situation, so we compiled it into a taxonomy. This would be incorporated in the later design."}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/AnimoSched/prefTaxonomy.jpeg",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]})]})}),Object(c.jsx)(P.a,{children:Object(c.jsxs)(W.a,{my:2,children:[Object(c.jsx)(U.a,{variant:"h2",component:"h2",children:"Design, Test, Iterate"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"Despite our minimal experience with design at the time, we were able to create usable mockups which proved to be valuable during the implementation stage."}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Version 1"}),Object(c.jsx)(H.a,{autoPlay:!0,indicators:!0,children:["/AnimoSched/v1/v1_landing.png","/AnimoSched/v1/v1_search.png","/AnimoSched/v1/v1_preferences.png","/AnimoSched/v1/v1_create.png","/AnimoSched/v1/v1_save.png"].map((function(e){return Object(c.jsx)("img",{src:e,style:{height:"45vh"}})}))}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Version 2"}),Object(c.jsx)(H.a,{autoPlay:!0,indicators:!0,children:["/AnimoSched/v2/v2_landing.png","/AnimoSched/v2/v2_preference.png","/AnimoSched/v2/v2_search.png"].map((function(e){return Object(c.jsx)("img",{src:e,style:{height:"50vh"}})}))}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Version 3"}),Object(c.jsx)(H.a,{autoPlay:!0,indicators:!0,children:["/AnimoSched/v3/v3_preference.png","/AnimoSched/v3/v3_friends.png","/AnimoSched/v3/v3_search.png","/AnimoSched/v3/v3_customize.png"].map((function(e){return Object(c.jsx)("img",{src:e,style:{height:"50vh"}})}))}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Minimum Viable Product"}),Object(c.jsx)(H.a,{autoPlay:!0,indicators:!0,children:["/AnimoSched/mvp/mvp_flowchart.png","/AnimoSched/mvp/mvp_courses.png","/AnimoSched/mvp/mvp_save.png","/AnimoSched/mvp/mvp_friends1.png","/AnimoSched/mvp/mvp_friends2.png"].map((function(e){return Object(c.jsx)("img",{src:e,style:{height:"45vh"}})}))}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Test"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"We iterated AnimoSched several times until we were able to satisfy the target users. We finally compared AnimoSched against how students typically make their own schedules."}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"We tested with a total of 42 students. They are composed of 7 groups each, with each group having individual group tasks"}),Object(c.jsxs)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:["We used the following metrics to evaluate mental effort, stress, emotions, and usability:",Object(c.jsx)(W.a,{ml:3,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"\u2022 User Experience Questionaire (UEQ)"}),Object(c.jsx)("li",{children:"\u2022 NASA TLX"}),Object(c.jsx)("li",{children:"\u2022 Positive and Negative Affect Schedule (PANAS)"}),Object(c.jsx)("li",{children:"\u2022 Subjective Mental Effort Questionaire (SMEQ)"}),Object(c.jsx)("li",{children:"\u2022 Survey Questions"})]})})]})]})}),Object(c.jsx)(P.a,{children:Object(c.jsxs)(W.a,{my:2,children:[Object(c.jsx)(U.a,{variant:"h2",component:"h2",children:"Conclusion"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"Overall, AnimoSched showed significant improvements in decision-making, cognitive load, stress, and the satisfaction of students with schedule making. A research paper was written for this project and was published in CHI 2021, a top-tier HCI conference. A more detailed discussion can be found in the paper."}),Object(c.jsx)("div",{children:"https://comet.dlsu.edu.ph/files/2021manzano_sat_scheduler_chi.pdf"})]})})]})})})}function q(){return Object(c.jsx)(a.Fragment,{children:Object(c.jsx)(P.a,{children:Object(c.jsx)(W.a,{mx:3,children:Object(c.jsx)(P.a,{children:Object(c.jsxs)(W.a,{children:[Object(c.jsxs)(P.a,{children:[Object(c.jsx)(U.a,{variant:"h1",component:"h2",align:"center",children:"AkadsPH"}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:2}),Object(c.jsx)(F.a,{item:!0,xs:12,md:8,children:Object(c.jsx)(W.a,{children:Object(c.jsx)("img",{src:"/akads_logo.png",style:{width:"70%",objectFit:"cover"}})})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:2})]})]}),Object(c.jsxs)(W.a,{children:[Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"AkadsPH is an online tutor matching platform. I worked as a React.js frontend developer and the lead UX researcher in this project. We were a team of 4 developers. The website can be accessed through this link:  https://www.akadsph.com/ ."}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"As a lead UX researcher, I designed and conducted all the usability tests the stakeholders needed. The compilation of insights and subsequent analyses was done by me."}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"As the frontend developer, I implemented the landing page, the tutor payouts, the tutor requests form, the tutor application form, the credits store, and all the modal interactions."}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"The website that was created was based on just a few designs their designer presented to us in Figma. We improvised the designs of other pages that were not specifically indicated in the mockup. In addition to those, we provided recommendations that would make interactions more intuitive."}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/Akads/figma.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Usability Tests"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"I planned out the tasks for both tutors and parents to do on the AkadsPH. I moderated for all the usability tests."}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"For quantitative evaluation, we used the System Usability Score (SUS) and time task completion to measure the usability of the product and how long it would take to complete."}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/Akads/akads_sus.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"For qualitative, we take note of specific quotes, actions, and reactions of the participants."}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"After compiling the observations, I consolidated the positive and negative remarks and provided recommendations with varying severities to the stakeholders."}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/Akads/landing1.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/Akads/landing2.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]})]})]})})})})})}function V(){var e=["/TranspoDesire/create_survey.png","/TranspoDesire/preview_data.png","/TranspoDesire/equation.png"];return Object(c.jsx)(a.Fragment,{children:Object(c.jsx)(P.a,{children:Object(c.jsx)(W.a,{mx:3,children:Object(c.jsx)(P.a,{children:Object(c.jsxs)(W.a,{children:[Object(c.jsx)(P.a,{children:Object(c.jsx)(U.a,{variant:"h1",component:"h2",align:"center",children:"TranspoDesire"})}),Object(c.jsxs)(W.a,{children:[Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"TranspoDesire is a government project that aims to measure the desirability of certain routes in the Philippines with accompanying data visualizations to better aid local government units create roads and policies, despite not being data scientists themselves. I work as a React.js frontend developer in a team of two. The project is currently ongoing."}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"As the frontend developer, I implemented the login page and the admin page that the engineers will be using."}),Object(c.jsx)(U.a,{variant:"h2",gutterBottom:!0,mt:2,children:"The Tool"}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/TranspoDesire/tool1.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/TranspoDesire/tool2.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsx)(U.a,{variant:"h2",gutterBottom:!0,mt:2,children:"Admin Page"}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Mockups"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"I have made rough mock-ups of the admin page through Figma to help with implementation."}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:e[0],style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:e[1],style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:e[2],style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsx)(U.a,{variant:"h2",gutterBottom:!0,mt:2,children:"Samples of the Admin Page"}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/TranspoDesire/landing.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/TranspoDesire/users.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]})]})]})})})})})}function E(){return Object(c.jsx)(a.Fragment,{children:Object(c.jsx)(P.a,{children:Object(c.jsx)(W.a,{mx:3,children:Object(c.jsx)(P.a,{children:Object(c.jsxs)(W.a,{children:[Object(c.jsxs)(P.a,{children:[Object(c.jsx)(U.a,{variant:"h1",component:"h2",align:"center",children:"CoDo"}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:2}),Object(c.jsx)(F.a,{item:!0,xs:12,md:8,children:Object(c.jsx)(W.a,{children:Object(c.jsx)("img",{src:"/codo_logo.png",style:{width:"70%",objectFit:"cover"}})})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:2})]})]}),Object(c.jsxs)(W.a,{children:[Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"CoDo is a personal project that we worked on as a team of four"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"As a UX researcher, I collaborated with creating need-finding questions and outlined the usability tests. In addition, I specified the metrics used during the usability tests."}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"As the UX designer, I designed the bill information, the payment options, the payment screen, and the split bill screen."}),Object(c.jsxs)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:[Object(c.jsx)("span",{style:{fontWeight:"bold"},children:"Problem"}),": There are several inconveniences when living in a condo such as:",Object(c.jsx)(W.a,{ml:3,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"\u2022 Losing track of late bills"}),Object(c.jsx)("li",{children:"\u2022 Making roommates cooperate on the shared bills"}),Object(c.jsx)("li",{children:"\u2022 General upkeep"})]})})]}),Object(c.jsxs)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:[Object(c.jsx)("span",{style:{fontWeight:"bold"},children:"Challenge"}),": How might we improve the efficiency of responsibilities of condo residents?"]}),Object(c.jsxs)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:[Object(c.jsx)("span",{style:{fontWeight:"bold"},children:"Solution"}),": CoDo is a condominium/dormitory companion app mainly for students to automate certain activities with a click of a button."]}),Object(c.jsxs)(W.a,{my:2,children:[Object(c.jsx)(U.a,{variant:"h2",component:"h2",children:"Research"}),Object(c.jsxs)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:["We interviewed 6 condo residents that were composed of students. Their problems varied greatly. These include:",Object(c.jsx)(W.a,{ml:3,children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"\u2022 Missing home-cooked meals"}),Object(c.jsx)("li",{children:"\u2022 Bothersome roommates and neighbors"}),Object(c.jsx)("li",{children:"\u2022 Late bill fees"}),Object(c.jsx)("li",{children:"\u2022 Lack of security"}),Object(c.jsx)("li",{children:"\u2022 Crowded elevators"}),Object(c.jsx)("li",{children:"\u2022 Poor laundry services"}),Object(c.jsx)("li",{children:"\u2022 Arguing between roommates on whose turn it is to pay the bill"}),Object(c.jsx)("li",{children:"\u2022 Poor internet connection"})]})})]}),Object(c.jsx)(U.a,{variant:"h2",gutterBottom:!0,mt:2,children:"Storyboards"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"Some of the sample storyboards I made were based on some of the problems of the users. The first storyboard shows the context of the problem and the second one shows one of our proposed solutions"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"Problem"}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/CoDo/Storyboard1.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"Proposed Solution"}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/CoDo/Storyboard2.png",style:{width:"100%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]}),Object(c.jsx)(U.a,{variant:"h2",gutterBottom:!0,mt:2,children:"Design, Test, Iterate"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"After going through the insights, we chose to narrow down the problems to bill and utility services as these were common and frequent activities. We created prototypes using GravitDesigner and Invision. We had 3 rounds of iterations to evaluate and improve our designs. There were a total of 25 participants."}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Version 1"}),Object(c.jsx)(H.a,{autoPlay:!0,indicators:!0,children:["/CoDo/v1_1.png","/CoDo/v1_2.png","/CoDo/v1_3.png","/CoDo/v1_4.png"].map((function(e){return Object(c.jsx)("img",{src:e,style:{height:"50vh"}})}))}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Version 2"}),Object(c.jsx)(H.a,{autoPlay:!0,indicators:!0,children:["/CoDo/v2_1.png","/CoDo/v2_2.png"].map((function(e){return Object(c.jsx)("img",{src:e,style:{height:"50vh"}})}))}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Version 3"}),Object(c.jsx)(H.a,{autoPlay:!0,indicators:!0,children:["/CoDo/v3_1.png","/CoDo/v3_2.png","/CoDo/v3_3.png","/CoDo/v3_4.png"].map((function(e){return Object(c.jsx)("img",{src:e,style:{height:"50vh"}})}))}),Object(c.jsx)(U.a,{variant:"h6",gutterBottom:!0,mt:2,children:"Final Design"}),Object(c.jsx)(U.a,{variant:"body1",gutterBottom:!0,mt:2,children:"An offline InVision version of the final design can be interacted through this link: https://adisol.github.io/codo-app/"}),Object(c.jsxs)(F.a,{container:!0,spacing:2,align:"center",mt:2,children:[Object(c.jsx)(F.a,{item:!0,xs:0,md:1}),Object(c.jsx)(F.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("img",{src:"/CoDo/codo_final.png",style:{width:"90%"}})}),Object(c.jsx)(F.a,{item:!0,xs:0,md:1})]})]})]})]})})})})})}var M=n(19),z=function(){var e=Object(a.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(c.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(c.jsx)(f,{}),Object(c.jsx)(_.a,{children:Object(c.jsxs)(M.c,{children:[Object(c.jsx)(M.a,{path:"/",element:Object(c.jsx)(N,{})}),Object(c.jsx)(M.a,{path:"/AnimoSched",element:Object(c.jsx)(R,{})}),Object(c.jsx)(M.a,{path:"/AkadsPH",element:Object(c.jsx)(q,{})}),Object(c.jsx)(M.a,{path:"/TranspoDesire",element:Object(c.jsx)(V,{})}),Object(c.jsx)(M.a,{path:"/CoDo",element:Object(c.jsx)(E,{})})]})}),Object(c.jsx)(C,{}),Object(c.jsx)(T,{})]})};n(182);Object(s.render)(Object(c.jsx)(o,{children:Object(c.jsx)(z,{})}),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.33e0431a.chunk.js.map