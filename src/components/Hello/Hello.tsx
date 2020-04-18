import React from 'react';
import './Hello.style.scss';
import HeadingHomeArticle from '../HeadingHomeArticle/HeadingHomeArticle';

export default class Hello extends React.Component {
    render() {
        return (
            <div className="hello__container">
                <div className="hello__wrapper">
                    <HeadingHomeArticle gameTitle='bloodborne'/>
                </div>
            </div>
        )
    }
}
