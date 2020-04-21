import React, { useState } from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isNavboxOpened, setIsNavboxOpened] = useState<boolean>();

    return (
        <div className="header">
            <div className='header__container'>
                <Link to='/' className='header__logo'>
                    GAMECHANGER
                </Link>
                <ul className='header__nav'>
                    <li
                        onClick={() => setIsNavboxOpened(!isNavboxOpened)}
                        className='header__item'
                    >
                        <p className='header__link'>
                            ARTYKUŁY
                        </p>
                    </li>
                    <li
                        onClick={() => setIsNavboxOpened(!isNavboxOpened)}
                        className='header__item'
                    >
                        <p className='header__link'>
                            RECENZJE
                        </p>
                    </li>
                </ul>
            </div>
            {isNavboxOpened && (
                <div className="navbox">
                    <h2 className='navbox__header'>
                        RECENZJE
                    </h2>
                    <div className="navbox__content">
                        
                    </div>
                </div>
            )}
        </div>
    )
}