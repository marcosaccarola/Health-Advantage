import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const HomeForm=()=>{
    const[intervention,setIntervention]=useState('')
    const handleChangeIntervention=(e)=>{
        setIntervention(e.target.value)
    }
    const[email,setEmail]=useState('')
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const[zipCode,setZipCode]=useState('')
    const handleChangeZipCode=(e)=>{
        setZipCode(e.target.value)
    }
    const[name,setName]=useState('')
    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    const[pw,setPw]=useState('')
    const handleChangePw=(e)=>{
        setPw(e.target.value)
    }
    const[isModalOpen,setIsModalOpen]=useState(false)
    const handleModal=()=>{
        isModalOpen===false?setIsModalOpen(true):setIsModalOpen(false)
    }
    const registerUserAndIntervention=()=>{
        const reqBody={'intervention':intervention,'email':email,'zipcode':zipCode,'firstName':name,'password':pw}
        // getUser({reqBody,setCurrentUser})
    }

    return(
        <>
            <Form className=''>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label
                        style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                        >Intervent type</Form.Label>
                    <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                        <Form.Select 
                            aria-label="Default select example" 
                            className=''
                            style={{width:'100%',height:40,fontWeight:'lighter',fontSize:18,color:'#2e4450'}}
                            onChange={(e)=>handleChangeIntervention(e)}>
                            <option>Choose an option</option>
                            <option value="Prevention of bedsores">
                                Prevention of bedsores</option>
                            <option value="Critical Patient Nutrition">
                                Critical Patient Nutrition</option>
                            <option value="Infusion or injection therapy">
                                Infusion or injection therapy</option>
                            <option value="Treatment of intravascular devices">
                                Treatment of intravascular devices</option>
                            <option value="Urostomy management">
                                Urostomy management</option>
                            <option value="Tracheostomy management">
                                Tracheostomy management</option>
                            <option value="Treatment of bladder catheters">
                                Treatment of bladder catheters</option>
                            <option value="Percutaneous Endoscopic Gastrostomy Management">
                                Percutaneous Endoscopic Gastrostomy Management</option>
                            <option value="Gastric tube management9">
                                Gastric tube management</option>
                            <option value="Application of medicines for external use">
                                Application of medicines for external use</option>
                            <option value="Assistance or recovery from immobilization syndrome">
                                Assistance or recovery from immobilization syndrome</option>
                            <option value="Assistance related to incontinence or irregularities">
                                Assistance related to incontinence or irregularities</option>
                            <option value="Treats skin lesions">
                                Treats skin lesions (burns,neuropathic or vascular lesions)</option>
                            <option value="Day assistance">
                                Day assistance</option>
                            <option value="Night assistance">
                                Night assistance</option>
                            <option value="24h assistance">
                                24h assistance</option>
                            <option value="Pain relief treatments">
                                Pain relief treatments</option>
                            <option value="18">
                                Other</option>
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
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleChangeEmail(e)} />
                    <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label
                        style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                        >Zip code</Form.Label>
                    <Form.Control type="email" placeholder="Enter zip code" onChange={(e)=>handleChangeZipCode(e)} />
                    <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                    Your address will not be shared.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label
                        style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                        >Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter your name" onChange={(e)=>handleChangeName(e)} />
                    <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                    Just your first name.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label
                        style={{fontWeight:'bold',fontSize:20,color:'#2e4450'}}
                        >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>handleChangePw(e)} />
                    <Form.Text style={{fontWeight:'lighter',fontSize:18,color:'#2e4450'}}>
                    Choose a password.
                    </Form.Text>
                </Form.Group>

                <Button 
                    variant="primary" className='mt-3' style={{fontSize:18}}
                    onClick={handleModal}>
                    Submit
                </Button>

            </Form>

            {(isModalOpen==true)&&(
            <Modal 
                show={isModalOpen} 
                onHide={handleModal}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
            )}
        </>
    )
}

export default HomeForm