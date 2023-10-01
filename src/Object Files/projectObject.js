import { v4 as uuid } from "uuid";

export const projectData = [
  {
    id: uuid(),
    title: "MarketPlace",
    image: "./asstes/agency1.png",
    description: "I am currently working on this full stack project",
    stacks: ["React", "CSS", "API" , "MongoDB" , "Express"],
    liveSite: "",
    github : ""
  },
  {
    id: uuid(),
    title: "Vibe Verse",
    image: "./asstes/event.png",
    description: "My major full stack project , social media made by me. Create an account on vibeverse to experience the world of vibeverse",
    stacks: ["React","MongoDB","ExpressJS", "NodeJS" , "JSX" , "API"],
    liveSite: "https://vibeverse.fun/",
    github: "https://github.com/dipeshyadav331/VibeVerse",
  },
  {
    id: uuid(),
    title: "Apple E-Commerce ",
    image: "./asstes/apple.png",
    description: "Discover the Apple of Online Shopping.",
    stacks: ["HTML" , "CSS" , "Javascript", "Framer Motion"],
    liveSite: "https://apple.vibeverse.fun/",
    github: "https://github.com/dipeshyadav331/Apple-website"
  },
 
  {
    id: uuid(),
    title: "Portfolio Website",
    image: "./asstes/zeestudio.png",
    description: "I created my portfolio website to showcase my skills and achievments",
    stacks: ["React", "CSS", "JSX"],
    liveSite: "https://yadavdipesh.me/",
    github: "https://github.com/dipeshyadav331/Portfolio-website"
  },

];