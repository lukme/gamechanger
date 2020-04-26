import React, { useState, useEffect } from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [whichNavboxOpened, setwhichNavboxOpened] = useState<'ARTYKUŁY' | 'RECENZJE'>(),
        [showWholeHeader, setShowWholeHeader] = useState<boolean>(true),
        headerClassName = showWholeHeader ? 'header__container' : 'header__container header--small';

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            capture: true,
            passive: true
        })
    });

    const handleScroll = () => {
        setShowWholeHeader(
            window.scrollY <= 60 ? true : false
        );
    }

    return (
        <div className='header'>
            <div className={headerClassName}>
                <Link to='/' className='header__logo'>
                    GAMECHANGER
                </Link>
                <ul className='header__nav'>
                    <li
                        onClick={() => setwhichNavboxOpened('ARTYKUŁY')}
                        className='header__item'
                    >
                        <p className='header__link'>
                            ARTYKUŁY
                        </p>
                    </li>
                    <li
                        onClick={() => setwhichNavboxOpened('RECENZJE')}
                        className='header__item'
                    >
                        <p className='header__link'>
                            RECENZJE
                        </p>
                    </li>
                </ul>
            </div>
            {whichNavboxOpened && (
                <div className="navbox">
                    <h2 className='navbox__header'>
                        {whichNavboxOpened}
                    </h2>
                    <div className="navbox__content">

                    </div>
                </div>
            )}
        </div>
    )
}