import { useState } from "react"
import { Card,Row,Col,Form,Button } from "react-bootstrap"
import bg from '../assets/dave-hoefler-unsplash-medium.jpg'
import LoginRegisterForm from "./0110-LoginRegistrationForm"

const LandingInterface=({setCurrentUser})=>{

    const[showRegistrationForm,setShowRegistrationForm]=useState(false)
    const handleRegistrationComponent=()=>{
        showRegistrationForm===false?setShowRegistrationForm(true):closeEverything()
    }
        const closeEverything=()=>{
            setShowRegistrationForm(false)
            setShowProfessionalsForm(false)
        }
    
    const[showProfessionalsForm,setShowProfessionalsForm]=useState(false)
    const handleProfessionalsForm=()=>{
        showProfessionalsForm===false?setShowProfessionalsForm(true):setShowProfessionalsForm(false)
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
            <div>
                    {/* <div className='text-left'> */}
                    <Form.Text>mandatory personal data</Form.Text>
                    {/* </div> */}
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="first name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="last name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="number" placeholder="age" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="profession" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="educational qualification" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="medical board" />
                </Form.Group>

                    {/* <div className='text-left'> */}
                    <Form.Text>optional personal data</Form.Text>
                    {/* </div> */}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder='a few words about your services and a passport photo will increase the chances of patients choosing you by 65%!' rows={3} />
                </Form.Group>
                <Form.Group controlId="formFile">
                    <Form.Control type="file" size="sm" />
                </Form.Group>
            </div>
            }

                <div className='row justify-content-between mx-5 my-5'>
                <Button variant="success">
                    Register now for free
                </Button>
                <Button variant="warning" onClick={handleProfessionalsForm}>
                    {showProfessionalsForm===false?'I am a healthcare professional':'I am NOT a healthcare professional, I am a patient'}
                </Button>
                </div>

            </Form>
        }
            </Card.Body>
            </Card>
            
        </div>
    )
}

export default LandingInterface