import React, {useState} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg'



const ContactForm = () => {
    const [userInput, setUserInput] = useState({
        username: '',
        email: '',
        message: ''
    })
    

    const handleInputChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log("sssssss")
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
          e.preventDefault();
    }

    return ( 
        <section className='section-contact'>
        <div className="contact-wrapper">
            <h1>Skontaktuj się z nami</h1>
            <Decoration />
            <form onSubmit={handleSubmit} className="user-form">
                <div className="form-group">
                    <label>Wpisz swoje imię
                        <input
                            value={userInput.username}  
                            className="form-data-contact"
                            type="text" 
                            name="name"
                            onChange={handleInputChange}>
                        </input>
                    </label>
                    <label>Wpisz swój email
                        <input
                            value={userInput.email} 
                            className="form-data-contact"
                            type="password" 
                            name="password"
                            onChange={handleInputChange}>
                        </input>
                    </label>
                </div>
                    <label>Wpisz swoją wiadomość
                        <textarea 
                            value={userInput.message}          
                            className="form-data-contact"
                            type="text" 
                            name="msg"
                            onChange={handleInputChange}>
                        </textarea>
                    </label>
            </form>
            <div className='btn-wrapper'>
                <button 
                    type='submit' 
                    className='submit-btn'>Wyślij
                </button>
            </div>
        </div>
    </section>
     );
}
 
export default ContactForm;