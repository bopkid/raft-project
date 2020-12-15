import React from 'react';


const Post = (props) =>{
    return (        
        <div>
            <div>
                {props.title}
            </div>
            <div>
                {props.content}
            </div>
        </div>
    )

    
}

export default Post