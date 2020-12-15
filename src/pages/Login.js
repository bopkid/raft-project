import React , { Component } from 'react';
import UserModel from '../models/user';


class Login extends Component{
    state = {
        email: "",
        password:""
    }

     handleChange = (e) =>{
         this.setState({
             [e.target.name]: e.target.value
         })
     }

     handleSubmit = (e) =>{
         e.preventDefault()
         UserModel.login(this.state)
         .then(data =>{
             if(!data.data){
                 return false;
             }

             this.props.storeUser(data.data)
             this.props.history.push('/')
             
         })
         .catch(err => console.log(err))


     }

     render(){
        return (
            <div>
            <h4>Login</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input 
                  onChange={this.handleChange} 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={this.state.email} />
              </div>
    
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  onChange={this.handleChange} 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={this.state.password} />
              
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        );
        }
}

export default Login;