import LandingInterface from "./0100-LandingInterface"
import {useEffect, useState} from 'react'
import Dashboard from "./0200-Dashboard"
import {Button,Card, Col, Form, Nav, Row} from "react-bootstrap"
//! import { getListOfInterventions } from "../utilities/fetches"
import doctor from '../assets/banner-img.png'
import { AiOutlineEyeInvisible,AiOutlineLock,AiOutlineSmile } from "react-icons/ai";
import elderlyWithNurse from '../assets/elderlyWithNurse.png'
import marco from '../assets/parrot1.png'
import HomeForm from "./0010-HomeForm"


const Home=()=>{
    const[currentUser,setCurrentUser]=useState()
    const[requests,setRequests]=useState()
    useEffect(() => {
        //! getListOfInterventions({setRequests})
    }, [])

    return (
        <div style={{width: '100%',fontFamily:'mulish,sans-serif'}}>

            <div style={{width:'100%',minHeight:'100vh', background:'#FEEBEA'}}>
                <div className='row justify-content-between'>
                    <div style={{width:'16vh',minHeight:'8vh',background:'#527c88',marginTop:'8vh',marginLeft:'24vh'}}>
                        LOGO
                    </div>
                    <div style={{width:'16vh',minHeight:'8vh',background:'#527c88',marginTop:'8vh',marginRight:'24vh'}}>
                        LOGIN
                    </div>
                </div>
                <div style={{position:'absolute',right:'24vh'}}>
                    <img src={doctor} />
                </div>
                <div 
                    style={{width:'84vh',minHeight:'8vh',background:'#FEEBEA',color:'#527c88',fontSize:90,marginTop:'16vh',marginLeft:'24vh'}}
                    className='rounded row justify-content-start'>
                    Health Advantage
                </div>
                <div style={{width:'84vh',background:'#527c88',marginTop:'1vh',marginLeft:'24vh'}}
                    className='rounded mt-5 mb-4'>
                        It connects home healthcare professionals with your nursing and integrated home care needs.
                        <br/>
                        You can get in touch with the best professionals with their specializations and patient reviews.
                </div>
                <div className='row justify-content-between'
                    style={{position:'absolute',width:'84vh',minHeight:'8vh',marginTop:'12vh',marginLeft:'24vh'}}>
                    <div 
                        style={{width:'32vh',background:'#B5958E'}}
                        className='rounded'>
                        looking for assistance
                    </div>
                    <div 
                        style={{width:'32vh',background:'#B5958E'}}
                        className='rounded'>
                        licensed healthcare practitioners area
                    </div>
                </div>
            </div>

            <div 
                style={{width:'100%',minHeight:'50vh',background:'#FFFFFF',position:'absolute',zIndex:'1',color:'#2e4450',fontSize:20}}
                className='row justify-content-center mx-auto'
                >
                <Card style={{width:'24rem',height:'24rem',background:'#FEEBEA',borderColor:'#B5958E' }} className='mx-5 my-auto'>
                    <Card.Body>
                        <AiOutlineEyeInvisible size='72px' style={{color:'#2e4450'}} className='mt-3 mb-3' />
                        <Card.Title className='mb-3' style={{fontWeight:'bold'}}>no personal data required</Card.Title>
                        <Card.Text className='mx-4' style={{fontWeight:'lighter'}}>
                        email and zipcode are enough, then choose a password and publish your first request for home assistance
                        </Card.Text>
                        <Button
                            style={{width:'8rem',background:'#FFFFFF',borderColor:'#B5958E',color:'#2e4450',position:'absolute',bottom:'2rem',right:'8rem'}}
                            >Read more</Button>
                    </Card.Body>
                </Card>
                <Card style={{width:'24rem',height:'24rem', background:'#FEEBEA',borderColor:'#B5958E' }} className='mx-5 my-auto'>
                    <Card.Body className=''>
                        <AiOutlineSmile size='72px' style={{color:'#2e4450'}} className='mt-3 mb-3' />
                        <Card.Title className='mb-3' style={{fontWeight:'bold'}}>it's completely free</Card.Title>
                        <Card.Text className='mx-4' style={{fontWeight:'lighter'}}>
                        and it will be forever free, no credit card required
                        </Card.Text>
                        <Button
                            style={{width:'8rem',background:'#FFFFFF',borderColor:'#B5958E',color:'#2e4450',position:'absolute',bottom:'2rem',right:'8rem'}}
                            >Read more</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem',height:'24rem', background:'#FEEBEA',borderColor:'#B5958E' }} className='mx-5 my-auto'>
                    <Card.Body>
                        <AiOutlineLock size='72px' style={{color:'#2e4450'}} className='mt-3 mb-3' /> 
                        <Card.Title className='mb-3' style={{fontWeight:'bold'}}>all data is encrypted</Card.Title>
                        <Card.Text className='mx-4' style={{fontWeight:'lighter'}}>
                        and all practitioners are asked for documents certifying qualification for the medical role
                        </Card.Text>
                        <Button
                            style={{width:'8rem',background:'#FFFFFF',borderColor:'#B5958E',color:'#2e4450',position:'absolute',bottom:'2rem',right:'8rem'}}
                            >Read more</Button>
                    </Card.Body>
                </Card>
            </div>

            <div style={{position:'absolute',width: '100%',minHeight:'100vh',background:'#FEEBEA',marginTop:'50vh'}}>
                    <div
                        className='mx-auto rounded'
                        style={{width:'85%',background:'#B5958E',marginTop:'12vh'}}>
                            <Row className=' justify-content-between'>
                                <div className='mt-auto'>
                                    <Card 
                                        className='border-0 mt-4 ml-5 mb-4' 
                                        style={{background:'#FEEBEA',color:'#2e4450',fontSize:'2.3rem'}}>
                                        <Card.Body>Enter your first request for home health care</Card.Body>
                                    </Card>
                                    <img src={elderlyWithNurse} 
                                        height='650rem'
                                        className='row justify-content-start'
                                        />
                                </div>
                                <Card
                                    className='my-4 ml-auto mr-5'
                                    style={{background:'#FEEBEA',minWidth:'42%'}}>
                                    <Card.Body 
                                        className='mx-5 justify-content-start'
                                        style={{color:'#2e4450'}}>

                                            <HomeForm />

                                    </Card.Body>
                                </Card>    
                            </Row>
                    </div>
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
                                                    , and around. Or you can write me an <a href='www.google.com' style={{color:'#FFFFFF'}}>email</a>.</span>
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
            </div>

            
            {currentUser
            // &&
    // ? CURRENT USER ? LOGOUT BUTTON : ...
                // <div className='row justify-content-end mt-5'>
                //     <Button
                //         style={{borderWidth:4}}
                //         className={currentUser.role==='Practitioner'
                //             ?"border-info rounded-pill bg-light text-dark px-5"
                //             :"border-warning rounded-pill bg-light text-dark px-5"}
                //         onClick={()=>setCurrentUser()}
                //         >
                //         Logout
                //     </Button>
                // </div>
            }

            {currentUser
    // ? CURRENT USER ? DASHBOARD : LANDIN INTERFACE
                // ?<Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} requests={requests} setRequests={setRequests} />
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


