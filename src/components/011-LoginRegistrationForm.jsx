import { Form } from "react-bootstrap"

const LoginRegisterForm=()=>{
    return(
        <Form.Group style={{position:'absolute',marginLeft:'35%',marginRight:'35%',marginTop:100}}>
            <Form.Control className='bg-light' size="lg" type="text" placeholder="email" />
            <br />
            <Form.Control size="lg" type="text" placeholder="password" />
        </Form.Group>
    )
}

export default LoginRegisterForm