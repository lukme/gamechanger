import React from 'react';
import './Card.style.scss';

interface Props {
    postDate: string;
}

export const Card = (props: Props) => {
    const { postDate } = props;
    return (
        <div className="card__container">
            <img
                src="/ikeamaster.jpg"
                alt="author"
                className='card__authors-photo'
            />
            <div className='card__textbox'>
                <p className='card__credits'>
                    IkeaMaster
                </p>
                <p className='card__date'>
                    {postDate}
                </p>
                <div className="card__decoration"></div>
            </div>
        </div>
    )
}