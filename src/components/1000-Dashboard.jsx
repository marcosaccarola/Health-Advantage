import { Button, Col, Container, Navbar, NavDropdown, Row } from "react-bootstrap"
import './0000-Home.css'
import { GiElephant } from "react-icons/gi";


const NewDashboard=({currentUser,setCurrentUser})=>{

    return(
        <>
            {/* <Navbar className='mt-5 navText'>
                <Container>
                    <Navbar.Brand href="#home">New request to intervention</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="New Intervention" id="navbarScrollingDropdown" className='textColor'>
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Text>
                        Signed in as: <a href="#login">{currentUser.firstName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            <Row className='nude vh-100 justify-content-center'>
                <Col sm={8} className='pink my-5 rounded border border-white'>
                    <Row className='bg-white'>
                        <Col sm={2} className='megaTitle'><GiElephant /></Col>
                        <Col sm={8} className='megaTitle'></Col>
                        <Col sm={2} className='megaTitle'><img src={currentUser.photo} className='avatar borderGreen' /></Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default NewDashboard