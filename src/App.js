import "./App.css"; 
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import Lenis from "@studio-freight/lenis";

function App() {

  //creating problems with scroll offset
  // const lenis = new Lenis();

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
 
  return (
    <>
      <div className="App" id={"dark"}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

        <ScrollToTop />
        <footer
          className="flex1 column footer"
          style={{ backgroundColor: "white" }}
        >
          <small style={{ color: "black" , marginLeft : "5px"}}> Best viewed on desktop </small>
          <small style={{ color: "black" , marginLeft : "5px"}}>
            Designed & Built by <span className="self_name">Dipesh Yadav</span>
            <span className="alt-text TNP"></span>{" "}
            <div className="giticon">
              <a
                href="https://www.linkedin.com/in/yadav-dipesh/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin className="cursor-pointer" />
              </a>
              <a
                href="https://github.com/dipeshyadav331"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub className="cursor-pointer" />
              </a>
            </div>
          </small>
        </footer>
      </div>
    </>
  );
}

export default App;
