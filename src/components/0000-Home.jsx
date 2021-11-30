import LandingInterface from "./0100-LandingInterface"
import {useState} from 'react'
import Dashboard from "./0200-Dashboard"

const Home=()=>{
    const[currentUser,setCurrentUser]=useState({"userId":"1234","email":"userEmail@gmail.com","requests":[]})
    // {"userId":"1234","email":"userEmail@gmail.com","requests":[]}
    const[currentPosition,setCurrentPosition]=useState(30135)

    return (
        <div>
            {currentUser
                ?<Dashboard currentUser={currentUser} currentPosition={currentPosition} />
                :<LandingInterface />
            }
        </div>
    )
}

export default Home



