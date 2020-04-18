import React from 'react';
import './Footer.style.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer__container'>
                <p>
                    &copy; <span className='footer__span'>IKEAMASTER</span>, 2020
                </p>
                <p>
                    BORED AS HELL SITTING AT HOME
                </p>
            </div>
        )
    }
}