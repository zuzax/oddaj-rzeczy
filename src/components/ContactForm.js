import React, {useState} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg'


const ContactForm = () => {
    


    return ( 
        <section className='section-contact'>
        <div className="contact-wrapper">
            <h1>Skontaktuj się z nami</h1>
            <Decoration />
            <form className="user-form">
                <div className="form-group">
                    <label>Wpisz swoje imię
                        <input 
                            className="form-data-contact"
                            type="text" 
                            name="name">
                        </input>
                    </label>
                    <label>Wpisz swój email
                        <input
                            className="form-data-contact"
                            type="password" 
                            name="password">
                        </input>
                    </label>
                </div>
                <label>Wpisz swoją wiadomość
                    <textarea                             className="form-data-contact"
                        type="text" 
                        name="msg">
                    </textarea>
                    </label>
            </form>
        </div>
    </section>
     );
}
 
export default ContactForm;