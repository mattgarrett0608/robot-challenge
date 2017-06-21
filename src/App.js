import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const STEP_SIZE = 10;
class App extends Component {
    state = {
        robotLocation: {
            x: 250,
            y: 250
        }
    };

    moveLeft = () => {
        this.setState({
            robotLocation: {
                x: this.state.robotLocation.x - STEP_SIZE,
                y: this.state.robotLocation.y
            }
        });
    };
    moveRight = () => {
        // fill this out
    };
    moveUp = () => {
        // fill this out
    };
    moveDown = () => {
        // fill this out
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Your Task</h2>
                </div>
                <p className="App-intro">
                    Make this robot move around the screen using the buttons
                    below
                </p>
                <button onClick={this.moveLeft}>Left</button>
                <button onClick={this.moveRight}>Right</button>
                <button onClick={this.moveUp}>Up</button>
                <button onClick={this.moveDown}>Down</button>
                <div
                    style={{
                        position: 'relative',
                        height: 500,
                        width: 500,
                        margin: 'auto',
                    }}
                >
                    <img
                        src="http://www.robot-advance.com/EN/ori-wowwee-mip-white-robot-1281.jpg"
                        style={{
                            position: 'absolute',
                            left: this.state.robotLocation.x - 25,
                            bottom: this.state.robotLocation.y - 25,
                            height: 50,
                            width: 50,
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default App;
