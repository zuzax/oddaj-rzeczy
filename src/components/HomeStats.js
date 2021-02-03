import React from 'react';
import HomeThreeColumns from "./HomeThreeColumns"
import {ReactComponent as Decoration} from '../assets/Decoration.svg'
import HomeFourColumns from './HomeFourColumns';


const HomeStats = () => {
    return ( 
        <section id="three-columns">
            <div className="section-view-col">
                <HomeThreeColumns />
                <h1>Wystarczą 3 proste kroki</h1>
                <Decoration />
                <HomeFourColumns />
            </div>
        </section>
     );
}
 
export default HomeStats;