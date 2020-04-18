import React from 'react';
import './HeadingHomeArticle.style.scss';
import { Link } from 'react-router-dom';

interface Props {
    gameTitle: string;
    title: string;
    subtitle: string;
    description: string;
}

export const HeadingHomeArticle = (props: Props) => {

    const { gameTitle, title, subtitle, description } = props,
        // bgImage = `/${gameTitle}.jpg`;
        bgImage = `https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724_1280.jpg`;

    return (
        <div
            className='head-article__container'
        >
            <div className="head-article__bgImageContainer"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="head-article__textbox">
                <p className='head-article__gameTitle'>
                    {gameTitle.toUpperCase()}
                </p>
                <p className='head-article__title'>
                    {title}
                </p>
                <p className='head-article__subtitle'>
                    {subtitle}
                </p>
                <p className='head-article__description'>
                    {description}
                </p>
                    <Link className='head-article__read-more' to={`/article/${gameTitle}`}>
                        Czytaj dalej...
                    </Link>
            </div>
        </div>
    )
}