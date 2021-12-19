const PRACTITIONERS_URL='https://health-advantage.herokuapp.com/practitioner'
const PATIENTS_URL='https://health-advantage.herokuapp.com/patient'
const INTERVENTIONS_URL='https://health-advantage.herokuapp.com/intervention'

// *_____________________________________________ SIGN IN PATIENT
export const signInPatient=async({reqBody,setCurrentUser})=>{
    const patientBody={
        'email':reqBody.email,
        'password':reqBody.password,
        'zipcode':reqBody.zipcode,
        'role':'Patient',
        'firstName':reqBody.firstName,
        'lastName':reqBody.lastName,
        'bio':reqBody.bio,
        'photo':reqBody.photo,
        'published':[]}
    try {
        const responseSignInPatient=await fetch(PATIENTS_URL,
            {
                method:'POST',
                body:JSON.stringify(patientBody),
                headers:{'Content-Type':'application/json'}
            })
            if(responseSignInPatient.ok){
                let patient=await responseSignInPatient.json()
                setCurrentUser(patient)
            }else{
                console.log('Patient not registered.')
            }
    } catch (error) {
        throw error
    }
}
// *_____________________________________________ SIGN IN PRACTITIONER
export const signInPractitioner=async({reqBody,setCurrentUser})=>{
    const patientBody={
        'email':reqBody.email,
        'password':reqBody.password,
        'zipcode':reqBody.zipcode,
        'role':'Practitioner',
        'firstName':reqBody.firstName,
        'lastName':reqBody.lastName,
        'bio':reqBody.bio,
        'photo':reqBody.photo,
        'profession':reqBody.profession,
        'educationalQualification':reqBody.educationalQualification,
        'medicalBoard':reqBody.medicalBoard,
        'specializations':reqBody.specializations,
        'InterventionsTakenInCharge':[]}
    try {
        const responseSignInPractitioner=await fetch(PRACTITIONERS_URL,
            {
                method:'POST',
                body:JSON.stringify(patientBody),
                headers:{'Content-Type':'application/json'}
            })
            if(responseSignInPractitioner.ok){
                let practitioner=await responseSignInPractitioner.json()
                console.log(practitioner)
                setCurrentUser(practitioner)
            }else{
                console.log('Patient not registered.')
            }
    } catch (error) {
        throw error
    }
}

// *_____________________________________________ REGISTER PATIENT & SUBMIT FIRST INTERVENTION
export const registerPatient=async({reqBody,setCurrentUser})=>{
    const patientBody={'firstName':reqBody.firstName,'email':reqBody.email,'password':reqBody.password,'zipcode':reqBody.zipcode,'role':'Patient'}
    try {
        const responseRegister=await fetch(PATIENTS_URL,
            {
               method:'POST',
               body:JSON.stringify(patientBody),
               headers:{'Content-Type':'application/json'}
            })
            if(responseRegister.ok){
                let patient=await responseRegister.json()
                postIntervention({reqBody,patient,setCurrentUser})
                console.log(patient)
            }else{
                console.log('Something went wrong.')
            }
    } catch (error) {
        throw error
    }
}
export const postIntervention=async({reqBody,patient,setCurrentUser})=>{
    const interventionBody={'userId':patient._id,'interventionRequested':reqBody.intervention,'zipcode':reqBody.zipcode,'moreInfo':reqBody.info}
    console.log('FROM FETCH: ',interventionBody)
    try {
        const responsePostIntervention=await fetch(INTERVENTIONS_URL,
            {
               method:'POST',
               body:JSON.stringify(interventionBody),
               headers:{'Content-Type':'application/json'}
            })
            if(responsePostIntervention.ok){
                let intervention=await responsePostIntervention.json()
                getPatient({reqBody,setCurrentUser})
                console.log(intervention)
            }else{
                console.log('Something went wrong.')
            }
    } catch (error) {
        throw error
    }
}


