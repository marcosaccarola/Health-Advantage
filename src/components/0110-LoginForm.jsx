import { useState } from "react"
import { Form } from "react-bootstrap"
import practitioners from '../dbExample/practitioners.json'
import patients from '../dbExample/patients.json'

const LoginRegisterForm=({setCurrentUser})=>{

    const[emailListener,setEmailListener]=useState('')
    const handleChangeEmail=(e)=>{
        setEmailListener(e.target.value)
        checkBothIfMatch()
    }

    const[pwListener,setPwListener]=useState('')
    const handleChangePw=(e)=>{
        setPwListener(e.target.value)
        checkBothIfMatch()
    }

    const checkBothIfMatch=()=>{
        const matchUser=
            practitioners.find((obj)=>(obj.email===emailListener&&obj.password===pwListener))
            ||
            patients.find((obj)=>(obj.email===emailListener&&obj.password===pwListener))
        if(matchUser){
            setCurrentUser(matchUser)
        }
    }

    return(
        <div>
            <Form.Group style={{position:'absolute',marginLeft:'30%',marginRight:'30%',marginTop:180,minWidth:400}}>
                <Form.Control 
                    className='bg-light text-secondary border-info' 
                    size="lg" type="text" 
                    value={emailListener}
                    onChange={(e)=>handleChangeEmail(e)}
                    placeholder="email" />
                <br />
                <Form.Control
                    className='bg-light text-secondary border-info'
                    size="lg" type="password"
                    value={pwListener}
                    onChange={(e)=>handleChangePw(e)}
                    placeholder="password" />
            </Form.Group>
        </div>
    )
}

export default LoginRegisterForm