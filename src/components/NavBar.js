import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <NavBar>
            <Container>
                <NavBar.Brand>logo</NavBar.Brand>
                <Form>
                    <Form.Control placeholder="Search">

                    </Form.Control>
                </Form>



                <div>Create post</div>
                <div>notificación</div>
                <div>avatar</div>

            </Container>
        </NavBar>
    )

}

export default NavBar;