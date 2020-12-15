import React from 'react';

import { Link } from 'react-router-dom';

const Header = (props) =>{
    return(
            <header>    
                <Link to = {'/'}>Littiture Club </Link>
                <nav>
                <ul>

                    <li className = "nav-item"><Link to ={'/posts'}>All Post </Link></li>
                    <li className = "nav-item"><Link to ={'/about'}>Contact</Link></li>

                    {props.currentUser ?
                    <>
                    <li className = "nav-item"><Link to = {`/${props.currentUser}/create`}>New Post</Link></li>
                    <li className = "nav-item"></li>
                    <li className = "nav-item"><a href = '/logout' onClick  = {props.logout}>Log out</a></li>
                    </>
                    :
                    <>
                 
                    <li className = "nav-item"><Link to = {'/login'}>Login</Link></li>
                    
                    </>
                    }
                </ul>
            </nav>

            </header>
            



    )
}

export default Header