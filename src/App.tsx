import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    HashRouter
} from 'react-router-dom';
import './App.scss';

import { Hello } from './components/Hello/Hello';
import { Article } from './components/Article/Article';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => {
    return (
        <HashRouter >
            <div className="app__container">
                <Header />

                <Route exact path='/' component={Hello} />
                <Route exact path='/article/:title' component={Article} />

                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
