import { v4 as uuid } from "uuid";

export const projectData = [
  {
    id: uuid(),
    ytlink: "https://www.youtube.com/embed/FxAG_11PzCk?si=p_8D5eQj3e4FHnko?rel=0",
    title: "VibeVerse (Social Media Platform)",
    description: [{heading: "JWT Authentication" , brief: "To ensure the utmost security, Vibevers utilizes JSON Web Tokens (JWT) for authentication. Every visit to the platform is authenticated, guaranteeing that only authorized users gain access to their accounts and data."} , 
                  {heading: "Password Encryption with Bcrypt" , brief: "User passwords are securely stored using Bcrypt encryption, enhancing data security and confidentiality. This industry-standard encryption technique safeguards user credentials from potential threats."} ,
                  {heading: "React for Intuitive Frontend" , brief: "Vibeverse boasts an intuitive and responsive frontend developed with React. The user interface is designed with a user-centric approach, providing a visually appealing and user-friendly environment."} ,
                  {heading: "Email Verification with Nodemailer" , brief: "Security and trust are paramount. Vibeverse employs Nodemailer for email verification through OTP (One-Time Password). This ensures that users can securely access their accounts, safeguarding their data and privacy."} ,
                  {heading: "Database Powerhouse: MongoDB" , brief: "Vibeverse leverages the robust capabilities of MongoDB to efficiently store user data. This NoSQL database ensures high scalability and flexibility, making it perfect for managing the dynamic profiles and posts of our users."} ,
                  {heading: "Express for Seamless Routing" , brief: "Our platform utilizes Express.js for effortless route management. It acts as the backbone of the application, facilitating the smooth flow of data between the client and server, ensuring a seamless user experience."} , 
                  {heading: "Real-Time Engagement" , brief: "Vibeverse brings real-time interaction to the forefront, allowing users to create and like posts with immediate results. This feature enhances engagement and fosters a sense of community among users."} ,
                  {heading: "Cloudinary for Image Storage" , brief: "Cloudinary serves as the backbone for storing user-generated images and posts. This cloud-based solution ensures quick and reliable access to multimedia content."}
                ],
    stacks: ["React","MongoDB","ExpressJS", "NodeJS" , "JSX" , "API"],
    liveSite: "https://vibeverse.fun/",
    github: "https://github.com/dipeshyadav331/VibeVerse",
  },
  {
    id: uuid(),
    ytlink: "https://www.youtube.com/embed/FxAG_11PzCk?si=p_8D5eQj3e4FHnko?rel=0",
    title: "Marketplace",
    description: [{heading: "React" , brief: "My Project"} , {heading: "React" , brief: "My Project"}],
    stacks: ["React", "CSS", "API" , "MongoDB" , "Express"],
    liveSite: "",
    github : ""
  },
  // {
  //   id: uuid(),
  //   ytlink: "https://www.youtube.com/embed/FxAG_11PzCk?si=p_8D5eQj3e4FHnko?rel=0",
  //   title: "Apple E-Commerce ",
  //   description: [{heading: "React" , brief: "My Project"}],
  //   stacks: ["HTML" , "CSS" , "Javascript", "Framer Motion"],
  //   liveSite: "https://apple.vibeverse.fun/",
  //   github: "https://github.com/dipeshyadav331/Apple-website"
  // },
 
  {
    id: uuid(),
    ytlink: "https://www.youtube.com/embed/FxAG_11PzCk?si=p_8D5eQj3e4FHnko?rel=0",
    title: "Portfolio Website",
    description: [{heading: "React" , brief: "At the core of my portfolio site is React, a dynamic JavaScript library renowned for its ability to create rich, interactive user interfaces. React's component-based architecture empowers me to craft a responsive and aesthetically pleasing site that adapts seamlessly to different devices and screen sizes."} , 
                  {heading: "Framer Motion" , brief: "To captivate visitors, I harnessed the capabilities of Framer Motion, an animation library for React. This tool breathes life into my site, creating a visually engaging and memorable user experience. The subtle transitions, smooth scroll effects, and eye-catching animations not only showcase my dedication to aesthetic detail but also keep visitors engaged."},
                  {heading: "EmailJS" , brief: "One of the features of my portfolio site is the ability to send emails directly from the client side without the need for server-side processing. I achieved this using the emailjs/browser library, which simplifies the process of connecting with my audience, potential clients, or collaborators."} , 
                  {heading: "My Portfolio Snapshot" , brief: "My personal portfolio website elegantly showcases my professional journey. It features a diverse collection of projects, a comprehensive breakdown of my skills, and insights into my educational background, offering visitors a glimpse into my expertise and creative capabilities."}
                  ],
    stacks: ["React", "CSS", "JSX"],
    liveSite: "https://yadavdipesh.me/",
    github: "https://github.com/dipeshyadav331/Portfolio-website"
  },

];
