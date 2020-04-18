import React from 'react';
import './HomeArticle.style.scss';
import { Link } from 'react-router-dom';

interface Props {
    type: 'ARTYKUŁ' | 'RECENZJA';
    gameTitle: string;
    description: string;
}

export default class HomeArticle extends React.Component<Props, {}> {
    render() {
        const { type, gameTitle, description } = this.props,
            // articleImage = `/${gameTitle.replace(/\s+/g, '')}.jpg`;
            articleImage = `https://ocdn.eu/pulscms-transforms/1/l4vk9kuTURBXy82Yzk4NjhkMi00NTY5LTRkMWYtYTIyMC0zZmRjOWFhZDRhMWQuanBlZ5GTBc0DFM0BvIGhMAU`;
        return (
            <div className='home-article__container'>
                <div className="home-article__decorator"
                    style={{
                        backgroundColor: type === 'ARTYKUŁ'
                            ? '#FFCA7B'
                            : '#C293FF'
                    }}
                />
                <img
                    src={articleImage}
                    alt="article image"
                    className='home-article__image'
                />
                <div className="home-article__textbox">
                    <h3 className='home-article__title text'>
                        {gameTitle}
                    </h3>
                    <p className='text'>
                        {description}
                    </p>
                    <Link to={`/article/${gameTitle.replace(/\s+/g, '')}`} className='text--purple'>
                        Czytaj dalej...
                    </Link>
                </div>
                <div
                    className="home-article__type"
                    style={{
                        borderColor: type === 'ARTYKUŁ'
                            ? '#FFCA7B'
                            : '#C293FF'
                    }}
                >
                    {type}
                </div>
            </div>
        )
    }
}