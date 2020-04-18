import React from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header__container'>
                <Link to='/' className='header__logo'>
                    GAMECHANGER
                </Link>
                <ul className='header__nav'>
                    <li>
                        <Link className='header__link' to='/'>
                            ARTYKUŁY
                        </Link>
                    </li>
                    <li>
                        <Link className='header__link' to='/review'>
                            RECENZJE
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}