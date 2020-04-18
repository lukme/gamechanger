import React from 'react';
import './HeadingHomeArticle.style.scss';

interface Props {
    gameTitle: string;
}

export default class HeadingHomeArticle extends React.Component<Props, {}> {

    render() {
        const { gameTitle } = this.props,
            // bgImage = `/${gameTitle}.jpg`;
            bgImage = `https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724_1280.jpg`;

        return (
            <div
                className='headArticle__container'
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="headArticle__textbox">
                    
                </div>
            </div>
        )
    }
}