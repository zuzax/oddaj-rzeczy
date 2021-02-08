import React from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg'

const LoginPage = () => {
    return ( 
        <section className="section-view-log">
            <div className="wrapper-log">
                <h1>Zaloguj się</h1>
                <Decoration />
                <form className="user-form">
                    <label>Email
                        <input                             className="form-data"
                            type="email" 
                            name="login">
                        </input>
                    </label>
                    <label>Hasło
                        <input                             className="form-data"
                            type="password" 
                            name="password">
                        </input>
                    </label>
                </form>
            </div>
        </section>
     );
}
 
export default LoginPage;