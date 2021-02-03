import React from 'react';
import HomeHeader from './HomeHeader';
import HomeStats from './HomeStats';
import HomeAboutUs from './HomeAboutUs';
import HomeFourColumns from './HomeFourColumns';
import HomeThreeColumns from './HomeThreeColumns';
import HomeBeneficiaries from './HomeBeneficiaries';


const Home = () => {
    return ( 
        <>  
            <HomeHeader />
            <HomeStats />
            <HomeThreeColumns />
            <HomeFourColumns />
            <HomeBeneficiaries />
            <HomeAboutUs />
        </>
     );
}
 
export default Home;