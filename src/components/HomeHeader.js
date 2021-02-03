import React from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg'
import Button from './Button'

const HomeHeader = () => {

    // const handleRedirect = () => {

    // }


    return ( 
        <section className="section-view">
            <div className='hero__img' />
            <div class="hero__content">       
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
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