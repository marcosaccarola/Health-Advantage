import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import Message from "./0212a-Message"

const Messages=({reply,currentUser})=>{
    const[currentUserAnswer]=useState(reply.answers.find(r=>r.userId===currentUser.userId))

    return(
        <div>
            {currentUserAnswer
            ?
                <Message currentUserAnswer={currentUserAnswer} />
            :
                <Card className='border-info bg-dark text-info mx-5 my-2'>
                    <Card.Body>
                        <Card.Title className='text-left'>no messages here</Card.Title>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}

export default Messages