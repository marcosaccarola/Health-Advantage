import { useState } from "react"
import { Card,Row,Col,Form,Button } from "react-bootstrap"
import bg from '../assets/dave-hoefler-unsplash-medium.jpg'
import LoginRegisterForm from "./0110-LoginForm"
import RegistrationForm from "./0120-RegistrationForm"
import patients from '../dbExample/patients.json'
import practitioners from '../dbExample/practitioners.json'

const LandingInterface=({setCurrentUser})=>{

    const[showRegistrationForm,setShowRegistrationForm]=useState(false)
    const handleRegistrationComponent=()=>{
        showRegistrationForm===false
            ?setShowRegistrationForm(true)
            :closeEverything()
    }
        const closeEverything=()=>{
            setShowRegistrationForm(false)
            setShowProfessionalsForm(false)
        }
    
    const[showProfessionalsForm,setShowProfessionalsForm]=useState(false)
    const handleProfessionalsForm=()=>{
        showProfessionalsForm===false
            ?setShowProfessionalsForm(true)
            :setShowProfessionalsForm(false)
    }

    const[newUser,setNewUser]=useState()
    const sendNewUser=()=>{
        newUser.type='patient'
            ?patients.push(newUser)
            :practitioners.push(newUser)
        setCurrentUser(newUser)
    }

    return(
        <div>
            <Card style={{ width: '70%'}} className='text-light bg-info mx-auto mt-2 mb-5'>

                <LoginRegisterForm setCurrentUser={setCurrentUser} />

                <Card.Img variant="top" src={bg}/>
                <Card.Body>
                    <Card.Title className='mt-2 mb-5'>
                    <a className='text-light' onClick={handleRegistrationComponent}>
                        <span className='text-warning'>Purple Cross</span>
                        connects home healthcare professionals with patients,
                        <span className='text-warning'>forever free</span>.
                        <br/>
                        <span className='text-warning'>Sign up in 45 seconds!</span>
                    </a>
                    </Card.Title>

            {showRegistrationForm===false
            ?
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

                        <RegistrationForm 
                            showProfessionalsForm={showProfessionalsForm} 
                            setNewUser={setNewUser}
                            />

                        <div className='row justify-content-between mx-5 my-5'>
                            <Button variant="success" onClick={sendNewUser}>
                                Register now for free
                            </Button>
                            <Button variant="warning" onClick={handleProfessionalsForm}>
                                {showProfessionalsForm===false
                                    ?'I am a healthcare professional'
                                    :'I am NOT a healthcare professional, I am a patient'}
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