import { useEffect, useState } from "react"
import { Card,Button } from "react-bootstrap"
// import MoreInterventionInfo from "./0211-MoreInterventionInfo"
import Messages from "./0212-Messages"

const ThisPatientInterventions=({intervention})=>{

    // *_________________________________________INTERVENTION CARDS SWITCHERS
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
            {/* , backgroundColor:'#E9ECEF' */}
                <Card 
                    key={intervention.requestId} 
                    style={{ width: '70rem', borderWidth:2, backgroundColor:'#E9ECEF' }} 
                    className='border-muted text-light mx-auto my-3'>
                    <Card.Body>
                        <div className='row mx-5'>
                                <Card.Title className='text-muted font-weight-normal mr-2'>Location:</Card.Title>
                                <Card.Title className='text-dark font-weight-normal'>{intervention.zipcode}</Card.Title>
                        </div>
                        <div className='row mx-5'>
                                <Card.Title className='text-muted font-weight-normal mr-2'>Intervention requested:</Card.Title>
                                <Card.Title className='text-dark'>{intervention.interventionRequested}</Card.Title>
                        </div>
                        <div className='row mx-5'>
                                <Card.Title className='text-muted font-weight-normal mr-2'>Info:</Card.Title>
                                <Card.Title className='text-dark font-weight-normal'>{intervention.moreInfo}</Card.Title>
                        </div>

                        <div className='row justify-content-end mx-5 mt-3 text-light'>
                            {/* <Button 
                                style={{borderWidth:2}}
                                className="bg-light rounded-pill text-dark border-warning px-5" 
                                onClick={()=>handleInterventInfo(intervention.requestId)}>
                                    More info
                            </Button> */}
                            <Button 
                                style={{borderWidth:2}}
                                className="bg-light rounded-pill text-dark border-warning px-5" 
                                onClick={()=>handleMessages(intervention.requestId)}>Modify this request for intervention
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