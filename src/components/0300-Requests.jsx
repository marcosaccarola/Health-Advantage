import { Card,Button } from 'react-bootstrap'
import requestsExample from '../utils/requests.json'

const Requests=({setOfferedServices})=>{

    const reply=(request)=>{
        alert('added')
        setOfferedServices(request)
    }

    return(
        <div className='mt-5'>
            {requestsExample.map((request)=>(                
                <Card style={{ width: '70rem' }} className='text-light bg-dark my-3 mx-auto'>
                    <Card.Body>
                    <div className='row justify-content-end mx-5 mt-4 mb-5 text-light'>
                        <Card.Title>{request.position}</Card.Title>
                    </div>
                    <Card.Text className='row justify-content-start mx-5'>{request.interventionRequested}</Card.Text>
                    <Button variant="success rounded-pill" onClick={()=>reply(request)}>Reply</Button>
                    </Card.Body>
                </Card>
            )
            )}
        </div>
    )
}

export default Requests