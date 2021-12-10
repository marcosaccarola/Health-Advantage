import { useEffect } from 'react'
import { Card,Button } from 'react-bootstrap'
import { getListOfInterventions } from '../utilities/fetches.js'

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
        <div className='mt-5'>
            {requests&&requests.map((request)=>               
                <Card style={{ width: '70rem' }} className='text-light bg-dark my-3 mx-auto'>
                    <Card.Body>
                        <div className='row justify-content-between mx-5 mt-4 mb-5 text-light'>
                            <Card.Title className='text-info'>{request.position}</Card.Title>
                        </div>
                        <Card.Text className='row justify-content-start text-info mx-5'>
                            {request.interventionRequested}
                        </Card.Text>
                            {
                                (offeredServices.indexOf(request)===-1)
                                ?(
                                <Button variant="info rounded-pill text-dark" onClick={()=>offerYourService(request)}>
                                    offer your service
                                </Button>)
                                :(
                                <div className='row justify-content-end mr-5'>
                                <Button variant="info rounded-pill text-dark" onClick={()=>withdrawYourService(request)}>
                                    withdraw your offer
                                </Button>
                                </div>)
                            }
                    </Card.Body>
                </Card>       
            )
            }
        </div>
    )
}

export default ListOfRequests