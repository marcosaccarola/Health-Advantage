import { useState } from "react"
import SignInForm from "./0111-SignInForm"

const PatientOrPractitioner=({setCurrentUser,handleSignInModal})=>{
    const[role,setRole]=useState('')
    const handleSetRolePatient=()=>{
        setRole('Patient')
    }
    const handleSetRolePractitioner=()=>{
        setRole('Practitioner')
    }

    return(
        <>
            <SignInForm setCurrentUser={setCurrentUser} handleLoginModal={handleSignInModal} role={role} />
        </>
    )
}

export default PatientOrPractitioner