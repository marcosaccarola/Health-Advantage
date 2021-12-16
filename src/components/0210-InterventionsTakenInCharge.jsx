import { useEffect, useState } from "react"
import { Card,Button } from "react-bootstrap"
import { withdrawService } from "../utilities/fetches"
// import MoreInterventionInfo from "./0211-MoreInterventionInfo"
import Messages from "./0212-Messages"

const InterventionsTakenInCharge=({intervention,currentUser,setCurrentUser})=>{
    useEffect(() => {

    }, [])

    // const[openedMoreInterventInfo,setOpenedMoreInterventInfo]=useState([])
    // const handleInterventInfo=(id)=>{
    //     openedMoreInterventInfo.indexOf(id)===-1
    //         ?setOpenedMoreInterventInfo(prevState=>[...prevState,id])
    //         :setOpenedMoreInterventInfo(prevState=>prevState.filter(e=>e!==id))
    // }

    // const[messagesIsOpen,setMessageIsOpen]=useState([])
    // const handleMessages=(id)=>{
    //     messagesIsOpen.indexOf(id)===-1
    //         ?setMessageIsOpen(prevState=>[...prevState,id])
    //         :setMessageIsOpen(prevState=>prevState.filter(e=>e!==id))
    // }

    const sendMessage=(reply)=>{
        alert(`message sent at ${reply.userId}`)
    }

    const withdraw=(interventionId)=>{
        const userId=currentUser._id
        withdrawService({userId,interventionId,setCurrentUser})
    }

    return(
        <div>
            {/* {offeredServices.map((reply)=>( */}
                <Card 
                    key={intervention.requestId} 
                    style={{ width: '70rem'}} 
                    className='border-muted text-light mx-auto mb-4'
                    >
                    <Card.Body>
                    {/* <div className='row justify-content-between mx-5 mt-4 mb-5 text-light'>
                        <Card.Title className='text-info'>{intervention.position}</Card.Title>
                    </div>
                    <div className='row justify-content-between mx-5 mt-4 mb-3 text-light'>
                        <Button 
                            variant="info rounded-pill text-dark px-5" 
                            onClick={()=>handleInterventInfo(intervention.requestId)}>
                            <Card.Title>
                                Intervent info:<div className='text-light'>{intervention.interventionRequested}</div>
                            </Card.Title>
                        </Button>
                        <Button 
                            variant="info rounded-pill text-dark" 
                            onClick={()=>handleMessages(intervention.requestId)}>Send a message to patient
                        </Button>
                    </div> */}
                    <div className='row justify-content-between mx-5'>
                        <div className='my-1'>
                            <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                Intervention requested</Card.Title>
                            <Card.Title className='text-dark row justify-content-start ml-2'>
                                {intervention.interventionRequested}</Card.Title>
                        </div>
                        <div className='my-1'>
                            <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                Intervention's location</Card.Title>
                            <Card.Title className='text-dark row justify-content-end'>
                                {intervention.zipcode}</Card.Title>
                        </div>
                    </div>
                    <div className='row mx-5'>
                        <div className='my-1'>
                            <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                Info</Card.Title>
                            <Card.Title className='text-muted font-weight-normal row justify-content-start ml-2'>
                                {intervention.moreInfo}</Card.Title>
                        </div>
                    </div>
                    <div className='row justify-content-end mx-5 mt-3 text-light'>
                        <Button 
                            style={{borderWidth:2}}
                            className="bg-light rounded-pill text-dark border-info px-5 mt-4" 
                            onClick={()=>withdraw(intervention._id)}>Withdraw your offer to intervention
                        </Button>
                    </div>

                {/* {openedMoreInterventInfo.indexOf(intervention.requestId)!==-1&&
                    <Card className='border-info bg-info text-dark'>
                        <Card.Body>
                            <Card.Title className='text-left'>Intervent type: </Card.Title>
                            <Card.Title className='text-left text-light mx-4'>{intervention.interventionRequested}</Card.Title>
                            <Card.Title className='text-left mt-5'>Info:</Card.Title>
                            <Card.Title className='text-left mx-4'>{intervention.moreInfo}</Card.Title>
                        </Card.Body>
                    </Card>
                } */}

                {/* {(messagesIsOpen.indexOf(intervention.requestId)!==-1)&&
                    <Messages intervention={intervention} currentUser={currentUser} />
                
                } */}
                    </Card.Body>
                </Card>
            {/* ))} */}
        </div>
    )
}

export default InterventionsTakenInCharge