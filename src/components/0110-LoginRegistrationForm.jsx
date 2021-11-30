import { Form } from "react-bootstrap"

const LoginRegisterForm=()=>{
    return(
        <div>
            <Form.Group style={{position:'absolute',marginLeft:'30%',marginRight:'30%',marginTop:180,minWidth:400}}>
                <Form.Control 
                    className='bg-light text-secondary border-info' 
                    // style={{borderWidth:2}}
                    size="lg" type="text" 
                    placeholder="email" />
                <br />
                <Form.Control
                    className='bg-light text-secondary border-info'
                    // style={{borderWidth:2}}
                    size="lg" type="text" 
                    placeholder="password" />
            </Form.Group>
        </div>
    )
}

export default LoginRegisterForm