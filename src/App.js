import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { useEffect, useState } from "react";
import { WbSunny, Brightness2 } from "@material-ui/icons";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/Error/Error";
import Main from "./pages/Main";
import Footer from "../src/components/footer/Footer"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import "../src/components/footer/Footer";

function App() {
  // Toggle Theme Function
  const [theme, setTheme] = useState(
    localStorage.getItem("themeColor")
      ? localStorage.getItem("themeColor").toString()
      : "dark"
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("themeColor", theme);
  }, [theme]);

  return (
    <div className="App" id={theme}>
      {/* <NavBar onClick={toggleTheme}>
        {theme === "light" ? <Brightness2 /> : <Brightness2 />}
      </NavBar> */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
 
      <ScrollToTop />
      <footer className="flex1 column footer">
        <small>
          Designed & Built by <span className="cyan">Dipesh Yadav</span> 
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
      {/* <Footer />
       */}
       
    </div>
  );
}

export default App;
