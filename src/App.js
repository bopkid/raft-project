import React , {useState} from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'

import Header from './pages/Header'

import UserModel from './models/user'


import './App.css';



function App (props) {
  


  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

  const storeUser = (userId) =>{
    setCurrentUser(userId)
    localStorage.setItem('uid', userId)
  }
  const logout  = (e) =>{
    e.preventDefault()

    localStorage.removeItem('uid')
    UserModel.logout()
    .then(res =>{
      setCurrentUser(null)
      props.history.push('/login')
    })
  }
  



  return (
    
    <div className="App">
      <div>
        <Header
        currentUser = { currentUser }
        logout = { logout }

      />
      </div>
   
      <Routes 
         currentUser = { currentUser }
         storeUser = { storeUser }
      />
   
    </div>
  );
}

export default  withRouter(App);