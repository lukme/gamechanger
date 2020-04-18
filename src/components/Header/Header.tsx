import React from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header__container'>
                <p className='header__logo'>GAMECHANGER</p>
                <ul className='header__nav'>
                    <li>
                        ARTYKUŁY
                    </li>
                    <li>
                        <Link className='header__link' to='/'>
                            RECENZJE
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}