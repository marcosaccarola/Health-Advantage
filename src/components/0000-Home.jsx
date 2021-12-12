import LandingInterface from "./0100-LandingInterface"
import {useEffect, useState} from 'react'
import Dashboard from "./0200-Dashboard"
import {Button} from "react-bootstrap"
//! import { getListOfInterventions } from "../utilities/fetches"
import doctor from '../assets/banner-img.png'

const Home=()=>{
    const[currentUser,setCurrentUser]=useState()
    const[requests,setRequests]=useState()
    useEffect(() => {
        //! getListOfInterventions({setRequests})
    }, [])

    return (
        <div className='' style={{width: '100%'}}>
            <div style={{minHeight:'100vh', background:'#FEEBEA'}}>
                <div className='row justify-content-between'>
                    <div style={{width:'16vh',minHeight:'8vh',background:'#527c88',marginTop:'8vh',marginLeft:'24vh'}}>
                        LOGO
                    </div>
                    <div style={{width:'16vh',minHeight:'8vh',background:'#527c88',marginTop:'8vh',marginRight:'24vh'}}>
                        LOGIN
                    </div>
                </div>
                <div style={{position:'absolute',right:'24vh'}}>
                    <img src={doctor} />
                </div>
                <div style={{width:'72vh',minHeight:'8vh',background:'#527c88',marginTop:'16vh',marginLeft:'24vh'}}>
                    NAME
                </div>
                <div style={{width:'84vh',minHeight:'24vh',background:'#527c88',marginTop:'2vh',marginLeft:'24vh'}}>
                    DETAILS
                </div>
                <div className='row justify-content-between'
                    style={{position:'absolute',width:'84vh',minHeight:'8vh',marginTop:'12vh',marginLeft:'24vh'}}>
                    <div style={{width:'32vh',background:'#B5958E'}}>
                        looking for assistance
                    </div>
                    <div style={{width:'32vh',background:'#B5958E'}}>
                        licensed healthcare practitioners area
                    </div>
                </div>
            </div>
            <div style={{width: '100%',minHeight:'50vh',background:'#FFFFFF',position:'absolute',zIndex:'1'}}>

            </div>
            <div style={{width: '100%',minHeight:'50vh',background:'#FEEBEA',marginTop:'50vh'}}>

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


