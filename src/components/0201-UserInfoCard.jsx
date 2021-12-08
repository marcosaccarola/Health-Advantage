import { Card,Image } from "react-bootstrap"


const UserInfoCard=({currentUser})=>{

    return(
        <div className='row justify-content-between mx-5 mt-4 mb-4'>
            <Image src={currentUser.photo} 
                style={{width:100,height:100,objectFit:'cover',borderRadius:'50%'}}
                className='mr-5'
                />
            <div className='ml-5 text-muted'>
                <Card.Title className='row justify-content-start'>
                    Practitioner
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    Role
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    Location
                </Card.Title>
            </div>
            <div className='ml-5 text-muted'>
                <Card.Title className='row justify-content-start'>
                    :
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    : 
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    :
                </Card.Title>
            </div>
            <div className='ml-5 mr-5'>
                <Card.Title className='row justify-content-start'>
                    {currentUser.firstName} {currentUser.lastName}
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    {currentUser.profession} 
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    {currentUser.zipcode}
                </Card.Title>
            </div>
            <div className='ml-5 text-muted'>
                <Card.Title className='row justify-content-start'>
                    Education
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    Board
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    Specializations
                </Card.Title>
            </div>
            <div className='ml-5 text-muted'>
                <Card.Title className='row justify-content-start'>
                    :
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    : 
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    :
                </Card.Title>
            </div>
            <div className='ml-5 mr-auto mr-5'>
                <Card.Title className='row justify-content-start'>
                    {currentUser.firstName} {currentUser.lastName}
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    {currentUser.profession} 
                </Card.Title>
                <Card.Title className='row justify-content-start'>
                    {currentUser.specializations}
                </Card.Title>
            </div>
        </div>
    )
}

export default UserInfoCard