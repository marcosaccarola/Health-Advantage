import { Button, Form } from "react-bootstrap"

const HomeForm=()=>{
    return(
        <Form className=''>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                    style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                    >Intervent type</Form.Label>
                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                    <Form.Select 
                        aria-label="Default select example" 
                        className=''
                        style={{width:'100%',height:40,fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                        <option>Choose an option</option>
                        <option value="1">Prevention of bedsores</option>
                        <option value="2">Critical Patient Nutrition</option>
                        <option value="3">Infusion or injection therapy</option>
                        <option value="4">Treatment of intravascular devices</option>
                        <option value="5">Urostomy management</option>
                        <option value="6">Tracheostomy management</option>
                        <option value="7">Treatment of bladder catheters</option>
                        <option value="8">Percutaneous Endoscopic Gastrostomy Management</option>
                        <option value="9">Gastric tube management</option>
                        <option value="10">Application of medicines for external use</option>
                        <option value="11">Assistance or recovery from immobilization syndrome</option>
                        <option value="12">Assistance related to incontinence or irregularities</option>
                        <option value="13">Treats skin lesions (burns,neuropathic or vascular lesions)</option>
                        <option value="14">Day assistance</option>
                        <option value="15">Night assistance</option>
                        <option value="16">24h assistance</option>
                        <option value="17">Other</option>
                    </Form.Select>
                </Form.Text>
                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                Choose the closest intervention category.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                    style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                    >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                    style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                    >Zip code</Form.Label>
                <Form.Control type="email" placeholder="Enter zip code" />
                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                Your address will not be shared.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                    style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                    >Name</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" />
                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                Just your first name.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label
                    style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                    >Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                Choose a password.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3' style={{fontSize:18}}>
                Submit
            </Button>
        </Form>
    )
}

export default HomeForm