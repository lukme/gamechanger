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
            articleImage = `https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
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
                    alt="article"
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