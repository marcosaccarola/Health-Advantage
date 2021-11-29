import { Card,Row,Col } from "react-bootstrap"
import bg from '../assets/dave-hoefler-unsplash-medium.jpg'

const LandingInterface=()=>{
    return(
        <div>
            <Card style={{ width: '70%' }} className='text-light bg-info mx-auto'>
            <Card.Img variant="top" src={bg}/>
            <Card.Body>
                <Card.Title>Values:</Card.Title>
                <Card.Text>
                    <Row>
                        <Col xs={4}>value icon and text</Col>
                        <Col xs={4}>value icon and text</Col>
                        <Col xs={4}>value icon and text</Col>
                    </Row>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
        </div>
    )
}

export default LandingInterface