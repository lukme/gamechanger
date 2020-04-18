import React from 'react';
import './HeadingHomeArticle.style.scss';

interface Props {
    gameTitle: string;
    title: string;
    subtitle: string;
    intro: string;
}

export default class HeadingHomeArticle extends React.Component<Props, {}> {

    render() {
        const { gameTitle, title, subtitle, intro } = this.props,
            // bgImage = `/${gameTitle}.jpg`;
            bgImage = `https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724_1280.jpg`;

        return (
            <div
                className='headArticle__container'
            >
                <div className="headArticle__bgImageContainer"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                <div className="headArticle__textbox">
                    <p className='headArticle__gameTitle'>
                        {gameTitle.toUpperCase()}
                    </p>
                    <p className='headArticle__title'>
                        {title}
                    </p>
                    <p className='headArticle__subtitle'>
                        {subtitle}
                    </p>
                    <p className='headArticle__intro'>
                        {intro}
                    </p>
                </div>
            </div>
        )
    }
}