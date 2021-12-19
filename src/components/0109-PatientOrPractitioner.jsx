import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import SignInForm from "./0111-SignInForm"

const PatientOrPractitioner=({setCurrentUser,handleSignInModal})=>{
    const[role,setRole]=useState()
    const handleSetRolePatient=()=>{
        setRole('Patient')
    }
    const handleSetRolePractitioner=()=>{
        setRole('Practitioner')
    }

    return(
        <>
            <Modal.Dialog>
                <Modal.Body className='mx-auto'>Are you a patient or a professional?</Modal.Body>
            <Modal.Footer>
                <Button variant="warning text-muted" className='mr-auto btn-warning' onClick={handleSetRolePatient}>Patient</Button>
                <Button variant="warning text-muted" onClick={handleSetRolePractitioner}>Professional</Button>
            </Modal.Footer>
            </Modal.Dialog>
            
            {role&&
                <SignInForm setCurrentUser={setCurrentUser} handleSignInModal={handleSignInModal} role={role} />
            }
        </>
    )
}

export default PatientOrPractitioner