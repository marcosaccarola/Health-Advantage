import LandingInterface from "./0100-LandingInterface"
import {useEffect, useState} from 'react'
import Dashboard from "./0200-Dashboard"
import {Button} from "react-bootstrap"
import requestsToIntervention from '../dbExample/requestsToIntervention.json'

const Home=()=>{
    const[currentUser,setCurrentUser]=useState()
    const[requests,setRequests]=useState()
    useEffect(() => {
        
        setRequests(requestsToIntervention)
    }, [])

    return (
        <div>
            {currentUser&&
                <div className='row justify-content-end mt-5'>
                    <Button
                        variant={currentUser.role==='practitioner'
                            ?"info rounded-pill text-dark px-5"
                            :"warning rounded-pill text-dark px-5"}
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

/*
location (exact address)
intervention name and type
piaghe da decupito
situazioni che non vengono raccolte dal servizio pubblico (intramuscolo, flebo)
quando si infonde un farmaco, servirebbe sempre la prescrizione medica


nutrizione parenterale
nutrizione con peg

*/


