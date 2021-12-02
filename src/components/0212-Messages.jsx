import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"

// const Messages=({answer})=>{
//     useEffect(() => {
//         console.log(answer)
//     },[])
//     return(
//         <div>
//             {answer.comments.map((c)=>(
//             <Card className='bg-dark text-info border-info mx-3 my-3'>
//                 <Card.Text className='mx-2 row justify-text-start'>
//                     {c.userName} : {c.text}
//                 </Card.Text>
//             </Card> ) 
//             )}
//         </div>
//     )
// }

const Messages=({reply,currentUser})=>{
    const[currentUserAnswer]=useState(reply.answers.find(r=>r.userId===currentUser.userId))
    //const currentUserAnswer=reply.answers.filter(r=>r.userId===currentUser.userId)
        useEffect(() => {
            console.log(currentUserAnswer)
        },[])

    return(
        <div>
            {currentUserAnswer
            ?
                <Card className='border-info bg-info text-dark'>
                    <Card.Body>
                        <Card.Title className='text-left'>USER</Card.Title>
                        <Card.Title className='text-left text-light mx-4'></Card.Title>
                        <Card.Title className='text-left mt-5'>TEXT</Card.Title>
                        <Card.Title className='text-left mx-4'></Card.Title>
                    </Card.Body>
                </Card>
            :
                <Card className='border-info bg-info text-dark'>
                    <Card.Body>
                        <Card.Title className='text-left'>no messages here</Card.Title>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}

export default Messages