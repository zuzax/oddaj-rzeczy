import React from 'react';
import {Link} from 'react-scroll'

const Navbar = () => {
    return (  
            <nav className="main-nav">
                <Link
                    activeClass="active"
                    to="/"
                    smooth={true}
                    duration={500}
                    className="main-nav__link">
                        Start
                </Link>
                <Link
                    activeClass="active"
                    to="three-columns"
                    smooth={true}
                    duration={500}
                    className="main-nav__link">
                        O co chodzi?
                </Link>                
                <Link
                    activeClass="active"
                    to="about-us"
                    smooth={true}
                    duration={500}
                    className="main-nav__link">
                        O nas
                </Link>
                <Link
                    activeClass="active"
                    to="organizations"
                    smooth={true}
                    duration={500}
                    className="main-nav__link">
                        Fundacja i organizacja
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="main-nav__link">
                        Kontakt
                </Link>
                {/* <Link to="#" className="main-nav__link">O co chodzi?</Link>
                <Link to="#" className="main-nav__link">O nas</Link>
                <Link to="#" className="main-nav__link">Fundacja i organizacja</Link>
                <Link to="#" className="main-nav__link">Kontakt</Link> */}
            </nav>

            
     );
}

 
export default Navbar;