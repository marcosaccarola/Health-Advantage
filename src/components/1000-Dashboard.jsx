import { Col, Row } from "react-bootstrap"
import './0000-Home.css'
import { GiElephant } from "react-icons/gi";


const NewDashboard=({currentUser,setCurrentUser})=>{
    
    const sendIntervention=()=>{
        
    }

    return(
        <>
            <Row className='green justify-content-center min-vh-100'>
                <Col sm={8} className='bg-light my-5 rounded border border-dark'>

                    <Row className='rounded-top'>
                        <Col sm={2} className='megaTitle'><GiElephant /></Col>
                        <Col sm={8} className='megaTitle'>
                            Patient card
                        </Col>
                        <Col sm={2} className='megaTitle'><img src={currentUser.photo} className='avatar' /></Col>
                    </Row>

                    <Row className='mx-5 my-5'>
                        <Col sm={3} className='greenButtons rounded' onClick={sendIntervention}>Add new request</Col>
                    </Row>

                    {currentUser&&currentUser.published.length!==-1&&currentUser.published.map((i)=>
                    <Row className='mx-5 my-5 pink'>
                        <Col sm={6} className='bg-dark rounded'>

                        </Col>
                    </Row>
                    )}

                </Col>
            </Row>
        </>
    )
}

export default NewDashboard