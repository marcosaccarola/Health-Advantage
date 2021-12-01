import { Card,Row,Col } from "react-bootstrap"
import bg from '../assets/dave-hoefler-unsplash-medium.jpg'
import LoginRegisterForm from "./0110-LoginRegistrationForm"

const LandingInterface=({setCurrentUser})=>{

    const openRegistrationModal=()=>{
        console.log('HI')
    }

    return(
        <div>
            <Card style={{ width: '70%'}} className='text-light bg-info mx-auto mt-3 mb-5'>
                <LoginRegisterForm setCurrentUser={setCurrentUser} />
            <Card.Img variant="top" src={bg}/>
            <Card.Body>
                <Card.Title>
                <a className='text-light' onClick={openRegistrationModal}>
                    <span className='text-warning'>Purple Cross</span> connects home healthcare professionals with patients, <span className='text-warning'>forever free</span>.
                    <br/>
                    <span className='text-warning'>Sign up in 45 seconds!</span>
                </a>
                </Card.Title>
                <Card.Text>
                    <Row>
                        <Col xs={4}>value icon and text</Col>
                        <Col xs={4}>value icon and text</Col>
                        <Col xs={4}>value icon and text</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>value icon and text</Col>
                        <Col xs={4}>value icon and text</Col>
                        <Col xs={4}>value icon and text</Col>
                    </Row>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
        </div>
    )
}

export default LandingInterface