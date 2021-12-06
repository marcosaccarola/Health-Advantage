import { Card } from "react-bootstrap"

const Message=({currentUserAnswer})=>{
    return(
        <div>
            <Card className='border-info bg-info text-dark mx-5 my-3'>
                {currentUserAnswer.comments.map(c=>
                        <Card className='border-info bg-dark text-info'>
                            <Card.Body>
                                <Card.Title className='text-left'>{c.userName}</Card.Title>
                                <Card.Title className='text-left mx-4'>{c.text}</Card.Title>
                            </Card.Body>
                        </Card>
                    )
                }
            </Card>
        </div>
    )
}

export default Message