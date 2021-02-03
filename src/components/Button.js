import React from 'react';

const Button = ({text}) => {
    return ( 
        <button 
            className="main-btn">
                {text}
        </button>
     );
}
 
export default Button;