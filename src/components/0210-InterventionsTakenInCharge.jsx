import { useState } from "react"
import { Card,Button } from "react-bootstrap"
import MoreInterventionInfo from "./0211-MoreInterventionInfo"
import Messages from "./0212-Messages"

const InterventionsTakenInCharge=({offeredServices,currentUser})=>{

    // const[showInterventInfo,setShowInterventInfo]=useState(false)
    // const handleInterventInfo=(reply)=>{
    //     showInterventInfo===false?setShowInterventInfo(true):setShowInterventInfo(false)
    // }
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

    const sendMessage=(reply)=>{
        alert(`message sent at ${reply.userId}`)
    }

    return(
        <div>
            {offeredServices.map((reply)=>(
                <Card key={reply.requestId} style={{ width: '70rem' }} className='text-light bg-dark my-3 mx-auto'>
                    <Card.Body>
                    <div className='row justify-content-between mx-5 mt-4 mb-5 text-light'>
                        {/* <Card.Title className='text-info'>{reply.addedAt}</Card.Title> */}
                        <Card.Title className='text-info'>{reply.position}</Card.Title>
                    </div>
                    <div className='row justify-content-between mx-5 mt-4 mb-3 text-light'>
                        <Button 
                            variant="info rounded-pill text-dark px-5" 
                            onClick={()=>handleInterventInfo(reply.requestId)}>
                            <Card.Title>Intervent info:<div className='text-light'>{reply.interventionRequested}</div></Card.Title>
                        </Button>
                        <Button 
                            variant="info rounded-pill text-dark" 
                            onClick={()=>handleMessages(reply.requestId)}>Send a message to patient</Button>
                    </div>
                {openedMoreInterventInfo.indexOf(reply.requestId)!==-1&&
                    <Card className='border-info bg-info text-dark'>
                        <Card.Body>
                            <Card.Title className='text-left'>Intervent type: </Card.Title>
                            <Card.Title className='text-left text-light mx-4'>{reply.interventionRequested}</Card.Title>
                            <Card.Title className='text-left mt-5'>Info:</Card.Title>
                            <Card.Title className='text-left mx-4'>{reply.moreInfo}</Card.Title>
                        </Card.Body>
                    </Card>
                }
                {(messagesIsOpen.indexOf(reply.requestId)!==-1)&&
                    <Messages reply={reply} currentUser={currentUser} />
                
                }
                    </Card.Body>
                {/* {reply.answers.map(answer=>answer.userId===currentUser.userId
                    &&
                    <Messages answer={answer} />
                )} */}
                </Card>
            ))}
        </div>
    )

}

export default InterventionsTakenInCharge