import { useState } from "react"
import {Button, Card, Form} from "react-bootstrap"
import {publishIntervention} from '../utilities/fetches.js'

const PublishForm=({currentUser,setCurrentUser,requests,setRequests})=>{

    const[formIsOpen,setFormIsOpen]=useState(false)
    const handleForm=()=>{
        formIsOpen===false?setFormIsOpen(true):setFormIsOpen(false)
    }

    const[zipcode,setZipcode]=useState()
    const[intervention,setIntervention]=useState()
    const[info,setInfo]=useState()

    // *_________________________________________ ONLY-FE ver.
    // const sendRequest=()=>{
    //     const requestObj={
    //         "requestId":"example6666",
    //         "userId":currentUser.userId,
    //         "zipcode":zipcode,
    //         "interventionRequested":intervention,
    //         "moreInfo":info,
    //         "answers":[],
    //         "addedAt":new Date(),
    //         "updatedAt":new Date()
    //     }
    //     setRequests(prevState=>[...prevState,requestObj])
    //     handleForm()
    //     alert('Request sent!')
    // }

    const sendRequest=()=>{
        const requestObj={
            "userId":currentUser._id,
            "zipcode":zipcode,
            "interventionRequested":intervention,
            "moreInfo":info
        }
        handleForm()
        publishIntervention({requestObj,setCurrentUser})
        alert('Request sent!')
    }

    return(
        <div>
            <Button
                style={{borderWidth:4}}
                className="border-warning rounded-pill bg-light text-dark px-5 my-5" 
                onClick={handleForm}
                >{formIsOpen===false?'Publish a request':'Cancel'}
            </Button>

            {formIsOpen===true&&
                <div>
                    <Card 
                        style={{ width: '80rem', borderWidth:8 }}
                        className='text-dark bg-light border-warning'
                        >
                        <Form className='mx-5 my-5'>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control 
                                    type="number" placeholder="zipcode of the intervention site"
                                    onChange={((e)=>setZipcode(e.target.value))} />
                            </Form.Group>

                            <Form.Group className='my-4' controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="text" 
                                    placeholder="type of intervention (e.g. blood pressure measurement, medication, injection)" 
                                    onChange={(e)=>setIntervention(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control 
                                    type="text" 
                                    placeholder="more info (e.g. days of the week and times of preference, skills required)"
                                    onChange={((e)=>setInfo(e.target.value))} />
                            </Form.Group>
                        </Form>
                    </Card>


                    <Button
                        style={{borderWidth:4}}
                        className="border-warning rounded-pill bg-light text-dark px-5 my-5" 
                        onClick={sendRequest}
                        >Publish
                    </Button>

                </div>
            }
        </div>
    )
}

export default PublishForm