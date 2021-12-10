const PRACTITIONERS_URL='http://localhost:3001/practitioner/login'
const PATIENTS_URL='http://localhost:3001/patient/login'
const INTERVENTIONS_URL='http://localhost:3001/intervention'

// *_____________________________________________ LOGIN (GET PRACTITIONER OR PATIENT)
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
                console.log(userWithInterventions)
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