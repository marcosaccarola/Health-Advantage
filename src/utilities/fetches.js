const USERS_URL='http://localhost:3001/practitioner/login'

export const getUser=async({reqBody})=>{
    console.log(reqBody)
    try {
        const response=await fetch(USERS_URL,
            {
                method:'POST',
                body:JSON.stringify(reqBody),
                headers:{'Content-Type': 'application/json'}
            })
        if(response.ok){
            console.log(response)
            let user=await response.json()
            console.log(user)
            return user
        }
    } catch (error) {
        throw error
    }
}