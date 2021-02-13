import React from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg'
import Button from './Button'

const HomeHeader = () => {

    // const handleRedirect = () => {

    // }


    return ( 
        <section className="section-view">
            <div className='hero__img' />
            <div className="hero__content">       
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <Decoration />
                <div className="hero__btns">
                    <Button text="Oddaj rzeczy" />
                    <Button text="Zorganizuj zbiórkę" />
                </div>
            </div>
        </section>
     );
}
 
export default HomeHeader;