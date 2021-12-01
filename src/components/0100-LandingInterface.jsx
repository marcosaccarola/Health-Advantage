import { useState } from "react"
import { Card,Row,Col,Form,Button } from "react-bootstrap"
import bg from '../assets/dave-hoefler-unsplash-medium.jpg'
import LoginRegisterForm from "./0110-LoginRegistrationForm"

const LandingInterface=({setCurrentUser})=>{

    const[showRegistrationForm,setShowRegistrationForm]=useState(false)
    const handleRegistrationComponent=()=>{
        showRegistrationForm===false?setShowRegistrationForm(true):setShowRegistrationForm(false)&&setShowProfessionalsForm(false)
        console.log('REGISTRATION:',showRegistrationForm,'PROFESSIONAL:',showProfessionalsForm)
    }
    
    const[showProfessionalsForm,setShowProfessionalsForm]=useState(false)
    const handleProfessionalsForm=()=>{
        showProfessionalsForm===false?setShowProfessionalsForm(true):setShowProfessionalsForm(false)
        console.log(showRegistrationForm,showProfessionalsForm)
    }

    return(
        <div>
            <Card style={{ width: '70%'}} className='text-light bg-info mx-auto mt-2 mb-5'>
                <LoginRegisterForm setCurrentUser={setCurrentUser} />
            <Card.Img variant="top" src={bg}/>
            <Card.Body>
                <Card.Title className='mt-2 mb-5'>
                <a className='text-light' onClick={handleRegistrationComponent}>
                    <span className='text-warning'>Purple Cross</span> connects home healthcare professionals with patients, <span className='text-warning'>forever free</span>.
                    <br/>
                    <span className='text-warning'>Sign up in 45 seconds!</span>
                </a>
                </Card.Title>
        {showRegistrationForm===false?
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
            <Form className='mx-5 my-4'>
                <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="your email" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="password" placeholder="choose a password" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="number" placeholder="enter your zipcode here" />
                </Form.Group>
            {showProfessionalsForm===true&&
            <>
                <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="your email" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="password" placeholder="choose a password" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="number" placeholder="enter your zipcode here" />
                </Form.Group>
            </>
            }

                <div className='row justify-content-between mx-5 my-5'>
                <Button variant="success">Register now for free</Button>
                <Button variant="warning" onClick={handleProfessionalsForm}>I am a healthcare professional</Button>
                </div>

            </Form>
        }
            </Card.Body>
            </Card>
            
        </div>
    )
}

export default LandingInterface