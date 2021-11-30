import { Card } from "react-bootstrap"


const OfferedServices=({offeredServices})=>{
    return(
        <div>
            OFFERED SERVICES:
            {offeredServices.map((reply)=>(
                <Card style={{ width: '70rem' }} className='text-light bg-dark my-3 mx-auto'>
                    <Card.Body>
                    <div className='row justify-content-between mx-5 mt-4 mb-5 text-light'>
                        <Card.Title>{reply.addedAt}</Card.Title>
                        <Card.Title>{reply.position}</Card.Title>
                    </div>
                    <Card.Text className='row justify-content-start mx-5'>{reply.interventionRequested}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )

}

export default OfferedServices