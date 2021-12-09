import { useEffect, useState } from "react"
import { Card,Button } from "react-bootstrap"
import MoreInterventionInfo from "./0211-MoreInterventionInfo"
import Messages from "./0212-Messages"

const ThisPatientInterventions=({intervention})=>{

    const[openedMoreInterventInfo,setOpenedMoreInterventInfo]=useState([])
    const handleInterventInfo=(id)=>{
        openedMoreInterventInfo.indexOf(id)===-1
            ?setOpenedMoreInterventInfo(prevState=>[...prevState,id])
            :setOpenedMoreInterventInfo(prevState=>prevState.filter(e=>e!==id))
    }

    const[messagesIsOpen,setMessageIsOpen]=useState([])
    const handleMessages=(id)=>{
        messagesIsOpen.indexOf(id)===-1
            ?setMessageIsOpen(prevState=>[...prevState,id])
            :setMessageIsOpen(prevState=>prevState.filter(e=>e!==id))
    }

    const sendMessage=(intervention)=>{
        alert(`message sent at ${intervention.userId}`)
    }

    return(
        <div>
            {/* {requests&&requests.filter(r=>r.userId===currentUser.userId).map((reply)=>( */}
            {/* {currentUser&&currentUser.published.map((intervention)=>( */}
                <Card key={intervention.requestId} style={{ width: '70rem' }} className='text-light bg-dark my-3 mx-auto'>
                    <Card.Body>
                        <div className='row justify-content-between mx-5 mt-4 mb-5 text-light'>
                            <Card.Title className='text-info'>{intervention.position}</Card.Title>
                        </div>
                        <div className='row justify-content-between mx-5 mt-4 mb-3 text-light'>
                            <Button 
                                variant="warning rounded-pill text-dark border-light px-5" 
                                onClick={()=>handleInterventInfo(intervention.requestId)}>
                                <Card.Title>
                                    Intervent info:<div className='text-light'>{intervention.interventionRequested}</div>
                                </Card.Title>
                            </Button>
                            <Button 
                                variant="warning rounded-pill text-dark border-light" 
                                onClick={()=>handleMessages(intervention.requestId)}>Send a message to patient
                            </Button>
                        </div>
                {openedMoreInterventInfo.indexOf(intervention.requestId)!==-1&&
                    <Card className='border-light bg-warning text-dark'>
                        <Card.Body>
                            <Card.Title className='text-left'>Intervent type: </Card.Title>
                            <Card.Title className='text-left text-light mx-4'>{intervention.interventionRequested}</Card.Title>
                            <Card.Title className='text-left mt-5'>Info:</Card.Title>
                            <Card.Title className='text-left mx-4'>{intervention.moreInfo}</Card.Title>
                        </Card.Body>
                    </Card>
                }
                {(messagesIsOpen.indexOf(intervention.requestId)!==-1)&&
                    <Messages intervention={intervention} />
                
                }
                    </Card.Body>
                </Card>
            {/* ))} */}
        </div>
    )
}

export default ThisPatientInterventions