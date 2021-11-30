import { Card,Button } from 'react-bootstrap'
import requestsExample from '../utils/requests.json'

const Requests=({setOfferedServices})=>{

    const reply=(request)=>{
        alert('added')
        setOfferedServices(prevRequests=>[...prevRequests,request])
    }

    return(
        <div className='mt-5'>
            A LIST OF REQUESTS
            {requestsExample.map((request)=>(                
                <Card style={{ width: '70rem' }} className='text-light bg-dark my-3 mx-auto'>
                    <Card.Body>
                    <div className='row justify-content-between mx-5 mt-4 mb-5 text-light'>
                        <Card.Title className='text-info'>{request.addedAt}</Card.Title>
                        <Card.Title className='text-info'>{request.position}</Card.Title>
                    </div>
                    <Card.Text className='row justify-content-start text-info mx-5'>{request.interventionRequested}</Card.Text>
                    <Button variant="info rounded-pill text-dark" onClick={()=>reply(request)}>Reply</Button>
                    </Card.Body>
                </Card>
            )
            )}
        </div>
    )
}

export default Requests