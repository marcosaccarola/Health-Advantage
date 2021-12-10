import { useEffect } from 'react'
import { Card,Button } from 'react-bootstrap'
// import { getListOfInterventions } from '../utilities/fetches.js'

const ListOfRequests=({requests,setRequests,offeredServices,setOfferedServices})=>{
    useEffect(() => {
        // getListOfInterventions(setRequests)
    }, [])

    const offerYourService=(request)=>{
        setOfferedServices(prevRequests=>[...prevRequests,request])
    }
    const withdrawYourService=(request)=>{
        setOfferedServices(offeredServices.filter((r)=>r!==request))
    }

    return(
        // <div className='mt-5'>
            <Card
                style={{ borderWidth:8 ,backgroundColor:'#E9ECEF' }} 
                className='border-info text-light mx-auto my-5'>
                <div className='mt-4 mb-5'></div>
            {requests&&requests.map((intervention)=>               
                <Card 
                style={{ width: '70rem', borderWidth:2 }} 
                className='border-muted text-light mx-auto mb-5'>
                    <Card.Body>
                        {/* <div className='row justify-content-between mx-5 mt-4 mb-5 text-light'>
                            <Card.Title className='text-info'>{request.zipcode}</Card.Title>
                        </div>
                        <Card.Text className='row justify-content-start text-info mx-5'>
                            {request.interventionRequested}
                        </Card.Text> */}
                        <div className='row justify-content-between mx-5'>
                            <div className='my-1'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                    Intervention requested</Card.Title>
                                <Card.Title className='text-dark row justify-content-start ml-2'>
                                    {intervention.interventionRequested}</Card.Title>
                            </div>
                            <div className='my-1'>
                                <Card.Title className='text-muted font-weight-normal row justify-content-start'>
                                    Intervention's location</Card.Title>
                                <Card.Title className='text-dark row justify-content-end'>
                                    {intervention.zipcode}</Card.Title>
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

                        <div className='row justify-content-end mx-5 mt-3 text-light'>
                            {/* <Button 
                                style={{borderWidth:2}}
                                className="bg-light rounded-pill text-dark border-warning px-5" 
                                onClick={()=>handleInterventInfo(intervention.requestId)}>
                                    More info
                            </Button> */}
                            {/* <Button 
                                style={{borderWidth:2}}
                                className="bg-light rounded-pill text-dark border-warning px-5 mt-4" 
                                onClick={()=>handleMessages(intervention.requestId)}>Modify this request for intervention
                            </Button> */}
                        </div>
                            {
                                (offeredServices.indexOf(intervention)===-1)
                                ?(
                                <Button 
                                    style={{borderWidth:2,backgroundColor:'#E9ECEF' }}
                                    className="rounded-pill text-dark border-info px-5 mt-4"  
                                    onClick={()=>offerYourService(intervention)}>
                                    offer your service
                                </Button>)
                                :(
                                <div className='row justify-content-end mr-5'>
                                <Button 
                                    style={{borderWidth:2,backgroundColor:'#E9ECEF' }}
                                    className="rounded-pill text-dark border-info px-5 mt-4"  
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