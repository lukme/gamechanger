import React from 'react';
import './Hello.style.scss';
import HeadingHomeArticle from '../HeadingHomeArticle/HeadingHomeArticle';

export default class Hello extends React.Component {
    render() {
        return (
            <div className="hello__container">
                <div className="hello__wrapper">
                    <HeadingHomeArticle
                        title='Danse macabre'
                        subtitle='Rzecz o umieraniu'
                        gameTitle='bloodborne'
                        intro='Credibly fashion leading-edge outsourcing through viral platforms. Conveniently simplify standards compliant benefits with bleeding-edge benefits.'
                    />
                </div>
            </div>
        )
    }
}
