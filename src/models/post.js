const REACT_APP_API_URL = "http://localhost:3001/api/post"



class  PostModel{
    static all = () =>{
        return fetch(`${REACT_APP_API_URL}`)
        .then(res => res.json())
    };
    
    static show =(postId) =>{
        return fetch(`${REACT_APP_API_URL}/${postId}`)
        .then(res => res.json())
    };


    static create =(postData) =>{
        return fetch(`${REACT_APP_API_URL}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(postData)
        })
        .then(res=> res.json())
    };

    static update = (postData,postId) =>{
        return fetch(`${REACT_APP_API_URL}/${postId}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(postData)
        })
    };

    static destory =(postId) =>{
        return fetch(`${REACT_APP_API_URL}/${postId}`,{
            method:"DELETE", 
            headers:{
                "Content-Type":"application/json"
            }
        })
    };

}

    export default PostModel;