import LandingInterface from "./0100-LandingInterface"
import {useEffect, useState} from 'react'
import Dashboard from "./0200-Dashboard"
import {Button} from "react-bootstrap"
// import { getListOfInterventions } from "../utilities/fetches"

const Home=()=>{
    const[currentUser,setCurrentUser]=useState()
    const[requests,setRequests]=useState()
    useEffect(() => {
        // getListOfInterventions({setRequests})
    }, [])

    return (
        <div className='' style={{width: '100%', minHeight:'100vh', background:'#d7baad'}}>
            <div 
                style={{
                    width:'16vh',minHeight:'8vh',background:'#16c2d5',marginTop:'8vh',marginLeft:'16vh'
                    }}>
                LOGO
            </div>

            
            {currentUser
            // &&
    // ? CURRENT USER ? LOGOUT BUTTON : ...
                // <div className='row justify-content-end mt-5'>
                //     <Button
                //         style={{borderWidth:4}}
                //         className={currentUser.role==='Practitioner'
                //             ?"border-info rounded-pill bg-light text-dark px-5"
                //             :"border-warning rounded-pill bg-light text-dark px-5"}
                //         onClick={()=>setCurrentUser()}
                //         >
                //         Logout
                //     </Button>
                // </div>
            }

            {currentUser
    // ? CURRENT USER ? DASHBOARD : LANDIN INTERFACE
                // ?<Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} requests={requests} setRequests={setRequests} />
                // :<LandingInterface setCurrentUser={setCurrentUser} currentUser={currentUser} />
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


