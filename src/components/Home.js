import React from 'react';
import HomeHeader from './HomeHeader';
import HomeStats from './HomeStats';
import HomeAboutUs from './HomeAboutUs';
import HomeBeneficiaries from './HomeBeneficiaries';
import ContactForm from './ContactForm';


const Home = () => {
    return ( 
        <>  
            <HomeHeader />
            <HomeStats />
            {/* <HomeAboutUs /> */}
            <HomeBeneficiaries />
            <ContactForm />
        </>
     );
}
 
export default Home;