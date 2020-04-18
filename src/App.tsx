import React from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './App.scss';

import Hello from './components/Hello/Hello';
import Review from './components/Review/Review';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends React.Component {
    render() {
        return (
            <Router >
                <div className="app__container">
                    <Header />

                    <Route exact path='/' component={Hello} />
                    <Route exact path='/review' component={Review} />

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