// *_____________________________________________ LOGIN (GET PRACTITIONER OR PATIENT)
export const getUser=async({reqBody,setCurrentUser})=>{
    console.log(reqBody)
    try {
        const responsePractitionersLogin=await fetch(PRACTITIONERS_URL+'/login',
            {
                method:'POST',
                body:JSON.stringify(reqBody),
                headers:{'Content-Type':'application/json'}
            })
            if(responsePractitionersLogin.ok){
                let user=await responsePractitionersLogin.json()
                console.log(user)
                setCurrentUser(user)
            }else{
                getPatient({reqBody,setCurrentUser})
            }
    } catch (error) {
        throw error
    }
}
const getPatient=async({reqBody,setCurrentUser})=>{
    try {
        const responsePatientsLogin=await fetch(PATIENTS_URL+'/login',
            {
                method:'POST',
                body:JSON.stringify(reqBody),
                headers:{'Content-Type':'application/json'}
            })
            if(responsePatientsLogin.ok){
                let user=await responsePatientsLogin.json()
                console.log(user)
                setCurrentUser(user)
            }else{
                console.log('User not found')
            }
    } catch (error) {
        throw error
    }
}

// *_____________________________________________ PATIENT PUBLISH AN INTERVENTION
export const publishIntervention=async({requestObj,setCurrentUser})=>{
    try {
        const responseInterventionPublication=await fetch(INTERVENTIONS_URL,
            {
                method:'POST',
                body:JSON.stringify(requestObj),
                headers:{'Content-Type':'application/json'}
            })
            if(responseInterventionPublication.ok){
                let userWithInterventions=await responseInterventionPublication.json()
                setCurrentUser(userWithInterventions)
            }else{
                console.log('Something went wrong.')
            }
    } catch (error) {
        throw error
    }
}

// *_____________________________________________ GET COMPLETE LIST OF INTERVENTIONS
export const getListOfInterventions=async({setRequests})=>{
    try {
        const responseListOfInterventions=await fetch(INTERVENTIONS_URL,
            {
                method:'GET'
            })
            if(responseListOfInterventions.ok){
                let listOfInterventions=await responseListOfInterventions.json()
                setRequests(listOfInterventions)
            }else{
                console.log('Something went wrong.')
            }
    } catch (error) {
        throw error
    }
}

// *_____________________________________________ ADD INTERVENTION TO PRACTITIONER (AND PRATICTIONER ID TO ANSWERS)
export const addIntervention=async({interventionId,userId,setCurrentUser})=>{
    try {
        const responseAddIntervention=await fetch(PRACTITIONERS_URL+'/'+userId+'/addIntervention/'+interventionId,
        {
            method:'PUT',
        })
        if(responseAddIntervention.ok){
            let practitionerWithInterventions=await responseAddIntervention.json()
            setCurrentUser(practitionerWithInterventions)
            addAnswer({interventionId,userId})

        }else{
            console.log('Intervention not added.')
        }
    } catch (error) {
        throw error
    }
}
const addAnswer=async({interventionId,userId})=>{
    try {
        const responseAddAnswerToIntervention=await fetch(INTERVENTIONS_URL+'/'+interventionId+'/'+userId,
        {
            method:'POST',
        })
        if(responseAddAnswerToIntervention.ok){
            let intervention=await responseAddAnswerToIntervention.json()
            console.log('INTERVENTION: ',intervention)
        }else{
            console.log('Service not offered.')
        }
    } catch (error) {
        throw error
    }
}
// *_____________________________________________ REMOVE INTERVENTION FROM PRACTITIONER
export const withdrawService=async({userId,interventionId,setCurrentUser})=>{
    try {
        const responseRemoveIntervention=await fetch(PRACTITIONERS_URL+'/'+userId+'/removeIntervention/'+interventionId,
        {
            method:'DELETE'
        })
        if(responseRemoveIntervention.ok){
            let practitionerWithInterventions=await responseRemoveIntervention.json()
            setCurrentUser(practitionerWithInterventions)
            console.log('FETCH',practitionerWithInterventions)
        }else{
            console.log('Intervention not removed or not found')
        }
    } catch (error) {
        throw error
    }
}