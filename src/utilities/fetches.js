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

// *_____________________________________________ ADD INTERVENTION TO PRACTITIONER
export const addIntervention=async({interventionId,userId,setCurrentUser})=>{
    try {
        const responseAddIntervention=await fetch(PRACTITIONERS_URL+'/'+userId+'/addIntervention/'+interventionId,
        {
            method:'PUT',
        })
        if(responseAddIntervention.ok){
            let practitionerWithInterventions=await responseAddIntervention.json()
            setCurrentUser(practitionerWithInterventions)
        }else{
            console.log('Intervention not added.')
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