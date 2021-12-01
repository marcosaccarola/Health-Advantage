import { useState } from "react"
import { Card } from "react-bootstrap"
import InterventionsTakenInCharge from "./0210-InterventionsTakenInCharge"
import ListOfRequests from "./0220-Requests"

const Dashboard=({currentUser,currentPosition})=>{
    const[offeredServices,setOfferedServices]=useState([])

    return(
        <div className='mt-5'>
            USER's DASHBOARD
            <Card style={{ width: '80rem' }} className='text-light bg-info'>
            <Card.Body>
                <div className='row justify-content-between mx-5 mt-4 mb-5 text-dark'>
                <Card.Title>{currentUser.email}</Card.Title>
                <Card.Title>{currentPosition}</Card.Title>
                </div>
                <Card.Text>
                    {(offeredServices.length===0)
                        ?<div className='row justify-content-start mx-5 mb-4 text-dark'>
                            you have not yet offered your services, consult the list of service requests below and click reply
                        </div>
                        :<InterventionsTakenInCharge offeredServices={offeredServices} currentUser={currentUser}/>
                    }
                </Card.Text>
            </Card.Body>
            </Card>

            <ListOfRequests offeredServices={offeredServices} setOfferedServices={setOfferedServices} />
        </div>
    )
}

export default Dashboard