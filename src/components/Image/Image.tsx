import React from 'react';
import './Image.style.scss';

interface Props {
    imagePath: string;
    tagline?: string;
    secondTagline?: string;
}

export const ArticleImage = (props: Props) => {
    const { imagePath, tagline, secondTagline } = props;

    return (
        <div className="image__container">
            <img
                className='image'
                src={imagePath}
            />
            {tagline && (
                <div className="image__tagline">
                    <p>{tagline}</p>
                    {secondTagline && <p>{secondTagline}</p>}
                </div>
            )}
        </div>
    )
}