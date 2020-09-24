import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import css from './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    const [user, setUser] = useContext(userContext);

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(result =>{
            const user = result.user;
            const userName = user.displayName;
            const newUser = {...user};
            newUser.name = userName;
            newUser.login = true;
            setUser(newUser);
            history.replace(from);
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    
    return (
        <div>
            <div className="row justify-content-center login">
                <div className = 'col-sm-5'>
                    <form>
                        <input placeholder = 'enter email' type="text"/>
                        <input placeholder = 'enter password' type="password"/>
                        <input className = 'submit-button' type="submit" value="Login"/>
                    </form>
                    <Link to = '/create-new-account'>
                        <button className = 'btn'>Create new Account</button>
                    </Link>
                    <div>
                        <button onClick = {handleGoogleSignIn}> Sign in with google</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;