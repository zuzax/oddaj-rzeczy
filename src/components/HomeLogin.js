import React from 'react';
import {Link} from 'react-router-dom';
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage"

const HomeLogin = () => {
    return ( 
        <>
        <div className="main-nav">
            <Link 
                to="/logowanie" 
                className="main-nav__link"
                >
                    Zaloguj
            </Link>
            <Link 
                to="/rejestracja" className="main-nav__link"
                >
                    Załóż konto
            </Link>
        </div>
        </>
     );
}

export default HomeLogin;