import React from 'react'
import { Switch , Route} from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import NewPost from '../pages/NewPost'
import Posts from '../pages/Posts'




export default (props) =>(
    <Switch>

        <Route path = '/register/' component = { Register} />
        <Route path="/login" render={ (routeComponentProps) => {
             return <Login 
               { ...routeComponentProps }
               currentUser={ props.currentUser }
               storeUser={ props.storeUser }
             />
    }} />
        <Route path = "/:id/create" component ={NewPost}/>
        <Route exact path ='/' component = { Home } />
        <Route path = "/posts" component ={ Posts } />
 
    </Switch>
)