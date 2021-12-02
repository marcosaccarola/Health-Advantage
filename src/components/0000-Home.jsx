import LandingInterface from "./0100-LandingInterface"
import {useState} from 'react'
import Dashboard from "./0200-Dashboard"

const Home=()=>{
    const[currentUser,setCurrentUser]=useState()
    // {"userId":"marco","email":"userEmail@gmail.com","requests":[]}
    const[currentPosition,setCurrentPosition]=useState(30135)

    return (
        <div>
            {currentUser
                ?<Dashboard currentUser={currentUser} currentPosition={currentPosition} />
                :<LandingInterface setCurrentUser={setCurrentUser} />
            }
        </div>
    )
}

export default Home



