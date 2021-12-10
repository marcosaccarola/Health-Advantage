const PRACTITIONERS_URL='http://localhost:3001/practitioner'
const PATIENTS_URL='http://localhost:3001/patient'
const INTERVENTIONS_URL='http://localhost:3001/intervention'

// *_____________________________________________ LOGIN (GET PRACTITIONER OR PATIENT)
export const getUser=async({reqBody,setCurrentUser})=>{
    try {
        const responsePractitionersLogin=await fetch(PRACTITIONERS_URL+'/login',
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
        const responsePatientsLogin=await fetch(PATIENTS_URL+'/login',
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

// *_____________________________________________ ADD INTERVENTION TO PRACTITIONER
export const addIntervention=async({interventionId,userId,setCurrentUser})=>{
    try {
        const responseInterventionAdded=await fetch(PRACTITIONERS_URL+'/'+userId+'/addIntervention/'+interventionId,
        {
            method:'PUT',
        })
        if(responseInterventionAdded.ok){
            let practitionerWithInterventions=await responseInterventionAdded.json()
            setCurrentUser(practitionerWithInterventions)
            console.log(practitionerWithInterventions)
        }else{
            console.log('Intervention not added.')
        }
    } catch (error) {
        throw error
    }
}