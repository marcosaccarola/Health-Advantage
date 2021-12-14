import { Button, Container, Navbar, NavDropdown, Row } from "react-bootstrap"
import './0000-Home.css'

const NewDashboard=({currentUser,setCurrentUser})=>{

    return(
        <>
            <Navbar className='mt-5 navText'>
                <Container>
                    {/* <Navbar.Brand href="#home">New request to intervention</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    {/* <NavDropdown title="New Intervention" id="navbarScrollingDropdown" className='textColor'>
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown> */}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{currentUser.firstName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Row className='pink vh-100'>
            </Row>
        </>
    )
}

export default NewDashboard