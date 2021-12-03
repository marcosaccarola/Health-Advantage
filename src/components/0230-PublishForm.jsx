import {Button} from "react-bootstrap"

const PublishForm=({currentUser})=>{
    return(
        <div>
            <Button
            variant="warning rounded-pill text-dark px-5 my-5"
            // onClick={()=>}
            >Publish</Button>
        </div>
    )
}

export default PublishForm