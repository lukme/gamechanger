import React from 'react';
import './ArticleHeader.style.scss';

interface Props {
    gameTitle: string;
}

export const ArticleHeader = (props: Props) => {

    // bgImage = `/${gameTitle}.jpg`;
    const { gameTitle } = props,
        bgImage = `https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724_1280.jpg`;

    return (
        <div
            className='article-header__container'
        >
            <div className="article-header__bgImageContainer"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="article-header__textbox">
                    <h3 className='article-header__heading'>
                        Appropriately reintermediate opportunities with sticky services. Assertively plagiarize enterprise-wide imperatives.
                    </h3>
                    <p className='article-header__game-title'>
                        {gameTitle}
                    </p>
                </div>
            </div>
        </div>
    )
}