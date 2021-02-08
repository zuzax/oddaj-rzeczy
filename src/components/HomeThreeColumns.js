import React from 'react';
import Column from "./Column"

const HomeThreeColumns = () => {
    return ( 
        <div className="col-wrapper-stats">
        <Column
            title="10"
            subtitle="Oddanych worków"
            par="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." 
        />
        <Column
            title="5"
            subtitle="WSPARTYCH ORGANIZACJI"
            par="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." 
        />
        <Column
            title="7"
            subtitle="ZORGANIZOWANY ZBIÓREK"
            par="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." 
        />
        </div>
     );
}
 
export default HomeThreeColumns;