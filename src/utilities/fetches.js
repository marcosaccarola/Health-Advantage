const PRACTITIONERS_URL='http://localhost:3001/practitioner/login'
const PATIENTS_URL='http://localhost:3001/patient/login'
const INTERVENTIONS_URL='http://localhost:3001/patient/intervention'

// *_____________________________________________ GET PRACTITIONER OR PATIENT
export const getUser=async({reqBody,setCurrentUser})=>{
    try {
        const responsePractitionersLogin=await fetch(PRACTITIONERS_URL,
            {
                method:'POST',
                body:JSON.stringify(reqBody),
                headers:{'Content-Type':'application/json'}
            })
            if(responsePractitionersLogin.ok){
                let user=await responsePractitionersLogin.json()
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
        const responsePatientsLogin=await fetch(PATIENTS_URL,
            {
                method:'POST',
                body:JSON.stringify(reqBody),
                headers:{'Content-Type':'application/json'}
            })
            if(responsePatientsLogin.ok){
                let user=await responsePatientsLogin.json()
                console.log('USER FROM FETCH',user)
                console.log(user.published.length)
                setCurrentUser(user)
            }else{
                console.log('User not found')
            }
    } catch (error) {
        throw error
    }
}

// *_____________________________________________ INTERVENTION PUBLICATION
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
                console.log(requestObj)
            }
    } catch (error) {
        throw error
    }
}