import { Card } from "react-bootstrap"

const Message=()=>{
    return(
        <div>
            <Card className='border-info bg-info text-dark'>
                <Card.Body>
                    <Card.Title className='text-left'>USER</Card.Title>
                    <Card.Title className='text-left text-light mx-4'>TEXT</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Message