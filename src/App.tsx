import React from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './App.scss';

import Hello from './components/Hello/Hello';
import Header from './components/Header/Header';

class App extends React.Component {
    render() {
        return (
            <Router >
                <div className="app__container">
                    <Header />

                    <Route exact path='/' component={Hello} />
                </div>
            </Router>
        );
    }
}

export default App;
