import React from 'react';
import './Hello.style.scss';
import { HeadingHomeArticle } from '../HeadingHomeArticle/HeadingHomeArticle';
import HomeArticle from '../HomeArticle/HomeArticle'

export const Hello = () => {
    return (
        <div className="hello__container">
            <div className="hello__wrapper">
                <HeadingHomeArticle
                    gameTitle='Bloodborne'
                    title='Danse macabre'
                    subtitle='Rzecz o umieraniu'
                    description='Credibly fashion leading-edge outsourcing through viral platforms. Conveniently simplify standards compliant benefits with bleeding-edge benefits.'
                />
                <h3 className='hello__others text'>POZOSTAŁE</h3>
                <HomeArticle
                    gameTitle='The Crew 2'
                    type='ARTYKUŁ'
                    description='Rapidiously envisioneer backend models without client-based schemas. Monotonectally seize transparent expertise after.'
                />
            </div>
        </div>
    )
}
