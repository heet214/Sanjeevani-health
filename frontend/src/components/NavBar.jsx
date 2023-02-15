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
    <Navbar bg="white" variant="light" fixed="bottom">
    <Container>
      <Nav className="mx-auto vital_container d-flex justify-content-evenly ">
        <Nav.Link href="/"><MdHomeFilled size='35' color='#1c6ba4'/></Nav.Link>
        <Nav.Link href="/"><FaMapMarkedAlt size='35' color='#1c6ba4'/></Nav.Link>
        <Nav.Link href="/"><HiDocumentText size='35' color='#1c6ba4'/></Nav.Link>
        <Nav.Link href="/"><IoMdNotifications size='35' color='#1c6ba4'/></Nav.Link>

      </Nav>
    </Container>
  </Navbar>
  </div>
  );
}

export default NavBar;