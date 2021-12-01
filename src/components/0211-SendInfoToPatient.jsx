import { useEffect } from "react"
import { Card } from "react-bootstrap"

const SendInfoToPatient=({answer})=>{
    useEffect(() => {
        console.log(answer)
    },[])
    return(
        <div>
            {answer.comments.map((c)=>(
            <Card className='bg-dark text-info border-info mx-3 my-3'>
                <Card.Text className='mx-2 row justify-text-start'>
                    {c.userName} : {c.text}
                </Card.Text>
            </Card> ) 
            )}
        </div>
    )
}

export default SendInfoToPatient