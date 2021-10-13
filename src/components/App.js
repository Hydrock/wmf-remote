import React, { Component } from "react";

import Button from './Button';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App! (Remote)</h1>
                <Button />
            </div>
        );
    }
}

export default App;
