import LandingInterface from "./0100-LandingInterface"
import {useEffect, useState} from 'react'
import Dashboard from "./0200-Dashboard"
import {Button} from "react-bootstrap"
import requestsToIntervention from '../dbExample/requestsToIntervention.json'

const Home=()=>{
    const[currentUser,setCurrentUser]=useState(
    {
        "userId":"franca66574812",
        "email":"franca.test@gmail.com",
        "password":"12345678",
        "zipcode":24151,
        "type":"patient",
        "firstName":"Franca",
        "lastName":"Francofolin",
        "info":"just looking for aperitif",
        "photo":"",
        "addedAt":"2021-02-02T06:12:26.668Z",
        "updatedAt":"2021-02-02T06:12:48.930Z"
    }
    )

    const[currentPosition,setCurrentPosition]=useState(30135)

    const[requests,setRequests]=useState()
    useEffect(() => {
        setRequests(requestsToIntervention)
    }, [])

    return (
        <div>
            {currentUser&&
            <div className='row justify-content-end mt-5'>
                <Button
                    variant={currentUser.type==='practitioner'?"info rounded-pill text-dark px-5":"warning rounded-pill text-dark px-5"}
                    onClick={()=>setCurrentUser()}
                    >Logout</Button>
            </div>
            }

            {currentUser
                ?<Dashboard currentUser={currentUser} requests={requests} setRequests={setRequests} />
                :<LandingInterface setCurrentUser={setCurrentUser} />
            }
        </div>
    )
}

export default Home



