USERS_URL='http://localhost:3001/practitioners'

export const getUser=async({emailListener,pwListener})=>{
    try {
        const response=await fetch(USERS_URL,{method:'GET'})
        if(response.ok){
            let user=await response.json()
            return user
        }
    } catch (error) {
        throw error
    }
}