import React from 'react';

const Column = ({title, subtitle, par}) => {
    return ( 
        <article className="column-info">
            <h1 className="col-title">{title}</h1>
            <h4 className="col-subtitle">{subtitle}</h4>
            <p className="col-par">{par}</p>
        </article>
     );
}
 
export default Column;