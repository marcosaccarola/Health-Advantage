import { useEffect } from "react"
import { Card } from "react-bootstrap"

const MoreInterventionInfo=({reply})=>{
    useEffect(() => {
        console.log('INFO: ',reply)
    },[])
    return(
    <div>
        {reply.map((reply)=>(
            <Card className='border-info bg-info text-dark'>
                <Card.Body>
                    <Card.Title className='text-left'>Intervent type: </Card.Title>
                    <Card.Title className='text-left text-light mx-4'>{reply.interventionRequested}</Card.Title>
                    <Card.Title className='text-left mt-5'>Info:</Card.Title>
                    <Card.Title className='text-left mx-4'>{reply.moreInfo}</Card.Title>
                </Card.Body>
            </Card>
            ))
        }
    </div>
    )
}

export default MoreInterventionInfo