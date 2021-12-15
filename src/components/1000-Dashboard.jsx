import { Button, Col, Container, Navbar, NavDropdown, Row } from "react-bootstrap"
import './0000-Home.css'
import { GiElephant } from "react-icons/gi";


const NewDashboard=({currentUser,setCurrentUser})=>{

    return(
        <>
            <Row className='green vh-100 justify-content-center'>
                <Col sm={8} className='bg-light  my-5 rounded border border-dark'>

                    <Row className='rounded-top'>
                        <Col sm={2} className='megaTitle'><GiElephant /></Col>
                        <Col sm={8} className='megaTitle'>
                            Patient card
                        </Col>
                        <Col sm={2} className='megaTitle'><img src={currentUser.photo} className='avatar' /></Col>
                    </Row>



                </Col>
            </Row>
        </>
    )
}

export default NewDashboard