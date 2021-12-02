import { Form } from "react-bootstrap"

const RegistrationFormPractitioners=({showProfessionalsForm,setNewUser})=>{
    return(
        <div>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="your email" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="password" placeholder="choose a password" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="number" placeholder="enter your zipcode here" />
                </Form.Group>
            {showProfessionalsForm===true&&
            <div>      
                    <Form.Text>mandatory personal data</Form.Text>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="first name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="last name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="number" placeholder="age" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="profession" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="educational qualification" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="medical board" />
                </Form.Group>

                    <Form.Text>optional personal data</Form.Text>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder='a few words about your services and a passport photo will increase the chances of patients choosing you by 65%!' rows={3} />
                </Form.Group>
                <Form.Group controlId="formFile">
                    <Form.Control type="file" size="sm" />
                </Form.Group>
            </div>
            }
        </div>
    )
}

export default RegistrationFormPractitioners