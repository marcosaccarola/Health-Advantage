import { Card,Image } from "react-bootstrap"


const UserInfoCard=({currentUser})=>{

    return(
        <div>
        {currentUser.role==='Practitioner'
        ?
        // *_____________________________________ PRACTITIONER INFO
            <div className='row justify-content-between mx-5 mt-4 mb-4'>
                <Image src={currentUser.photo} 
                    style={{width:100,height:100,objectFit:'cover',borderRadius:'50%'}}
                    className='mr-5'
                    />
                <div className='ml-5 text-muted'>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        {currentUser.role}
                    </Card.Title>          
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        Role
                    </Card.Title>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        Location
                    </Card.Title>
                </div>
                {/* <div className='ml-5 text-muted'>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        :
                    </Card.Title>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        : 
                    </Card.Title>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        :
                    </Card.Title>
                </div> */}
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
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        Education
                    </Card.Title>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        Board
                    </Card.Title>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        Specializations
                    </Card.Title>
                </div>
                {/* <div className='ml-5 text-muted'>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        :
                    </Card.Title>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        : 
                    </Card.Title>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        :
                    </Card.Title>
                </div> */}
                <div className='ml-5 mr-auto mr-5'>
                    <Card.Title className='row justify-content-start'>
                        {currentUser.educationalQualification}
                    </Card.Title>
                    <Card.Title className='row justify-content-start'>
                        {currentUser.medicalBoard} 
                    </Card.Title>
                    <Card.Title className='row justify-content-start'>
                        {currentUser.specializations}
                    </Card.Title>
                </div>
            </div>
        :
        // *_____________________________________ PATIENT INFO
            <div className='row justify-content-between mx-5 mt-4 mb-5'>
                <Image src={currentUser.photo} 
                    style={{width:100,height:100,objectFit:'cover',borderRadius:'50%'}}
                    className='mr-5'
                    />
                <div className='ml-1 text-muted'>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        {currentUser.role}
                    </Card.Title>          
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        Location
                    </Card.Title>
                </div>
                {/* <div className='ml-5 text-muted'>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        :
                    </Card.Title>
                    <Card.Title className='row justify-content-start font-weight-normal'>
                        :
                    </Card.Title>
                </div> */}
                <div className='ml-5 mr-auto'>
                    <Card.Title className='row justify-content-start'>
                        {currentUser.firstName} {currentUser.lastName}
                    </Card.Title>
                    <Card.Title className='row justify-content-start'>
                        {currentUser.zipcode}
                    </Card.Title>
                </div>
            </div>
        }
        </div>
    )
}

export default UserInfoCard