import { Card,Button } from "react-bootstrap"
import SendInfoToPatient from "./0211-SendInfoToPatient"

const OfferedServices=({offeredServices,currentUser})=>{

    const openInfo=(reply)=>{
        alert(`info about ${reply.userId}`)
    }
    const sendMessage=(reply)=>{
        alert(`message sent at ${reply.userId}`)
    }

    return(
        <div>


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
                            <Card.Title>Intervent type: <div className='text-light'>{reply.interventionRequested}</div></Card.Title>
                        </Button>
                        <Button 
                            variant="info rounded-pill text-dark" 
                            onClick={()=>sendMessage(reply)}>Send a message to patient</Button>
                    </div>
                    </Card.Body>
                    {reply.answers.map(answer=>answer.userId===currentUser.userId
                    &&
                    <SendInfoToPatient answer={answer} />)}
                </Card>
            ))}
        </div>
    )

}

export default OfferedServices