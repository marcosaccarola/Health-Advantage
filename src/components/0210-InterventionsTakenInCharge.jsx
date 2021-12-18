import { useEffect, useState } from "react"
import { Card,Button } from "react-bootstrap"
import { withdrawService } from "../utilities/fetches"
// import MoreInterventionInfo from "./0211-MoreInterventionInfo"
import Messages from "./0212-Messages"

const InterventionsTakenInCharge=({intervention,currentUser,setCurrentUser})=>{
    useEffect(() => {
        console.log(intervention)
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
                <Card 
                    key={intervention.requestId} 
                    style={{ width: '70rem'}} 
                    className='border-muted text-light mx-auto mb-4'
                    >
                    <Card.Body>

                    <div className='row justify-content-between mx-5'>
                        <div className='my-1'>
                            <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                Intervention requested</Card.Title>
                            <Card.Title className='text-dark row justify-content-start ml-2'>
                                {intervention.interventionRequested}</Card.Title>
                        </div>
                        <div className='my-1'>
                            <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                Last update</Card.Title>
                            <Card.Title className='text-dark row justify-content-end'>
                                {new Date(intervention.updatedAt).toLocaleDateString()}</Card.Title>
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
                            onClick={()=>withdraw(intervention._id)}>Remove
                        </Button>
                    </div>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default InterventionsTakenInCharge