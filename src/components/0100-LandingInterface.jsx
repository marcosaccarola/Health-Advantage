import { useState } from "react"
import { Card,Row,Col,Form } from "react-bootstrap"
import bg from '../assets/dave-hoefler-unsplash-medium.jpg'
import LoginRegisterForm from "./0110-LoginRegistrationForm"

const LandingInterface=({setCurrentUser})=>{
    const[showRegistration,setShowRegistration]=useState(false)

    const handleRegistrationComponent=()=>{
        showRegistration===false?setShowRegistration(true):setShowRegistration(false)
        console.log(showRegistration)
    }

    return(
        <div>
            <Card style={{ width: '70%'}} className='text-light bg-info mx-auto mt-3 mb-5'>
                <LoginRegisterForm setCurrentUser={setCurrentUser} />
            <Card.Img variant="top" src={bg}/>
            <Card.Body>
                <Card.Title>
                <a className='text-light' onClick={handleRegistrationComponent}>
                    <span className='text-warning'>Purple Cross</span> connects home healthcare professionals with patients, <span className='text-warning'>forever free</span>.
                    <br/>
                    <span className='text-warning'>Sign up in 45 seconds!</span>
                </a>
                </Card.Title>
        {showRegistration===false?
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
            :
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        }
            </Card.Body>
            </Card>
            
        </div>
    )
}

export default LandingInterface