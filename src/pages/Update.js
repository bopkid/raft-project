import React, { Component } from 'react';

import PostModel from '../models/post'

class Update extends Component{
    state ={
        title: "",
        content: "",
        currentPost: this.props.match.params.id
      
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        PostModel.show(this.state.currentPost)
        .then(res => this.setState({
            title: res.post.title,
            content: res.post.content
        })

        )
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        PostModel.edit(this.state.currentPost, this.state)
        .then(data =>{
            this.props.history.push('/posts')
        })
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    } 

    render(){
        return(
            <div>
                <form>
                    
                </form>
            </div>
        )
    }
    

}


export default Update;