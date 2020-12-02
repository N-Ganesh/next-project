import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-5">
          <Nav.Link href="/product" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="text-white">
            Link
          </Nav.Link>
          <NavDropdown
            title="Dropdown"
            id="basic-nav-dropdown"
            className="text-white"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
