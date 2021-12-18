import { useState } from "react"
import { Card,Button, Row, Col,Image } from "react-bootstrap"
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
                    <Row className='container-fluid border rounded mb-4'>

                        <Row className='container-fluid mx-4 mt-4'>
                            <Col className='my-1 ml-auto'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                    Intervention requested</Card.Title>
                                <Card.Title className='text-dark row justify-content-start ml-2'>
                                    {intervention.interventionRequested}</Card.Title>
                            </Col>
                            <Col className='my-1'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-end'>
                                    Intervention's location</Card.Title>
                                <Card.Title className='text-dark row justify-content-end'>
                                    {intervention.zipcode}</Card.Title>
                            </Col>
                        </Row>


                        <Row className='container-fluid mx-4 mt-4'>
                            <Col className='my-1'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                    Info</Card.Title>
                                <Card.Title className='font-weight-normal row justify-content-start ml-2'>
                                    {intervention.moreInfo}</Card.Title>
                            </Col>
                        </Row>


                        <Row className='container-fluid justify-content-end mx-4 mt-3 mb-4'>
                            <Button 
                                className='rounded-pill bg-light text-dark border-warning px-5'
                                onClick={()=>handleMessages(intervention.requestId)}>Modify
                            </Button>
                        </Row>

                        <Row className='container-fluid mx-4'>
                            <Col className='my-1'>
                                {intervention.answers.length!==0&&
                                    <Card.Title className='text-muted font-weight-normal row mb-4'>
                                        Answers:</Card.Title>
                                }
                                {intervention.answers.length!==0&&intervention.answers.map((a)=>
                                <Row className='pink border rounded mb-4 mx-5'>
                                <Col sm={2} className=' mb-2'>
                                <Image src={a.photo} 
                                    style={{width:100,height:100,objectFit:'cover',borderRadius:'50%'}}
                                    className='ml-4 mt-3'
                                    />
                                </Col>
                                <Col sm={4} className='mt-3 mb-2'>
                                    <Card.Title className='text-muted font-weight-normal row justify-content-start ml-2'>
                                        New service offer from:</Card.Title>
                                    <Card.Title className=' font-weight-bold row justify-content-start ml-2'>
                                        {a.profession} {a.firstName} {a.lastName}</Card.Title>

                                    <Card.Title className=' font-weight-bold row justify-content-start ml-2'>
                                        <a href=''>{a.email}</a></Card.Title>
                                </Col>
                                <Col sm={5} className='mt-3 mb-2'>
                                    <Card.Title className='text-muted font-weight-normal row justify-content-start ml-2'>
                                        Info:</Card.Title>
                                    <Card.Title className='text-muted font-weight-normal row justify-content-start ml-2'>
                                        {a.educationalQualification}</Card.Title>
                                    <Card.Title className='text-muted font-weight-normal row justify-content-start ml-2'>
                                        {a.medicalBoard}</Card.Title>
                                </Col>
                                </Row>
                                )}
                            </Col>
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

                </Row>
        </>
    )
}

export default ThisPatientInterventions