import React from 'react';
import './Article.style.scss';
import { useParams } from 'react-router-dom';

import { Bloodborne } from '../Games/Bloodborne';

export const Article = () => {
    const { title } = useParams();

    const chooseComponent = () => {
        switch (title) {
            case 'Bloodborne':
                return <Bloodborne />
            default:
                console.log('An error occured while selecting article');
        }
    }

    return (
        <div className="article__container">
            <div className="article__wrapper">
                {chooseComponent()}
            </div>
        </div>
    )
}
