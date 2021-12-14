// import LandingInterface from "./0100-LandingInterface"
import {useState} from 'react'
// import Dashboard from "./0200-Dashboard"
import {Button,Card, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap"
//! import { getListOfInterventions } from "../utilities/fetches"
import doctor from '../assets/banner-img.png'
import { AiOutlineEyeInvisible,AiOutlineLock,AiOutlineSmile } from "react-icons/ai";
import { GiElephant } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import elderlyWithNurse from '../assets/elderlyWithNurse.png'
import marco from '../assets/parrot1.png'
import HomeForm from "./0010-HomeForm"
import NewDashboard from "./1000-Dashboard"
import './0000-Home.css'


const Home=()=>{
    const[currentUser,setCurrentUser]=useState(
        // {"_id":{"$oid":"61b148b616145441832aedce"},"email":"pat","password":"$2b$10$e/5Vp.0HTPtMyAOU/g370uxocIwNM1ruwjDOvRTd6wahBrCvH79WW","zipcode":30174,"role":"Patient","firstName":"Gustavo","lastName":"Merenda","bio":"I'm patient zero.","photo":"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80","published":[{"$oid":"61b28982ae791b1d6cc63669"},{"$oid":"61b2899eae791b1d6cc6366d"}],"createdAt":{"$date":"2021-12-09T00:07:18.264Z"},"updatedAt":{"$date":"2021-12-09T22:56:30.530Z"},"__v":0}
    )
    // const[requests,setRequests]=useState()
    // useEffect(() => {
    // getListOfInterventions({setRequests})
    // }, [])

    return (
        <div className='container-fluid body'>

            {!currentUser&&
            <>
            <div className='container-fluid pink'>
                <Row className='justify-content-center vw90 mx-auto mt-3'>
                    <Col sm={1} className='megaTitle'>                        
                        <GiElephant />
                    </Col>
                    <Col sm={8} className='mt-auto'>
                        <Navbar>
                            <Container>
                            <Navbar.Brand href="#home">Health Advantage</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="#home">Sign in</Nav.Link>
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing">Login</Nav.Link>
                            </Nav>
                            </Container>
                        </Navbar>
                        {/* <Button className='rounded greenButtons ml-auto mt-auto mb-4'>                               
                            Login
                        </Button> */}
                    </Col>
                    <Col sm={1} className='megaTitle '>                        
                        <IoMdLogIn />
                    </Col>
                </Row>
                <Row className='mt-5 vw80 mx-auto pink'>
                    <Col sm={8} className='mt-auto mb-5'>
                        <Row className='megaTitle justify-content-center mb-4'>
                            Health Advantage
                        </Row>
                        <Row style={{height:'3vh'}}></Row>
                        <Row className='rounded submegaTitle'>
                            It connects home healthcare professionals with your nursing and integrated home care needs. You can get in touch with the best professionals with their specializations and patient reviews.                                
                        </Row>
                        <Row style={{height:'6vh'}}></Row>
                        <Row className='row justify-content-center mt-5'>                                                       
                            <Button className='rounded nudeButtons mx-auto'>                               
                                Looking for assistance
                            </Button>
                            <Button className='rounded nudeButtons mx-auto'>                               
                                Licensed healthcare practitioners area
                            </Button>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row>
                            <img className='container doctor img-fluid' src={doctor} />
                        </Row>
                    </Col>
                </Row>
            </div>

            <Row className='bg-light justify-content-around mx-5 mb-5'>                               
                <Card className='card my-5'>                                       
                    <Card.Body>
                        <AiOutlineEyeInvisible size='72px' className='mt-3 mb-3' />                         
                        <Card.Title className='font-weight-bold mb-3'>                           
                            No personal data required
                        </Card.Title>
                        <Card.Text className='mx-4'>                           
                            email and zipcode are enough, then choose a password and publish your first request for home assistance.
                        </Card.Text>
                        <Button className='button'>
                            Read more
                        </Button>
                    </Card.Body>
                </Card>
                <Card className='card my-5'>                                       
                    <Card.Body>
                        <AiOutlineSmile size='72px' className='mt-3 mb-3' />                           
                        <Card.Title className='font-weight-bold mb-3'>                        
                            It's completely free
                        </Card.Title>
                        <Card.Text className='mx-4'>                            
                            and it will be forever free, no credit card required.
                        </Card.Text>
                        <Button className='button'>
                            Read more
                        </Button>
                    </Card.Body>
                </Card>
                <Card className='card my-5'>                   
                    <Card.Body>
                        <AiOutlineLock size='72px' className='mt-3 mb-3' />                       
                        <Card.Title className='font-weight-bold mb-3'>                           
                            All data is encrypted
                        </Card.Title>
                        <Card.Text className='mx-4'>                            
                            and all practitioners are asked for documents certifying qualification for the medical role.
                        </Card.Text>
                        <Button className='button'>                            
                            Read more
                        </Button>
                    </Card.Body>
                </Card>
            </Row>

            <Row className='container-fluid nude vw80 mx-auto rounded'>
                <Col sm={6}>
                    <Row className='submegaTitle pink justify-content-center mx-auto my-5 rounded'>
                        Enter your first request for home health care           
                    </Row>
                    <Row className='d-flex justify-content-center align-items-flex-end'>
                        <img src={elderlyWithNurse} className='self-item-flex-bottom w-100' />                                                                                                                  
                    </Row>
                </Col>                                                                        
                <Col sm={6}>
                    <Row className='pink justify-content-center mx-auto my-5 rounded'>
                        <HomeForm setCurrentUser={setCurrentUser} />
                    </Row>
                </Col>                                                                        
            </Row>

            <div style={{minWidth:'100vh',minHeight:'30vh',background:'#B5958E',marginTop:'24vh'}}>
                <div className='container' style={{minWidth:'100vh'}}>

                <Row>
                    <Col lg='8' style={{marginTop:'12vh',marginBottom:'8vh'}} className='row justify-content-start my-auto'>
                        <Nav defaultActiveKey="/home"
                            className="flex-column mr-auto"
                            style={{fontWeight:'lighter',fontSize:16,color:'#2e4450'}}>
                                <Row>
                                    <Col>
                                    <img src={marco} style={{width:'20vh'}} />
                                    </Col>
                                    <Col>
                                        <Nav.Item
                                            style={{color:'#DDDDDD'}}
                                            className='mr-auto mb-2'>
                                            Hello, my name is <a style={{color:'#FFFFFF'}}> Marco Saccarola</a> and here is a parrot for no reason.
                                        </Nav.Item>
                                        <Nav.Item style={{color:'#DDDDDD'}} className='mt-3 mr-auto row justify-content-end'>
                                            <span>You can find me on <a style={{color:'#FFFFFF'}}>Zoom</a>, <span style={{color:'#FFFFFF'}}> Discord</span>
                                            ,
                                            <a href='https://github.com/marcosaccarola' style={{color:'#FFFFFF'}}> GitHub</a>
                                            ,
                                            <span style={{color:'#FFFFFF'}}> Linkedin</span>
                                            , and around here. Or you can write me an <a href='www.google.com' style={{color:'#FFFFFF'}}>email</a>.</span>
                                        </Nav.Item>
                                    </Col>
                                </Row>
                        </Nav>
                    </Col>
                    <Col lg='4' style={{marginTop:'12vh',marginBottom:'8vh'}} className='row justify-content-end ml-auto'>
                        <Nav defaultActiveKey="/home" className="flex-column mx-auto" style={{fontWeight:'lighter',fontSize:16,color:'#2e4450'}}>
                            <Nav.Item
                                style={{color:'#DDDDDD'}}
                                className='mr-auto mb-2 ml-3'>
                                Code tools:
                            </Nav.Item>
                            <Nav.Link eventKey="link-1"className='mr-auto'
                                style={{color:'#DDDDDD'}}><span style={{color:'#FFFFFF'}}>M</span>ongoDB</Nav.Link>
                            <Nav.Link eventKey="link-2"className='mr-auto'
                                style={{color:'#DDDDDD'}}><span style={{color:'#FFFFFF'}}>E</span>xpress.js</Nav.Link>
                            <Nav.Link eventKey="link-3"className='mr-auto'
                                style={{color:'#DDDDDD'}}><span style={{color:'#FFFFFF'}}>R</span>eact.js</Nav.Link>
                            <Nav.Link eventKey="link-4"className='mr-auto'
                                style={{color:'#DDDDDD'}}><span style={{color:'#FFFFFF'}}>N</span>ode.js</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                </div>
            </div>
            </>
            }


            {/* {currentUser&&
            // &&
    // ? CURRENT USER ? LOGOUT BUTTON : ...
                <div className='row justify-content-end mt-5'>
                    <Button
                        style={{borderWidth:4}}
                        className={currentUser.role==='Practitioner'
                            ?"border-info rounded-pill bg-light text-dark px-5"
                            :"border-warning rounded-pill bg-light text-dark px-5"}
                        onClick={()=>setCurrentUser()}
                        >
                        Logout
                    </Button>
                </div>
            } */}

            {currentUser&&
    // ? CURRENT USER ? DASHBOARD : LANDIN INTERFACE
    // ?
                <NewDashboard currentUser={currentUser} setCurrentUser={setCurrentUser} />
                // :<LandingInterface setCurrentUser={setCurrentUser} currentUser={currentUser} />
            }
        </div>
    )
}

export default Home

/*
location (exact address)
intervention name and type
piaghe da decupito
situazioni che non vengono raccolte dal servizio pubblico (intramuscolo, flebo)
quando si infonde un farmaco, servirebbe sempre la prescrizione medica


nutrizione parenterale
nutrizione con peg

*/


