import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const NavLinkActiveClass = (path) => {
    if (path === router.pathname) {
      return "font-weight-bold";
    } else {
      return "";
    }
  };
  return (
    <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
