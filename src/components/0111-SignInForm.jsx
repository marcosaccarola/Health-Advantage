import { useState } from "react"
import { Form,Button, Row } from "react-bootstrap"
import { signInPatient } from "../utilities/fetches.js"

const SignInForm=({setCurrentUser,handleSignInModal})=>{

    const[email,setEmail]=useState('')
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const[pw,setPw]=useState('')
    const handleChangePw=(e)=>{
        setPw(e.target.value)
    }
    const[zipcode,setZipcode]=useState('')
    const handleChangeZipcode=(e)=>{
        setZipcode(e.target.value)
    }
    const[firstName,setFirstName]=useState('')
    const handleChangeFirstName=(e)=>{
        setFirstName(e.target.value)
    }
    const[lastName,setLastName]=useState('')
    const handleChangeLastName=(e)=>{
        setLastName(e.target.value)
    }
    const[bio,setBio]=useState('')
    const handleChangeBio=(e)=>{
        setBio(e.target.value)
    }
    const[photo,setPhoto]=useState('')
    const handleChangePhoto=(e)=>{
        setPhoto(e.target.value)
    }
    const signInUser=()=>{
        const reqBody={'email':email,'password':pw,'zipcode':zipcode,'role':'Patient','firstName':firstName,'lastName':lastName,'bio':bio,'photo':photo}
        signInPatient({reqBody,setCurrentUser})
        handleSignInModal()

    }

    return(
        <div>
            <Form.Group>                
                <Form.Control 
                    className='bg-light text-secondary border-info' 
                    size="lg" type="text" 
                    value={email}
                    onChange={(e)=>handleChangeEmail(e)}
                    placeholder="Email" />
                <br />
                <Form.Control
                    className='bg-light text-secondary border-info'
                    size="lg" type="password"
                    value={pw}
                    onChange={(e)=>handleChangePw(e)}
                    placeholder="Password" />
                <br />
                <Form.Control
                    className='bg-light text-secondary border-info'
                    size="lg" type="text"
                    value={zipcode}
                    onChange={(e)=>handleChangeZipcode(e)}
                    placeholder="Zip Code" />
                <br />
                <Form.Control
                    className='bg-light text-secondary border-info'
                    size="lg" type="text"
                    value={firstName}
                    onChange={(e)=>handleChangeFirstName(e)}
                    placeholder="First name" />
                <br />
                <Form.Control
                    className='bg-light text-secondary border-info'
                    size="lg" type="text"
                    value={lastName}
                    onChange={(e)=>handleChangeLastName(e)}
                    placeholder="Last name" />
                <br />
                <Form.Control
                    className='bg-light text-secondary border-info'
                    size="lg" type="text"
                    value={bio}
                    onChange={(e)=>handleChangeBio(e)}
                    placeholder="Something about you" />
                <br />
                <Form.Control
                    className='bg-light text-secondary border-info'
                    size="lg" type="text"
                    value={photo}
                    onChange={(e)=>handleChangePhoto(e)}
                    placeholder="Your photo" />
                <Row className='mx-auto'>
                    <Button 
                        className='btn-warning text-muted border-info btn-lg mt-4 ml-auto'
                        onClick={signInUser}>
                            <span className='row justify-text-start mx-2'>Sign in</span>
                    </Button>
                </Row>
            </Form.Group>

        </div>
    )
}

export default SignInForm