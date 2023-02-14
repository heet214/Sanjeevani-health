import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {MdHomeFilled} from 'react-icons/Md'
import {FaMapMarkedAlt} from 'react-icons/Fa'
import {HiDocumentText} from 'react-icons/Hi'
import {IoMdNotifications} from 'react-icons/Io'

function NavBar() {
  return (
    <div className="navBar">
    <Navbar bg="light" variant="light" fixed="bottom">
    <Container>
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      <Nav className="me-auto mx-5">
        <Nav.Link href="/"><MdHomeFilled/></Nav.Link>
        <Nav.Link href="/"><FaMapMarkedAlt/></Nav.Link>
        <Nav.Link href="/"><HiDocumentText/></Nav.Link>
        <Nav.Link href="/"><IoMdNotifications/></Nav.Link>

      </Nav>
    </Container>
  </Navbar>
  </div>
  );
}

export default NavBar;