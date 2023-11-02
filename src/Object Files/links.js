import { v4 as uuid } from "uuid";

const myLinks = [
  {
    id: uuid(),
    links: "tel:9461675758",
    icons: "fa-solid fa-phone class-purple",
    label: "Call me on my cellphone number ",
    text: "+91 9461675758"
  },
  {
    id: uuid(),
    links: "mailto:yadavdipesh331@gmail.com",
    icons: "fa-solid fa-envelope class-purple",
    label: "Send me an email ",
    text: "yadavdipesh331@gmail.com"
  },
  {
    id: uuid(),
    links: "https://www.linkedin.com/in/yadav-dipesh/",
    icons: "fa-brands fa-linkedin class-purple",
    label: "connect with me on linkedin ",
    text: "LinkedIn"
  },
  {
    id: uuid(),
    links: "https://github.com/dipeshyadav331",
    icons: "fa-brands fa-github class-purple",
    label: "connect with me on github ",
    text: "Github"
  },
  {
    id: uuid(),
    links: "https://x.com/yadavdipesh331",
    icons: "fa-brands fa-x-twitter" ,
    label: "connect with me on twitter ",
    text: "X"
  },
];

export default myLinks;