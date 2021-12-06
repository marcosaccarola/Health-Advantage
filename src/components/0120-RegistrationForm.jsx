import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

const RegistrationForm=({showProfessionalsForm,setNewUser})=>{
    const personalDataSaver=()=>{
        setNewUser({
            "email":email,
            "password":pw,
            "zipcode":zipcode
        })
    }
    const[email,setEmail]=useState()
    const[pw,setPw]=useState()
    const[zipcode,setZipcode]=useState()
    const[type,setType]=useState()
    useEffect(() => {
        showProfessionalsForm===true?setType('practitioner'):setType('patient')
    },[showProfessionalsForm])
    const[firstName,setFirstName]=useState()
    const[lastName,setLastName]=useState()
    const[age,setAge]=useState()
    const[profession,setProfession]=useState()
    const[edu,setEdu]=useState()
    const[board,setBoard]=useState()
    const[bio,setBio]=useState()
    
    return(
        <div>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="email" placeholder="your email" 
                        onChange={(e)=>(setEmail(e.target.value),personalDataSaver())} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="password" placeholder="choose a password"
                        onChange={((e)=>setPw(e.target.value))} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="number" placeholder="enter your zipcode here"
                        onChange={((e)=>setZipcode(e.target.value))} />
                </Form.Group>

            {showProfessionalsForm===true&&
            <div>      
                    <Form.Text>mandatory personal data</Form.Text>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="text" placeholder="first name"
                        onChange={((e)=>setFirstName(e.target.value))} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="text" placeholder="last name"
                        onChange={((e)=>setLastName(e.target.value))} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="number" placeholder="age"
                        onChange={((e)=>setAge(e.target.value))} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="text" placeholder="profession"
                        onChange={((e)=>setProfession(e.target.value))} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="text" placeholder="educational qualification"
                        onChange={(e)=>(setEdu(e.target.value))} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="text" placeholder="medical board"
                        onChange={(e)=>(setBoard(e.target.value))} />
                </Form.Group>

                    <Form.Text>optional personal data</Form.Text>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea" 
                        placeholder='a few words about your services and a passport photo 
                            will increase the chances of patients choosing you by 65%!' 
                        rows={3}
                        onChange={(e)=>(setBio(e.target.value))} />
                </Form.Group>

                <Form.Group controlId="formFile">
                    <Form.Control type="file" size="sm" />
                </Form.Group>
            </div>
            }
        </div>
    )
}

export default RegistrationForm