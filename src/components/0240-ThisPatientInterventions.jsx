import { useEffect, useState } from "react"
import { Card,Button, Row, Col } from "react-bootstrap"
// import MoreInterventionInfo from "./0211-MoreInterventionInfo"
import Messages from "./0212-Messages"
import './0000-Home.css'

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
        <>
            {/* {requests&&requests.filter(r=>r.userId===currentUser.userId).map((reply)=>( */}
            {/* {currentUser&&currentUser.published.map((intervention)=>( */}
            {/* , backgroundColor:'#E9ECEF' */}
                {/* <Card 
                    key={intervention.requestId} 
                    style={{ width: '50rem', borderWidth:2, backgroundColor:'#E9ECEF' }} 
                    className='border-muted text-light mx-auto my-3'>
                    <Card.Body> */}
                        {/* <div className='row mx-4'>
                        </div> */}

                        <Row className='container-fluid mx-4 mt-4'>
                            <Col className='my-1 ml-auto'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                    Intervention requested</Card.Title>
                                <Card.Title className='text-dark row justify-content-start'>
                                    {intervention.interventionRequested}</Card.Title>
                            </Col>
                            <Col className='my-1'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-end'>
                                    Intervention's location</Card.Title>
                                <Card.Title className='text-dark row justify-content-end'>
                                    {intervention.zipcode}</Card.Title>
                            </Col>
                        </Row>


                        <Row className='container-fluid mx-4'>
                            <Col className='my-1'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                    Info</Card.Title>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start ml-2'>
                                    {intervention.moreInfo}</Card.Title>
                            </Col>
                        </Row>

                        <Row className='container-fluid justify-content-end mx-4 mt-3 mb-4'>
                            {/* <Button 
                                style={{borderWidth:2}}
                                className="bg-light rounded-pill text-dark border-warning px-5" 
                                onClick={()=>handleInterventInfo(intervention.requestId)}>
                                    More info
                            </Button> */}
                            <Button 
                                // style={{borderWidth:2}}
                                // className="bg-light rounded-pill text-dark border-warning px-5 mt-4" 
                                // className='nudeButtons'
                                // variant='warning'
                                className='rounded-pill bg-light text-dark border-warning px-5'
                                onClick={()=>handleMessages(intervention.requestId)}>Modify
                            </Button>
                        </Row>

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
                    {/* </Card.Body>
                </Card> */}
            {/* ))} */}
        </>
    )
}

export default ThisPatientInterventions