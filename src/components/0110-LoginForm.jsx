import { useState } from "react"
import { Form,Button, Row } from "react-bootstrap"
// import practitioners from '../dbExample/practitioners.json'
// import patients from '../dbExample/patients.json'
import { getUser } from "../utilities/fetches.js"

const LoginRegisterForm=({setCurrentUser,currentUser,handleLoginModal})=>{

    // *_________________________________________ ONLY-FE ver.
    // const[emailListener,setEmailListener]=useState('')
    // const handleChangeEmail=(e)=>{
    //     setEmailListener(e.target.value)
    //     checkBothIfMatch()
    // }

    // const[pwListener,setPwListener]=useState('')
    // const handleChangePw=(e)=>{
    //     setPwListener(e.target.value)
    //     checkBothIfMatch()
    // }

    // const checkBothIfMatch=()=>{
    //     const matchUser=
    //         practitioners.find((obj)=>(obj.email===emailListener&&obj.password===pwListener))
    //         ||
    //         patients.find((obj)=>(obj.email===emailListener&&obj.password===pwListener))
    //     if(matchUser){
    //         setCurrentUser(matchUser)
    //     }
    // }

    const[emailListener,setEmailListener]=useState('')
    const handleChangeEmail=(e)=>{
        setEmailListener(e.target.value)
    }
    const[pwListener,setPwListener]=useState('')
    const handleChangePw=(e)=>{
        setPwListener(e.target.value)
    }
    const loginUser=()=>{
        const reqBody={'email':emailListener,'password':pwListener}
        getUser({reqBody,setCurrentUser})
        handleLoginModal()

    }


    return(
        <div>
            <Form.Group 
                // style={{position:'absolute',marginLeft:'30%',marginRight:'30%',marginTop:180,minWidth:400}}
                >
                <Form.Control 
                    className='bg-light text-secondary border-info' 
                    size="lg" type="text" 
                    value={emailListener}
                    onChange={(e)=>handleChangeEmail(e)}
                    placeholder="Email" />
                <br />
                <Form.Control
                    className='bg-light text-secondary border-info'
                    size="lg" type="password"
                    value={pwListener}
                    onChange={(e)=>handleChangePw(e)}
                    placeholder="Password" />
                <Row className='mx-auto'>
                    <Button 
                        className='btn-warning text-muted border-info btn-lg mt-4 ml-auto'
                        onClick={loginUser}>
                            <span className='row justify-text-start mx-2'>Log in</span>
                    </Button>
                </Row>
            </Form.Group>

        </div>
    )
}

export default LoginRegisterForm