import React, { Component } from 'react';

import PostModel from '../models/post'


class NewPost extends Component{
    state ={
        title: "",
        content: "",
        user: this.props.match.params.id
      
        // DONE
    };

    handleSubmit =(e) =>{
        e.preventDefault();
        
        PostModel.create(this.state)
        .then(data =>{
            this.props.history.push('/posts')
        }) 
    };

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <form onSubmit = { this.handleSubmit }>
                <div className = "form-input">
                <label htmlFor = "title">Title: </label>
                <input 
                type ="text"
                name = "title"
                onChange ={ this.handleChange }
                value = {this.state.title}
                />
                </div>
                <div className = "form-input">
                <label htmlFor = "conent">Content: </label>
                <input 
                type ="text"
                name = "content"
                onChange ={ this.handleChange }
                value = {this.state.content}
                />
                </div>

            <input type = "submit" value = " Create New Post" />
            </form>
        )
    }

}


export default NewPost;