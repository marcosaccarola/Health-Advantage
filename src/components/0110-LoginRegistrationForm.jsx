import { useState } from "react"
import { Form } from "react-bootstrap"
import usersDataForAFakeLogin from '../utils/users.json'

const LoginRegisterForm=({setCurrentUser})=>{
    const[emailListener,setEmailListener]=useState('')
    const handleChangeEmail=(e)=>{
        setEmailListener(e.target.value)
        matchChecker()
    }
    const[pwListener,setPwListener]=useState('')
    const handleChangePw=(e)=>{
        setPwListener(e.target.value)
        matchChecker()
    }
    const matchChecker=()=>{
        const matchUser=usersDataForAFakeLogin.find((obj)=>(obj.email===emailListener&&obj.password===pwListener))
        if(matchUser){
            setCurrentUser(matchUser)
        }
    }

    return(
        <div>
            <Form.Group style={{position:'absolute',marginLeft:'30%',marginRight:'30%',marginTop:180,minWidth:400}}>
                <Form.Control 
                    className='bg-light text-secondary border-info' 
                    // style={{borderWidth:2}}
                    size="lg" type="text" 
                    value={emailListener}
                    onChange={(e)=>handleChangeEmail(e)}
                    placeholder="email" />
                <br />
                <Form.Control
                    className='bg-light text-secondary border-info'
                    // style={{borderWidth:2}}
                    size="lg" type="password"
                    value={pwListener}
                    onChange={(e)=>handleChangePw(e)}
                    placeholder="password" />
            </Form.Group>
        </div>
    )
}

export default LoginRegisterForm