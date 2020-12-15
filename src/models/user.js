const REACT_APP_API_URL = "http://localhost:3001/api/auth";



export default class UserModel{
    
    static create(data){
        return fetch(`${REACT_APP_API_URL}/register`,{
            method:"POST", 
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
    }
    
    static login(credentials) {
        return fetch(`${REACT_APP_API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify(credentials)
        }).then(res => res.json())
      }
    
    static logout(){

        return fetch(`${REACT_APP_API_URL}/logout`,{
            method: "DELETE",
            credentials: 'include'
        })
    }
}