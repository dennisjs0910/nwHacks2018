import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NewsFeed from './NewsFeed'
import Header from './Header';

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={ NewsFeed } />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

App = connect(null, actions)(App);

export default App;