import { Card } from "react-bootstrap"

const sendInfoToPatient=({reply})=>{
    return(
        <Card className='bg-dark text-info ml-5 mr-auto'>
            {reply.answers}
        </Card>  
    )
}

export default sendInfoToPatient