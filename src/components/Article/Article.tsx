import React from 'react';
import './Article.style.scss';
import { useParams } from 'react-router-dom';

export const Article = () => {
    const { title } = useParams();
    return (
        <div className="hello__container">
            <div className="hello__wrapper">
                {title}
            </div>
        </div>
    )
}
