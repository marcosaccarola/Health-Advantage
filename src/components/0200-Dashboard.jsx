import { useEffect, useState } from "react"
import { Card,Button } from "react-bootstrap"
import InterventionsTakenInCharge from "./0210-InterventionsTakenInCharge"
import ListOfRequests from "./0220-Requests"
import PublishForm from "./0230-PublishForm"
import RequestedInterventions from "./0240-RequestedInterventions"

const Dashboard=({currentUser,requests,setRequests})=>{
    const[offeredServices,setOfferedServices]=useState([])
    const[requestedServices,setRequestedServices]=useState([])
    useEffect(() => {
        if(requests){
            let userRequests=requests.filter(r=>r.userId===currentUser.userId)
            if(userRequests){
                setRequestedServices(userRequests)
            }
        }
    }, [])


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
                    {currentUser.type==='practitioner'
                    ?
                        (offeredServices.length===0)
                        ?
                        <div className='row justify-content-start mx-5 mb-4 text-dark'>
                            you have not yet offered your services, consult the list of service requests below and click reply
                        </div>
                        :
                        <InterventionsTakenInCharge offeredServices={offeredServices} currentUser={currentUser}/>
                    :
                        requests&&(requests.indexOf(e=>e.userId===currentUser.userId)!==-1)
                        ?
                        <div className='row justify-content-start mx-5 mb-4 text-dark'>
                            you have not yet published a request for home health care, click publish
                        </div>
                        :
                        <div>
                        <RequestedInterventions requestedServices={requestedServices} currentUser={currentUser} requests={requests}/>
                        </div>
                    }
                </Card.Text>
            </Card.Body>
            </Card>
            {currentUser.type==='practitioner'&&
                <ListOfRequests requests={requests} offeredServices={offeredServices} setOfferedServices={setOfferedServices} />
            }
            {currentUser.type!=='practitioner'&&
                <PublishForm currentUser={currentUser} requests={requests} setRequests={setRequests} />
            }
        </div>
    )
}

export default Dashboard