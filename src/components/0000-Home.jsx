// import LandingInterface from "./0100-LandingInterface"
import {useState} from 'react'
// import Dashboard from "./0200-Dashboard"
import {Button,Card, Col, Form, Nav, Row} from "react-bootstrap"
//! import { getListOfInterventions } from "../utilities/fetches"
import doctor from '../assets/banner-img.png'
import { AiOutlineEyeInvisible,AiOutlineLock,AiOutlineSmile } from "react-icons/ai";
import elderlyWithNurse from '../assets/elderlyWithNurse.png'
import marco from '../assets/parrot1.png'
import HomeForm from "./0010-HomeForm"
import NewDashboard from "./1000-Dashboard"
import './0000-Home.css'
import { findRenderedDOMComponentWithTag } from 'react-dom/cjs/react-dom-test-utils.development';


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
                <Row className='justify-content-between vw90 mx-auto mt-3 pink'>
                    <Col sm={2} className='green'
                        // style={{width:'16vh',minHeight:'8vh',marginTop:'8vh',marginLeft:'24vh'}}
                        >
                        LOGO
                    </Col>
                    <Col sm={2} className='green'
                        // style={{width:'16vh',minHeight:'8vh',background:'#527c88',marginTop:'8vh',marginRight:'24vh'}}
                        >
                        LOGIN
                    </Col>
                </Row>
                <Row className='mt-5 vw80 mx-auto pink'>
                    <Col sm={8} className='mt-auto mb-5'>
                        <Row className='megaTitle justify-content-center mb-4'>
                            Health Advantage
                        </Row>
                        <Row style={{height:'3vh'}}></Row>
                        <Row className='rounded submegaTitle'>
                                It connects home healthcare professionals with your nursing and integrated home care needs.
                                <br/>
                                You can get in touch with the best professionals with their specializations and patient reviews.
                        </Row>
                        <Row style={{height:'6vh'}}></Row>
                        <Row
                            className='row justify-content-center mt-5'
                            // style={{position:'absolute',width:'84vh',minHeight:'8vh',marginTop:'12vh',marginLeft:'24vh'}}
                            >
                            <Button
                                // style={{width:'32vh',background:'#B5958E'}}
                                className='rounded nudeButtons mx-auto'>
                                Looking for assistance
                            </Button>
                            <Button
                                // style={{width:'32vh',background:'#B5958E'}}
                                className='rounded nudeButtons mx-auto'>
                                Licensed healthcare practitioners area
                            </Button>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row>
                            <img className='container doctor' src={doctor} />
                        </Row>
                    </Col>
                </Row>


                {/* <div style={{position:'absolute',right:'24vh'}}>
                    <img src={doctor} />
                </div>
                <div
                    style={{width:'84vh',minHeight:'8vh',background:'#FEEBEA',color:'#527c88',fontSize:90,marginTop:'16vh',marginLeft:'24vh'}}
                    className='rounded row justify-content-start'
                    >
                    Health Advantage
                </div>
                <div
                    style={{width:'84vh',background:'#527c88',marginTop:'1vh',marginLeft:'24vh'}}
                    className='rounded mt-5 mb-4'
                    >
                        It connects home healthcare professionals with your nursing and integrated home care needs.
                        <br/>
                        You can get in touch with the best professionals with their specializations and patient reviews.
                </div>
                <div
                    className='row justify-content-between'
                    style={{position:'absolute',width:'84vh',minHeight:'8vh',marginTop:'12vh',marginLeft:'24vh'}}
                    >
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
                </div> */}
            </div>

            <Row
                // style={{minHeight:'50vh',background:'#FFFFFF',position:'absolute',zIndex:'1',color:'#2e4450',fontSize:20}}
                className='bg-light justify-content-around mx-5 my-5'
                >
                <Card
                    // style={{width:'24rem',height:'24rem',background:'#FEEBEA',borderColor:'#B5958E' }}
                    // style={{width:'18rem'}}
                    className='card my-5'
                    >
                    <Card.Body>

                        <AiOutlineEyeInvisible size='72px'
                            // style={{color:'#2e4450'}}
                            className='mt-3 mb-3' />

                        <Card.Title
                            className='font-weight-bold mb-3'
                            // style={{fontWeight:'bold'}}
                            >No personal data required</Card.Title>
                        <Card.Text
                            className='mx-4'
                            // style={{fontWeight:'lighter'}}
                            >email and zipcode are enough, then choose a password and publish your first request for home assistance</Card.Text>
                        <Button className='button'
                            // style={{width:'8rem',background:'#FFFFFF',borderColor:'#B5958E',color:'#2e4450',position:'absolute',bottom:'2rem',right:'8rem'}}
                            >Read more</Button>
                    </Card.Body>
                </Card>
                <Card
                    // style={{width:'24rem',height:'24rem', background:'#FEEBEA',borderColor:'#B5958E' }}
                    className='card my-5'
                    >
                    <Card.Body className=''>
                        <AiOutlineSmile size='72px'
                            // style={{color:'#2e4450'}}
                            className='mt-3 mb-3' />
                        <Card.Title
                            className='font-weight-bold mb-3'
                            // style={{fontWeight:'bold'}}
                            >It's completely free</Card.Title>
                        <Card.Text className='mx-4'
                            // style={{fontWeight:'lighter'}}
                            >
                        and it will be forever free, no credit card required
                        </Card.Text>
                        <Button className='button'
                            // style={{width:'8rem',background:'#FFFFFF',borderColor:'#B5958E',color:'#2e4450',position:'absolute',bottom:'2rem',right:'8rem'}}
                            >Read more</Button>
                    </Card.Body>
                </Card>
                <Card
                    // style={{ width: '24rem',height:'24rem', background:'#FEEBEA',borderColor:'#B5958E' }}
                    className='card my-5'>
                    <Card.Body>
                        <AiOutlineLock size='72px'
                        // style={{color:'#2e4450'}}
                        className='mt-3 mb-3' />
                        <Card.Title
                            className='font-weight-bold mb-3'
                            // style={{fontWeight:'bold'}}
                            >All data is encrypted</Card.Title>
                        <Card.Text className='mx-4'
                            // style={{fontWeight:'lighter'}}
                            >
                        and all practitioners are asked for documents certifying qualification for the medical role
                        </Card.Text>
                        <Button className='button'
                            // style={{width:'8rem',background:'#FFFFFF',borderColor:'#B5958E',color:'#2e4450',position:'absolute',bottom:'2rem',right:'8rem'}}
                            >Read more</Button>
                    </Card.Body>
                </Card>
            </Row>

            {/* <div  */}
                {/* // style={{position:'absolute',width: '100%',minHeight:'100vh',background:'#FEEBEA',marginTop:'50vh'}} */}
                {/* > */}
                    <Row className='container-fluid nude vw80 mx-auto rounded'>
                        <Col sm={6}>
                            <Row className='submegaTitle bg-light justify-content-center mx-auto my-5 rounded'>
                                Enter your first request for home health care           
                            </Row>
                            <Row className='row justify-content-center'>
                                    <img src={elderlyWithNurse}
                                        // height='650rem'                                        
                                        />
                            </Row>
                        </Col>                                                                        
                        <Col sm={6}>
                            <Row className='pink justify-content-center mx-auto my-5 rounded'>
                                {/* <Card
                                    className='my-4 ml-auto mr-5'
                                    style={{background:'#FEEBEA',minWidth:'42%',borderWidth:1,borderColor:'#2e4450'}}> */}
                                    {/* <Card.Body
                                        className='mx-5 justify-content-start'
                                        style={{color:'#2e4450'}}> */}

                                            <HomeForm setCurrentUser={setCurrentUser} />

                                    {/* </Card.Body> */}
                                {/* </Card> */}
                            </Row>
                        </Col>                                                                        
                            {/* <Row className='justify-content-between'> */}
                                {/* <div className='mt-auto'>
                                    <Card
                                        className=' mt-4 ml-5 mb-4'
                                        style={{background:'#FFFFFF',color:'#2e4450',fontSize:'2.3rem',borderWidth:1,borderColor:'#2e4450'}}>
                                        <Card.Body>Enter your first request for home health care</Card.Body>
                                    </Card>
                                    <div>
                                    </div>
                                </div> */}

                            {/* </Row> */}
                    </Row>
                    {/* <div
                        className='mx-auto rounded'
                        style={{width:'85%',background:'#B5958E',marginTop:'12vh'}}>
                            <Row className='justify-content-between'>
                                <div className='mt-auto'>
                                    <Card
                                        className=' mt-4 ml-5 mb-4'
                                        style={{background:'#FFFFFF',color:'#2e4450',fontSize:'2.3rem',borderWidth:1,borderColor:'#2e4450'}}>
                                        <Card.Body>Enter your first request for home health care</Card.Body>
                                    </Card>
                                    <div>
                                        <img src={elderlyWithNurse}
                                            height='650rem'
                                            className='row justify-content-start'
                                            />
                                    </div>
                                </div>
                                <Card
                                    className='my-4 ml-auto mr-5'
                                    style={{background:'#FEEBEA',minWidth:'42%',borderWidth:1,borderColor:'#2e4450'}}>
                                    <Card.Body
                                        className='mx-5 justify-content-start'
                                        style={{color:'#2e4450'}}>

                                            <HomeForm setCurrentUser={setCurrentUser} />

                                    </Card.Body>
                                </Card>
                            </Row>
                    </div> */}


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
                {/* </div> */}
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


