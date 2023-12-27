import "./navBar.css";
import { useState } from "react";
import Scrollspy from "react-scrollspy";
import navData from "../../Object Files/nav";
import dp from "../../assets/WhatsApp Image 2023-10-23 at 1.43.52 PM.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <nav className="nav-cont">
      <a href="/" className="logo">
        <img src={dp} alt="dP" className=" circle-card-cont logo_img" />
      </a>

      <>
        <Scrollspy
          items={["home", "about", "project", "skill", "education", "contact"]}
          currentClassName="active"
          className={`links-container ${isOpen && "show-tab"} `}
          onClick={handleIsOpen}
        >
          {navData.map((items) => {
            return (
              <li key={items.id}>
                <a
                  href={`${items.link}`}
                  className="flex links"
                  onClick={handleIsOpen}
                >
                  <i className={items.icon}></i>
                  {items.description}
                </a>
              </li>
            );
          })}
        </Scrollspy>
      </>

      <div
        className={`tab-icon ${isOpen && "dark-tab-icon"} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="fa-solid fa-x x"></i>
        ) : (
          <i className="fa-solid fa-bars "></i>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
