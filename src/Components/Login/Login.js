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
    const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
    }
    const handleSignIn = (e) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res =>{
            const newUser = {...user};
            newUser.login = true;
            setUser(newUser);
            history.replace(from);
        })
        .catch(error =>{
            console.log(error.message)
        })
        e.preventDefault();
    }

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
                        <input name = 'email' onBlur = {handleChange} placeholder = 'enter email' type="text"/>
                        <input password = 'password' onBlur = {handleChange} placeholder = 'enter password' type="password"/>
                        <input onClick = {handleSignIn} className = 'submit-button' type="submit" value="Login"/>
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