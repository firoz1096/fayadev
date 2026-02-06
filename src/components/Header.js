import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  // FiMail,
  // FiPhone,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();

  const closeSidebar = () => setIsOpen(false);

  /* ===== Sticky header ===== */
  useEffect(() => {
    // const handleScroll = () => {
    //   if (window.innerWidth >= 992) {
    //     setIsSticky(window.scrollY > 80);
    //   } else {
    //     setIsSticky(false);
    //   }
    // };

    const handleScroll = () => {
    setIsSticky(window.scrollY > 80);
  };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /* ===== Scroll Spy (auto active on scroll) ===== */
useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const handleScrollSpy = () => {
    const scrollPos = window.scrollY;

    // ✅ FORCE HOME ACTIVE AT TOP
    if (scrollPos < 150) {
      setActiveSection("home");
      return;
    }

    const offset = 120;

    sections.forEach((section) => {
      const top = section.offsetTop - offset;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < bottom) {
        setActiveSection(id);
      }
    });
  };

  handleScrollSpy();
  window.addEventListener("scroll", handleScrollSpy);

  return () => window.removeEventListener("scroll", handleScrollSpy);
}, []);

  /* ===== Sync hash on direct load (/ or /#about) ===== */
  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash.replace("#", ""));
    } else {
      setActiveSection("home");
    }
  }, [location]);

  /* ===== Hover animation ===== */
  // const handleHover = (e) => {
  //   if (!e.currentTarget.classList.contains("animate__bounce")) {
  //     e.currentTarget.classList.add("animate__animated", "animate__bounce");
  //   }
  // };

  // const handleAnimationEnd = (e) => {
  //   e.currentTarget.classList.remove("animate__animated", "animate__bounce");
  // };

  return (
    <header className={`main_header ${isSticky ? "sticky" : ""}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/#home">
            <span className="logo_txt">FIROZ DEV.</span>
          </NavLink>

          {/* Mobile button */}
          <button
            type="button"
            className="mobile_btn"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            <BsList />
          </button>

          {/* Desktop Navbar */}
          <div className="collapse navbar-collapse hide_mobile">
            <ul className="navbar-nav ms-auto">
              {[
                ["home", "Home"],
                ["about", "About"],
                ["services", "Services"],
                ["portfolio", "Portfolio"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <li className="nav-item" key={id}>
                  <Link
                    to={`/#${id}`}
                    className={`nav-link ${
                      activeSection === id ? "active" : ""
                    }`}
                  >
                    <span
                      className="nav-text"
                      // onMouseEnter={handleHover}
                      // onAnimationEnd={handleAnimationEnd}
                    >
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Overlay */}
          {isOpen && <div className="overlay" onClick={closeSidebar}></div>}

          {/* Mobile Sidebar */}
          <div className={`mobile_sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar_inner">
              <button
                type="button"
                className="close_btn"
                onClick={closeSidebar}
              >
                <IoCloseOutline />
              </button>

              <div className="sidebar_logo">
                <span className="logo_mobile">FIROZ DEV.</span>
              </div>

              <ul className="sidebar_menu">
                {[
                  ["home", "Home"],
                  ["about", "About"],
                  ["services", "Services"],
                  ["portfolio", "Portfolio"],
                  ["contact", "Contact"],
                ].map(([id, label]) => (
                  <li key={id}>
                    <Link
                      to={`/#${id}`}
                      onClick={closeSidebar}
                      className={activeSection === id ? "active" : ""}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* <div className="mb-2">
                <FiMail /> firoz.webdesigner@gmail.com
              </div>
              <div className="mb-2">
                <FiPhone /> +91 7275591984
              </div> */}

              <div className="sidebar_social">
                <Link to="#"><FiFacebook /></Link>
                <Link to="#"><FiLinkedin /></Link>
                <Link to="#"><FiInstagram /></Link>
                <Link to="#"><FiYoutube /></Link>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
