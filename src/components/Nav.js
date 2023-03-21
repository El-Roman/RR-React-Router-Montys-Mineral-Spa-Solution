import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    {/* All of our pieces for nav bar go here */}
                    <Navbar.Brand href="#">Monty's Mineral SPA</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    );
}

export default Navbar;