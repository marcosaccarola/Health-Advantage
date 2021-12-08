const USERS_URL='http://localhost:3001/practitioner/login'

export const getUser=async({reqBody,setCurrentUser})=>{
    try {
        const response=await fetch(USERS_URL,
            {
                method:'POST',
                body:JSON.stringify(reqBody),
                headers:{'Content-Type':'application/json'}
            })
            if(response.ok){
                let user=await response.json()
                setCurrentUser(user)
            }else{
                alert('User not found.')
            }
    } catch (error) {
        throw error
    }
}