import React, { Component } from 'react';

import PostModel from '../models/post';

import Post from '../components/Post';


class Posts extends Component{
    state ={
        posts: []
    };

    componentDidMount(){
        this.fetchData()
    };

    fetchData = () =>{
        PostModel.all()
        .then( e =>{ this.setState({posts: e.posts})
        })
        .catch(err => console.log(err))
    };

    render(){
        let postsList = this.state.posts.map((post, index) =>{
            return(

                <Post {...post}/>
            )
       
        })

        return(
            <div className = "card-container">
                <div>
                    {this.state.posts ? postsList : "retrieveing "}
                </div>
            </div>
        )
    }
  
}

export default Posts;