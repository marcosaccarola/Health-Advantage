import { useState } from "react"
import { Card,Button } from "react-bootstrap"
import InterventionsTakenInCharge from "./0210-InterventionsTakenInCharge"
import ListOfRequests from "./0220-Requests"

const Dashboard=({currentUser})=>{
    const[offeredServices,setOfferedServices]=useState([])

    return(
        <div className='mt-5'>
            <Card style={{ width: '80rem' }} 
                className={currentUser.type==='practitioner'?'text-dark bg-info':'text-dark bg-warning'}
                >
            <Card.Body>
                <div className='row justify-content-between mx-5 mt-4 mb-5'>
                <Card.Title>{currentUser.email}</Card.Title>
                <Card.Title>{currentUser.zipcode}</Card.Title>
                </div>
                <Card.Text>
                    {(offeredServices.length===0)
                        ?<div className='row justify-content-start mx-5 mb-4 text-dark'>
                            {currentUser.type==='practitioner'
                            ?'you have not yet offered your services, consult the list of service requests below and click reply'
                            :'you have not yet published a request for home health care, click publish'
                            }
                        </div>
                        :<InterventionsTakenInCharge offeredServices={offeredServices} currentUser={currentUser}/>
                    }
                </Card.Text>
            </Card.Body>
            </Card>
            {currentUser.type==='practitioner'&&
                <ListOfRequests offeredServices={offeredServices} setOfferedServices={setOfferedServices} />
            }
            {currentUser.type!=='practitioner'&&
                <Button
                variant="warning rounded-pill text-dark px-5 my-5"
                // onClick={()=>}
                >Publish</Button>
            }
        </div>
    )
}

export default Dashboard