import { Card,Button } from "react-bootstrap"
import SendInfoToPatient from "./0211-SendInfoToPatient"


const OfferedServices=({offeredServices})=>{

    const openInfo=(reply)=>{
        alert(`info about ${reply.userId}`)
    }
    const sendMessage=(reply)=>{
        alert(`message sent at ${reply.userId}`)
    }

    return(
        <div>
            OFFERED SERVICES:
            {offeredServices.map((reply)=>(
                <Card style={{ width: '70rem' }} className='text-light bg-dark my-3 mx-auto'>
                    <Card.Body>
                    <div className='row justify-content-between mx-5 mt-4 mb-5 text-light'>
                        <Card.Title className='text-info'>{reply.addedAt}</Card.Title>
                        <Card.Title className='text-info'>{reply.position}</Card.Title>
                    </div>
                    <div className='row justify-content-between mx-5 mt-4 mb-3 text-light'>
                        <Button 
                            variant="info rounded-pill text-dark px-5" 
                            onClick={()=>openInfo(reply)}>
                            <Card.Title>{reply.interventionRequested}</Card.Title>
                        </Button>
                        {/* <div className='bg-info rounded-pill px-5'>
                            <Card.Title>{reply.interventionRequested}</Card.Title>
                        </div> */}
                        <Button 
                            variant="info rounded-pill text-dark" 
                            onClick={()=>sendMessage(reply)}>Send info to patient</Button>
                    </div>
                    </Card.Body>
                    {reply.answers.length!==0&&<SendInfoToPatient reply={reply} />}
                </Card>
            ))}
        </div>
    )

}

export default OfferedServices