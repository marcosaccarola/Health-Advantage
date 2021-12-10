import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import UserInfoCard from "./0201-UserInfoCard"
import InterventionsTakenInCharge from "./0210-InterventionsTakenInCharge"
import ListOfRequests from "./0220-ListOfRequests"
import PublishForm from "./0230-PublishForm"
import ThisPatientInterventions from "./0240-ThisPatientInterventions"

const Dashboard=({currentUser,setCurrentUser,requests,setRequests})=>{
    const[offeredServices,setOfferedServices]=useState([])
    // const[requestedServices,setRequestedServices]=useState([])
    useEffect(() => {
        // if(requests){
        //     let userRequests=requests.filter(r=>r.userId===currentUser.userId)
        //     if(userRequests){
        //         setRequestedServices(userRequests)
        //     }
        // }
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

                <Card.Text>
                    {currentUser.role==='Practitioner'
                    ?
                        (offeredServices.length===0)
                        ?
                        <div className='row justify-content-start mx-5 mb-4 text-muted'>
                            <hr className='mx-5 mb-5' />
                            You have not yet offered your services, consult the list of service requests below and click reply
                        </div>
                        :
                        <div>
                            {/* {offeredServices.map((intervention)=>( */}
                            {currentUser&&currentUser.InterventionsTakenInCharge.map((intervention)=>(
                            <InterventionsTakenInCharge intervention={intervention}/>
                            ))}
                        </div>
                    :
                        // requests&&(requests.indexOf(e=>e.userId===currentUser.userId)!==-1)
                        (currentUser.published.length===0)
                        ?
                        <div className='row justify-content-start mx-5 mb-4 text-muted'>
                            <hr className='mx-5 mb-5' />
                            you have not yet published a request for home health care, click publish
                        </div>
                        :
                        <div>
                            {currentUser&&currentUser.published.map((intervention)=>(
                                <ThisPatientInterventions intervention={intervention}/>
                            ))}
                        </div>
                    }
                </Card.Text>
            </Card.Body>
            </Card>

            {currentUser.role==='Practitioner'&&
                <ListOfRequests requests={requests} setRequests={setRequests} offeredServices={offeredServices} setOfferedServices={setOfferedServices} />
            }
            {currentUser.role!=='Practitioner'&&
                <PublishForm currentUser={currentUser} setCurrentUser={setCurrentUser} requests={requests} setRequests={setRequests} />
            }
        </div>
    )
}

export default Dashboard