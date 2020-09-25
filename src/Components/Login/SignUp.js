import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';


const SignUp = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    const [user, setUser] = useContext(userContext);
    const handleBlur = (e) => {
        if(e.target.name === 'name'){
            const userName = e.target.value;
            const newUser = {...user};
            newUser.name = userName;
            setUser(newUser);
        }
        if(e.target.name === 'email'){
            const userEmail = e.target.value;
            const newUser = {...user};
            newUser.email = userEmail;
            setUser(newUser);
        }
        if(e.target.name === 'password'){
            const userPassword = e.target.value;
            const newUser = {...user};
            newUser.password = userPassword;
            setUser(newUser);
        }
    }

    const handleSignUp = (e) =>{
        if(user.name && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUser = {...user};
                newUser.login = true;
                setUser(newUser);
                history.replace(from);
                updateUserName(user.name);
            })
            .catch(function(error) {
                console.log(error.message);;
              });
        }
        console.log(user.name)
        console.log(user.email)
        console.log(user.password)
       

        e.preventDefault();
    }

    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
            console.log('user name updated')
        }).catch(function(error) {
            console.log(error)
        });
    }
    return (
        <div>
            <div className="row justify-content-center login">
                <div  className = 'col-sm-5'>
                    <form>
                        <input name = 'name' onBlur = {handleBlur} placeholder = 'enter name' type="text"/>
                        <input name = 'email' onBlur = {handleBlur} placeholder = 'enter email' type="text"/>
                        <input name = 'password' onBlur = {handleBlur} placeholder = 'enter password' type="password"/>
                        <input placeholder = 'confirm password' type="password"/>
                        <input onClick = {handleSignUp}  className = 'submit-button' type="submit" value="Sign Up"/>
                    </form>
                    <Link to = '/login'>
                        <button className="btn">Already Have an Account?</button>
                    </Link>
                </div>
            </div>                
        </div>
    );
};

export default SignUp;