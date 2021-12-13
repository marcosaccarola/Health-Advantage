import LandingInterface from "./0100-LandingInterface"
import {useEffect, useState} from 'react'
import Dashboard from "./0200-Dashboard"
import {Button,Card, Col, Form, Nav, Row} from "react-bootstrap"
//! import { getListOfInterventions } from "../utilities/fetches"
import doctor from '../assets/banner-img.png'
import { AiOutlineEyeInvisible,AiOutlineLock,AiOutlineSmile } from "react-icons/ai";
import elderlyWithNurse from '../assets/elderlyWithNurse.png'


const Home=()=>{
    const[currentUser,setCurrentUser]=useState()
    const[requests,setRequests]=useState()
    useEffect(() => {
        //! getListOfInterventions({setRequests})
    }, [])

    return (
        <div className='' style={{width: '100%',fontFamily:'mulish,sans-serif'}}>

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
                style={{width: '100%',minHeight:'50vh',background:'#FFFFFF',position:'absolute',zIndex:'1',color:'#2e4450',fontSize:20}}
                className='row justify-content-center mx-auto'
                >
                <Card style={{ width: '24rem',height:'24rem',background:'#FEEBEA',borderColor:'#B5958E' }} className='mx-5 my-auto'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
                <Card style={{ width: '24rem',height:'24rem', background:'#FEEBEA',borderColor:'#B5958E' }} className='mx-5 my-auto'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
                                        // style={{minWidth:'90%'}}
                                        className='row justify-content-start'
                                        />
                                </div>
                                <Card
                                    className='my-4 ml-auto mr-5'
                                    style={{background:'#FEEBEA',minWidth:'42%'}}>
                                    <Card.Body 
                                        className='mx-5 justify-content-start'
                                        style={{color:'#2e4450'}}>
                                        {/* <Card.Title>Enter your first request for home health care:</Card.Title> */}
                                        <Form className=''>
                                                {/* <Form.Label 
                                                    className="mt-2 mb-4"
                                                    style={{fontWeight:'lighter',fontSize:20,color:'#2e4450'}}>
                                                    Enter your first request for home health care:
                                                </Form.Label> */}
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label
                                                    style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                                                    >Intervent type</Form.Label>
                                                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                                                    <Form.Select 
                                                        aria-label="Default select example" 
                                                        className=''
                                                        style={{width:'100%',height:40,fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                                                        <option>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Text>
                                                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                                                Choose the closest intervention category.
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label
                                                    style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                                                    >Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                                                We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label
                                                    style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                                                    >Zip code</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                                                Your address will not be shared.
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label
                                                    style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                                                    >Name</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                                                Just your first name.
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label
                                                    style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                                                    >Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                                                Choose a password.
                                                </Form.Text>
                                            </Form.Group>
                                            <Button variant="primary" type="submit" className='mt-3' style={{fontSize:18}}>
                                                Submit
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>    


                                <div >


                                    {/* enter your first request for home health care */}
                                    {/* <div style={{width:'48vh',height:'90%',background:'pink'}}> */}

                                    {/* </div> */}
                                    {/* <Card style={{ width: '48rem',minHeigth:'80%', background:'#FEEBEA' }} className='border-0 mx-5 my-5'>
                                        <Card.Body className=''>
                                            <AiOutlineSmile size='72px' style={{color:'#2e4450'}} className='mt-3 mb-3' />
                                            <Card.Title className='mb-3'>it's completely free</Card.Title>
                                            <Card.Text style={{fontWeight:'lighter'}}>
                                            and it will be forever free, no credit card required
                                            </Card.Text>
                                            <Button
                                                style={{width:'8rem',background:'#FFFFFF',borderColor:'#B5958E',color:'#2e4450',position:'absolute',bottom:'3rem',right:'8rem'}}
                                                >Read more</Button>
                                        </Card.Body>
                                    </Card> */}
                                </div>
                            </Row>
                    </div>
                    <div style={{minWidth:'100vh',minHeight:'30vh',background:'#B5958E',marginTop:'16vh'}}>
                        <div className='container'>

                        <Row>
                            <Col lg='8' style={{marginTop:'12vh',marginBottom:'8vh'}} className='row justify-content-start'>
                                <Nav defaultActiveKey="/home" className="flex-column" style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav>
                            </Col>
                            <Col lg='4' style={{marginTop:'12vh',marginBottom:'8vh'}} className='row justify-content-start'>
                                <Nav defaultActiveKey="/home" className="flex-column" style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                    </Nav.Link>
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


