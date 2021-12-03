import { useState } from "react"
import {Button, Card, Form} from "react-bootstrap"


const PublishForm=({currentUser,requests,setRequests})=>{
    const[formIsOpen,setFormIsOpen]=useState(false)
    const handleForm=()=>{
        formIsOpen===false?setFormIsOpen(true):setFormIsOpen(false)
    }

    const[zipcode,setZipcode]=useState()
    const[intervention,setIntervention]=useState()
    const[info,setInfo]=useState()

    const sendRequest=()=>{
        const requestObj={
            "requestId":"example6666",
            "userId":currentUser.userId,
            "zipcode":zipcode,
            "interventionRequested":intervention,
            "moreInfo":info,
            "answers":[],
            "addedAt":new Date(),
            "updatedAt":new Date()
        }
        setRequests(prevState=>[...prevState,requestObj])
        console.log(requests)
        handleForm()
        alert('Request sent!')
    }

    return(
        <div>
            <Button
                variant="warning rounded-pill text-dark px-5 my-5"
                onClick={handleForm}
                >{formIsOpen===false?'Publish':'Cancel'}
            </Button>
            {formIsOpen===true&&
                <Card>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control 
                            type="number" placeholder="zipcode of the intervention site"
                            onChange={((e)=>setZipcode(e.target.value))} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="text" placeholder="type of intervention (e.g. blood pressure measurement, medication, injection)" 
                            onChange={(e)=>setIntervention(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control 
                            type="text" placeholder="more info (e.g. days of the week and times of preference, skills required)"
                            onChange={((e)=>setInfo(e.target.value))} />
                    </Form.Group>

                    <Button
                        variant="success text-dark px-5"
                        onClick={sendRequest}
                        >Publish
                    </Button>

                </Card>
            }
        </div>
    )
}

export default PublishForm