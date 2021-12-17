import { useEffect, useState } from "react"
import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import UserInfoCard from "./0201-UserInfoCard"
import InterventionsTakenInCharge from "./0210-InterventionsTakenInCharge"
import ListOfRequests from "./0220-ListOfRequests"
import PublishForm from "./0230-PublishForm"
import ThisPatientInterventions from "./0240-ThisPatientInterventions"
import { GiElephant } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";

const Dashboard=({currentUser,setCurrentUser,requests,setRequests})=>{
    const[offeredServices,setOfferedServices]=useState([])
    useEffect(() => {

    }, [])
    const logout=()=>{
        setCurrentUser()
    }

    return(
        <div  className='container-fluid body min-vh-100 my-5'>

            <Row className='justify-content-center vw80 mx-auto mt-3 mb-5'>
                <Col sm={1} className='megaTitle'>                        
                    <GiElephant  />
                </Col>
                <Col sm={8} className='mt-auto'>
                    <Navbar>
                        <Container>
                        <Navbar.Brand >Health Advantage</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link onClick={logout} >Log out</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </Col>
                <Col sm={1} className='megaTitle '>                        
                    <IoMdLogOut onClick={logout}  />
                </Col>
            </Row>
                       
            <Card 
                style={{ width: '80rem',backgroundColor:'#E9ECEF' }} 
                className={currentUser.role==='Practitioner'
                    ?'text-dark border-info mx-auto'
                    :'text-dark bg-light border mx-auto'}
                >
                <Card.Body>
                    <Card.Text>

                        <UserInfoCard currentUser={currentUser} />

                    <Row className=''>

                        {currentUser.role==='Practitioner'
                        ?
                            (currentUser&&currentUser.InterventionsTakenInCharge.length===0)
                            ?
                            <div className='row justify-content-start mx-5 mb-4 text-muted'>
                                <hr className='mx-5 mb-5' />
                                You have not yet offered your services, consult the list of service requests below and click reply
                            </div>
                            :
                            <Row className='container-fluid mx-5'>
                                {currentUser&&currentUser.InterventionsTakenInCharge.map((intervention)=>(
                                <InterventionsTakenInCharge 
                                    intervention={intervention} 
                                    currentUser={currentUser} 
                                    setCurrentUser={setCurrentUser}/>
                                ))}
                            </Row>
                        :
                            (currentUser.published.length===0)
                            ?
                            <div className='mx-5 mb-4 text-muted'>
                                <hr className='mx-5 mb-5' />
                                you have not yet published a request for home health care, click publish
                            </div>
                            :
                            <Row className='container-fluid mx-5'>
                                {currentUser&&currentUser.published.map((intervention)=>(
                                    <ThisPatientInterventions intervention={intervention}/>
                                ))}
                            </Row>
                        }
                    </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

            {currentUser.role==='Practitioner'&&
                <ListOfRequests currentUser={currentUser} setCurrentUser={setCurrentUser} requests={requests} setRequests={setRequests} offeredServices={offeredServices} setOfferedServices={setOfferedServices} />
            }
            {currentUser.role!=='Practitioner'&&
                <PublishForm currentUser={currentUser} setCurrentUser={setCurrentUser} requests={requests} setRequests={setRequests} />
            }
        </div>
    )
}

export default Dashboard