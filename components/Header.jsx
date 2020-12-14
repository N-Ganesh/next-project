import { useEffect, useContext } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayModeContext from "./DisplayModeContext";
const Header = () => {
  const { switchMode, setSwitchMode } = useContext(DisplayModeContext);
  const router = useRouter();

  const NavLinkActiveClass = (path) => {
    if (path === router.pathname) {
      return "font-weight-bold";
    } else {
      return "";
    }
  };
  const changeMode = () => {
    if (!switchMode || switchMode === 0) {
      setSwitchMode(1);
    } else {
      setSwitchMode(0);
    }
  };

  const lightMode = <FontAwesomeIcon icon={faSun} className="ml-1" />;
  const darkMode = <FontAwesomeIcon icon={faMoon} className="ml-1" />;
  useEffect(() => {}, [switchMode]);
  return (
    <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
      <Link href="/">
        <Navbar.Brand style={{ cursor: "pointer" }}>
          My Personal Project
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <div
            className="text-white  d-block pt-2 pr-3"
            style={{ cursor: "pointer" }}
            onClick={() => changeMode()}
          >
            {switchMode === 0 || !switchMode ? "Light Mode" : "Dark Mode"}
            {switchMode === 0 || !switchMode ? lightMode : darkMode}
            <DisplayModeContext.Provider value={{ switchMode }} />
          </div>
          <Link href="/">
            <span
              type="button"
              className={`text-white d-block pt-2 pr-3 ${NavLinkActiveClass(
                "/"
              )}`}
            >
              Home
            </span>
          </Link>
          <Link href="/projects">
            <span
              type="button"
              className={`text-white d-block pt-2 pr-3 ${NavLinkActiveClass(
                "/projects"
              )}`}
            >
              Projects
            </span>
          </Link>
          <Link href="/about">
            <span
              type="button"
              className={`text-white d-block pt-2 pr-3 ${NavLinkActiveClass(
                "/about"
              )}`}
            >
              About
            </span>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
