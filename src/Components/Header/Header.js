import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import css from './Header.css'

const Header = () => {
    const [user, setUser] = useContext(userContext);
    return (
        <div>
            <div className="header container d-flex justify-content-between">
                <Link to = '/'>
                    <div className="image">
                        <img className = 'w-50' src="https://i.imgur.com/69WbuGP.png?1" alt=""/>
                    </div>
                </Link>
                <div className="buttons">
                    {
                        user.displayName ?
                        <div>
                            <button>{user.displayName}</button> 
                            <button>Log out</button> 
                        </div>
                        : 
                         <div>
                            <Link to = '/login'>
                                <button>Login</button>
                            </Link>
                            <Link to = '/create-new-account'>
                                <button>Sign Up</button>
                            </Link>
                        </div> 
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;