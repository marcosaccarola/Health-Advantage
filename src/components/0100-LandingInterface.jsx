import { useState } from "react"
import { Card,Row,Col,Form,Button } from "react-bootstrap"
import bg from '../assets/dave-hoefler-unsplash-medium-cutted.jpg'
import LoginRegisterForm from "./0110-LoginForm"
import RegistrationForm from "./0120-RegistrationForm"
import patients from '../dbExample/patients.json'
import practitioners from '../dbExample/practitioners.json'
import { AiOutlineEyeInvisible,AiOutlineLock,AiOutlineSmile } from "react-icons/ai";

const LandingInterface=({currentUser,setCurrentUser})=>{

//*____________________________________ FORMS HANDLERS
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

                <LoginRegisterForm setCurrentUser={setCurrentUser} currentUser={currentUser} />

                
                <Card.Img variant="top" src={bg}/>
                <Card.Body>
                    <Card.Title className='font-weight-bold mt-2 mb-5'>
                    <a className='text-light' onClick={handleRegistrationComponent}>
                        <span className='text-warning'>Purple Cross </span>
                        connects home healthcare professionals with patients,
                        <span className='text-warning'> forever free</span>.
                        <br/>
                        <span className='text-warning'>Sign up in 45 seconds!</span>
                    </a>
                    </Card.Title>

            {showRegistrationForm===false
            ?
                    <Card.Text>
                        <Row>
                            <Col xs={4}><AiOutlineEyeInvisible size='96px' /></Col>
                            <Col xs={4}><AiOutlineLock size='96px' /></Col>
                            <Col xs={4}><AiOutlineSmile size='96px' /></Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <Card.Title className='font-weight-bold my-4'>
                                Safe
                                </Card.Title>
                                <Card.Title className='text-justify mx-4'>
                                <span className='text-warning'>all data is encrypted </span>
                                and all practitioners are asked for documents certifying qualification for the medical role
                                </Card.Title>
                            </Col>
                            <Col xs={4}>
                                <Card.Title className='font-weight-bold my-4'>
                                Anonymous
                                </Card.Title>
                                <Card.Title className='text-justify mx-4'>
                                <span className='text-warning'>no personal data required</span>
                                : email and zipcode are enough, then choose a password and publish your first request for home assistance
                                </Card.Title>
                            </Col>
                            <Col xs={4}>
                               <Card.Title className='font-weight-bold my-4'>
                                Free
                                </Card.Title>
                                <Card.Title className='text-justify mx-4'>
                                <span className='text-warning'>it's completely free </span>
                                and will be forever, no credit card required
                                </Card.Title>
                            </Col>
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