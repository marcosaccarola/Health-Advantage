import { useEffect } from 'react'
import { Card,Button } from 'react-bootstrap'
import { addIntervention } from '../utilities/fetches.js'
import { getListOfInterventions } from '../utilities/fetches.js'

const ListOfRequests=({requests,setRequests,offeredServices,setOfferedServices,currentUser,setCurrentUser})=>{
    useEffect(() => {
        getListOfInterventions({setRequests})
    }, [])

    const offerYourService=(interventionId)=>{
        // setOfferedServices(prevRequests=>[...prevRequests,request])
        const userId=currentUser._id
        addIntervention({interventionId,userId,setCurrentUser})
    }
    const withdrawYourService=(intervention)=>{
        // setOfferedServices(offeredServices.filter((r)=>r!==request))
    }
    // const interventionDate=(d)=>{
    //     // const year=d.toString.getFullYear()
    //     // console.log(year)

    //     // console.log(d)
    //     const yeah=d.toISOString()
    //     console.log(yeah)
    // }

    return(

            <Card
                style={{backgroundColor:'#E9ECEF',width: '80rem' }} 
                className='border-info text-light mx-auto my-5'>
                <div className='mt-4 mb-5'></div>
            {requests&&requests.slice(0).reverse().map((intervention)=>               
                <Card 
                style={{ width: '70rem', borderWidth:2 }} 
                className='border-muted text-light mx-auto mb-5'>
                    <Card.Body>

                        <div className='row justify-content-between mx-5'>
                            <div className='my-1'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                    Intervention requested</Card.Title>
                                <Card.Title className='text-dark row justify-content-start ml-2'>
                                    {intervention.interventionRequested}</Card.Title>
                            </div>
                            <div className='my-1'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                    Last Update</Card.Title>
                                <Card.Title className='text-dark row justify-content-end'>
                                    {new Date(intervention.updatedAt).toLocaleDateString()}</Card.Title>
                            </div>
                        </div>
                        <div className='row mx-5'>
                            <div className='my-1'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                    Info</Card.Title>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start ml-2'>
                                    {intervention.moreInfo}</Card.Title>
                            </div>
                        </div>

                            {
                                (offeredServices.indexOf(intervention)===-1)
                                ?(
                                <Button 
                                    style={{borderWidth:2 }}
                                    className="bg-light rounded-pill text-dark border-info px-5 mt-4"  
                                    onClick={()=>offerYourService(intervention._id)}>
                                    offer your service
                                </Button>)
                                :(
                                <div className='row justify-content-end mr-5'>
                                <Button 
                                    style={{borderWidth:2 }}
                                    className="bg-light rounded-pill text-dark border-info px-5 mt-4"  
                                    onClick={()=>withdrawYourService(intervention)}>
                                    withdraw your offer
                                </Button>
                                </div>)
                            }
                    </Card.Body>
                </Card>       
            )}
                <div className='mt-3 mb-3'></div>
            </Card>
        // </div>
    )
}

export default ListOfRequests