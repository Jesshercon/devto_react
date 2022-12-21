import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Navbar() {
    return (
        <>
            <NavBar>
                <Container>
                    {/* <NavBar.Brand></NavBar.Brand> */}
                    <div>logo</div>
                    <Form>
                        <div>search-bar</div>
                        {/* <Form.Control placeholder="Search"></Form.Control> */}
                    </Form>

                    <Button>
                        <div>Create post</div>
                    </Button>
                    <div>
                        <div>notificacion</div>
                        <div>avatar</div>
                    </div>



                </Container>
            </NavBar>
        </>

    )

}

export default Navbar;