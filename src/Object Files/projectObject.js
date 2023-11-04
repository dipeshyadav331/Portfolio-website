import { v4 as uuid } from "uuid";

export const projectData = [
  {
    id: uuid(),
    ytlink: "https://www.youtube-nocookie.com/embed/5A9cxIOi5yc?si=XBXUP_lwGzM9c9Dv",
    title: "VibeVerse (Social Media Platform) - Full Stack Project",
    description: [{heading: "JWT Authentication" , brief: "To ensure the utmost security, Vibevers utilizes JSON Web Tokens (JWT) for authentication. Every visit to the platform is authenticated, guaranteeing that only authorized users gain access to their accounts and data."} , 
                  {heading: "Password Encryption with Bcrypt" , brief: "User passwords are securely stored using Bcrypt encryption, enhancing data security and confidentiality. This industry-standard encryption technique safeguards user credentials from potential threats."} ,
                  {heading: "React for Intuitive Frontend" , brief: "Vibeverse boasts an intuitive frontend developed with React. The user interface is designed with a user-centric approach, providing a visually appealing and user-friendly environment."} ,
                  {heading: "Email Verification with Nodemailer" , brief: "Security and trust are paramount. Vibeverse employs Nodemailer for email verification through OTP (One-Time Password). This ensures that users can securely access their accounts, safeguarding their data and privacy."} ,
                  {heading: "Database: MongoDB" , brief: "Vibeverse leverages the robust capabilities of MongoDB to efficiently store user data. This NoSQL database ensures high scalability and flexibility, making it perfect for managing the dynamic profiles and posts of our users."} ,
                  {heading: "Express for Seamless Routing" , brief: "Our platform utilizes Express.js for effortless route management. It acts as the backbone of the application, facilitating the smooth flow of data between the client and server, ensuring a seamless user experience."} , 
                  {heading: "Real-Time Engagement" , brief: "Vibeverse brings real-time interaction to the forefront, allowing users to create and like posts with immediate results. This feature enhances engagement and fosters a sense of community among users."} ,
                  {heading: "Cloudinary for Image Storage" , brief: "Cloudinary serves as the backbone for storing user-generated images and posts. This cloud-based solution ensures quick and reliable access to multimedia content."}
                ],
    stacks: ["React","MongoDB","ExpressJS", "NodeJS" , "JSX" , "API"],
    liveSite: "https://sea-turtle-app-briqw.ondigitalocean.app/",
    github: "https://github.com/dipeshyadav331/VibeVerse",
  },
  {
    id: uuid(),
    ytlink: "https://www.youtube.com/embed/fUXonYjtxt8?si=asAnvTyUIrnzFWZE",
    title: "Marketify (Online Shopping Platform) - Full Stack Project",
    description: [{heading: "Backend Management using Strapi" , brief: "Used Strapi, a powerful content management system, to build a robust backend. This enabled me to easily add, update, and manage product listings with images, descriptions, and pricing."} , 
                  {heading: "Secure Payment Integration using Stripe" , brief: "Integrated Stripe, a trusted payment gateway, to ensure secure and efficient payment processing. Users can confidently add items to their cart and complete transactions with the assurance of a safe payment platform."} , 
                  {heading: "React" , brief : "Developed the frontend using React, a dynamic JavaScript library. This choice allowed for a highly responsive and user-friendly shopping experience, adapting seamlessly to various devices and screen sizes."}  ,
                  {heading: "Efficient State Management using Redux" , brief : "Employed Redux, a state management library, to effectively manage application data. It ensures a smooth flow of information throughout the app, enhancing user interaction and experience."}  ,
                  {heading: "Simplified API Calls" , brief : "Utilized 'createAsyncThunk' from Redux Toolkit in combination with Axios to make API calls to the backend. This approach streamlined communication between the frontend and backend, resulting in a more user-friendly and efficient experience."}  , 
                  {heading: "Hosting" , brief : "Hosted the backend and database on Digital Ocean, a reputable cloud infrastructure provider. This ensures scalability, performance, and reliability, essential for the seamless operation of the application."}  
                ],
    stacks: ["React" , "API" , "Strapi" , "Redux" , "SASS" , "Stripe" , "Axios"],
    liveSite: "https://marketplace-mw28.onrender.com/",
    github : "https://github.com/dipeshyadav331/marketplace-frontend"
  },
  {
    id: uuid(),
    ytlink: "https://www.youtube.com/embed/G8oa8VlBf60",
    title: "Portfolio Website",
    description: [{heading: "React" , brief: "At the core of my portfolio site is React, a dynamic JavaScript library renowned for its ability to create rich, interactive user interfaces. React's component-based architecture empowers me to craft a responsive and aesthetically pleasing site that adapts seamlessly to different devices and screen sizes."} , 
                  {heading: "Framer Motion" , brief: "To captivate visitors, I harnessed the capabilities of Framer Motion, an animation library for React. This tool breathes life into my site, creating a visually engaging and memorable user experience. The subtle transitions, smooth scroll effects, and eye-catching animations not only showcase my dedication to aesthetic detail but also keep visitors engaged."},
                  {heading: "EmailJS" , brief: "One of the features of my portfolio site is the ability to send emails directly from the client side without the need for server-side processing. I achieved this using the emailjs/browser library, which simplifies the process of connecting with my audience, potential clients, or collaborators."} , 
                  {heading: "My Portfolio Snapshot" , brief: "My personal portfolio website elegantly showcases my journey. It features a diverse collection of projects, a comprehensive breakdown of my skills, and insights into my educational background, offering visitors a glimpse into my expertise and creative capabilities."}
                  ],
    stacks: ["React", "CSS", "JSX" , "Framer-motion"],
    liveSite: "https://yadavdipesh.live/",
    github: "https://github.com/dipeshyadav331/Portfolio-website"
  },

];
