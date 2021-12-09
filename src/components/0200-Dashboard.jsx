import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import UserInfoCard from "./0201-UserInfoCard"
import InterventionsTakenInCharge from "./0210-InterventionsTakenInCharge"
import ListOfRequests from "./0220-Requests"
import PublishForm from "./0230-PublishForm"
import RequestedInterventions from "./0240-RequestedInterventions"

const Dashboard=({currentUser,setCurrentUser,requests,setRequests})=>{
    const[offeredServices,setOfferedServices]=useState([])
    const[requestedServices,setRequestedServices]=useState([])
    useEffect(() => {
        console.log('CURRENT USER FROM DASHBOARD',currentUser)
        if(requests){
            let userRequests=requests.filter(r=>r.userId===currentUser.userId)
            if(userRequests){
                setRequestedServices(userRequests)
            }
        }
        console.log(currentUser)
    }, [])

    return(
        <div className='mt-5'>
            <Card 
                style={{ width: '80rem', borderWidth:8 }} 
                className={currentUser.role==='Practitioner'
                    ?'text-dark bg-light border-info'
                    :'text-dark bg-light border-warning'}
                >
            <Card.Body>

                <UserInfoCard currentUser={currentUser} />

                <hr className='mb-5' />
                <Card.Text>
                    {currentUser.role==='Practitioner'
                    ?
                        (offeredServices.length===0)
                        ?
                        <div className='row justify-content-start mx-5 mb-4 text-muted'>
                            You have not yet offered your services, consult the list of service requests below and click reply
                        </div>
                        :
                            <InterventionsTakenInCharge offeredServices={offeredServices} currentUser={currentUser}/>
                    :
                        // requests&&(requests.indexOf(e=>e.userId===currentUser.userId)!==-1)
                        (currentUser.published.length===0)
                        ?
                        <div className='row justify-content-start mx-5 mb-4 text-muted'>
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

            {currentUser.role==='Practitioner'&&
                <ListOfRequests requests={requests} offeredServices={offeredServices} setOfferedServices={setOfferedServices} />
            }
            {currentUser.role!=='Practitioner'&&
                <PublishForm currentUser={currentUser} setCurrentUser={setCurrentUser} requests={requests} setRequests={setRequests} />
            }
        </div>
    )
}

export default Dashboard