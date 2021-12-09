const PRACTITIONERS_URL='http://localhost:3001/practitioner/login'
const PATIENTS_URL='http://localhost:3001/patient/login'

export const getUser=async({reqBody,setCurrentUser})=>{
    try {
        const responsePractitioners=await fetch(PRACTITIONERS_URL,
            {
                method:'POST',
                body:JSON.stringify(reqBody),
                headers:{'Content-Type':'application/json'}
            })
            if(responsePractitioners.ok){
                let user=await responsePractitioners.json()
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
        const responsePatient=await fetch(PATIENTS_URL,
            {
                method:'POST',
                body:JSON.stringify(reqBody),
                headers:{'Content-Type':'application/json'}
            })
            if(responsePatient.ok){
                let user=await responsePatient.json()
                setCurrentUser(user)
            }else{
                console.log('User not found')
            }
    } catch (error) {
        throw error
    }
}