import LandingInterface from "./0100-LandingInterface"
import {useEffect, useState} from 'react'
import Dashboard from "./0200-Dashboard"
import {Button,Card} from "react-bootstrap"
//! import { getListOfInterventions } from "../utilities/fetches"
import doctor from '../assets/banner-img.png'
import { AiOutlineEyeInvisible,AiOutlineLock,AiOutlineSmile } from "react-icons/ai";


const Home=()=>{
    const[currentUser,setCurrentUser]=useState()
    const[requests,setRequests]=useState()
    useEffect(() => {
        //! getListOfInterventions({setRequests})
    }, [])

    return (
        <div className='' style={{width: '100%'}}>

            <div style={{width:'100%',minHeight:'100vh', background:'#FEEBEA'}}>
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

            <div 
                style={{width: '100%',minHeight:'50vh',background:'#FFFFFF',position:'absolute',zIndex:'1',color:'#2e4450',fontSize:20}}
                className='row justify-content-center mx-auto'
                >
                <Card style={{ width: '24rem', background:'#FEEBEA' }} className='border-0 mx-5 my-5'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <AiOutlineEyeInvisible size='96px' style={{color:'#2e4450'}} />
                        <Card.Title>no personal data required</Card.Title>
                        <Card.Text>
                        email and zipcode are enough, then choose a password and publish your first request for home assistance
                        </Card.Text>
                        <Button
                            style={{width:'8rem',position:'absolute',bottom:'2rem',right:'8rem'}}
                            >Read more</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem', background:'#FEEBEA' }} className='border-0 mx-5 my-5'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body className=''>
                        <AiOutlineSmile size='96px' style={{color:'#2e4450'}} />
                        <Card.Title>it's completely free</Card.Title>
                        <Card.Text>
                        and it will be forever free, no credit card required
                        </Card.Text>
                        <Button
                            style={{width:'8rem',position:'absolute',bottom:'2rem',right:'8rem'}}
                            >Read more</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '24rem', background:'#FEEBEA' }} className='border-0 mx-5 my-5'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <AiOutlineLock size='96px' style={{color:'#2e4450'}} /> 
                        <Card.Title>all data is encrypted</Card.Title>
                        <Card.Text>
                        and all practitioners are asked for documents certifying qualification for the medical role
                        </Card.Text>
                        <Button
                            style={{width:'8rem',position:'absolute',bottom:'2rem',right:'8rem'}}
                            >Read more</Button>
                    </Card.Body>
                </Card>
            </div>

            <div style={{width: '100%',minHeight:'100vh',background:'#FEEBEA',marginTop:'50vh'}}>

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


