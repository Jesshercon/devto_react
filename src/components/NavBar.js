import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Navbar() {
    return (
        <>
            <NavBar>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <NavBar.Brand src="">logo</NavBar.Brand>
                        </Col>
                        <Col sm={4}>
                            <Form>
                                <Form.Control placeholder="Search"></Form.Control>
                            </Form>
                        </Col>
                        <Col >
                            <Button>
                                Create post
                            </Button>
                        </Col>
                        <Col >
                            notificacion
                        </Col>
                        <Col >avatar</Col>
                    </Row>

                </Container>
            </NavBar>
        </>

    )

}

export default Navbar;