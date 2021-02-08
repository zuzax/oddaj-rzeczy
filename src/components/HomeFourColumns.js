import React from 'react';
import Column from "./Column";
import Shirt from "../assets/Icon-1.svg";
import Bag from "../assets/Icon-2.svg";
import Glass from "../assets/Icon-3.svg";
import Arrows from "../assets/Icon-4.svg"


const HomeFourColumns = () => {
    return ( 
        <div className="col-wrapper-steps">
        <Column
            image={Shirt}
            subtitle="Wybierz rzeczy"
            par="ubrania, zabawki, sprzęt i inne" 
        />
        <Column
            image={Bag}
            subtitle="Spakuj je"
            par="skorzystaj z worków na śmieci" 
        />
        <Column
            image={Glass}
            subtitle="Zdecyduj komu chcesz pomóc"
            par="wybierz zaufane miejsce" 
        />
        <Column
            image={Arrows}
            subtitle="Zamów kuriera"
            par="kurier przyjedzie w dogodnym terminie" 
        />
        </div>
     );
}
 
export default HomeFourColumns;