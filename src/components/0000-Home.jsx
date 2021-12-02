import LandingInterface from "./0100-LandingInterface"
import {useState} from 'react'
import Dashboard from "./0200-Dashboard"
import {Button} from "react-bootstrap"

const Home=()=>{
    const[currentUser,setCurrentUser]=useState(
    {
        "userId":"marcovxcbjlguhfk",
        "email":"test@gmail.com",
        "password":"12345678",
        "zipcode":30125,
        "type":"practitioner",
        "firstName":"Marco",
        "lastName":"Ginepri",
        "age":42,
        "profession":"nurse",
        "educationalQualification":"Laurea Scienze Infermieristiche",
        "medicalBoard":"Ordine degli Infermieri di Bologna",
        "bio":"I am testing the application (marco)",
        "photo":"",
        "specializations":"specializations text example (marco)",
        "InterventionsTakenInCharge":[],
        "addedAt":"2021-02-02T06:12:26.668Z",
        "updatedAt":"2021-02-02T06:12:48.930Z"
    }
    )

    const[currentPosition,setCurrentPosition]=useState(30135)

    return (
        <div>
            {currentUser&&
            <div className='row justify-content-end mt-5'>
                <Button
                    variant="info rounded-pill text-dark px-5"
                    onClick={()=>setCurrentUser()}
                    >Logout</Button>
            </div>
            }

            {currentUser
                ?<Dashboard currentUser={currentUser} />
                :<LandingInterface setCurrentUser={setCurrentUser} />
            }
        </div>
    )
}

export default Home



