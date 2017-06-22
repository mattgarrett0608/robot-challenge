import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const STEP_SIZE = 10;
const DIAG_STEP_SIZE = 5;
const ROBOT1_ID = 0;
const ROBOT2_ID = 1;

class App extends Component {
    constructor() {
        super();
        document.onkeypress = (event) => {
            console.log(event.key);

            if (event.key === 'w') {

              this.moveUp(ROBOT1_ID);
            };

            if (event.key === 'a') {
                this.moveLeft(ROBOT1_ID);
            };

            if (event.key === 's') {
                this.moveDown(ROBOT1_ID);
            };

            if (event.key === 'd') {
                this.moveRight(ROBOT1_ID);
            }
            if (event.key === 'i') {
               this.moveUp(ROBOT2_ID);
            };

            if (event.key === 'l') {
                this.moveLeft(ROBOT2_ID);
            };

            if (event.key === 'k') {
                this.moveDown(ROBOT2_ID);
            };

            if (event.key === 'j') {
                this.moveRight(ROBOT2_ID);
            }
        };

    };

    state = {
        robotLocation: {
            x: 100,
            y: 100
        },
        robotLocation2: {
            x: 400,
            y: 400
        }
    };

    moveLeft = (robotId) => {
        if (robotId == ROBOT1_ID) {
            if (this.state.robotLocation.x < 0) {
                this.setState({
                    robotLocation: {
                        x: 500,
                        y: this.state.robotLocation.y
                    }
                });
            } else {
                this.setState({
                    robotLocation: {
                        x: this.state.robotLocation.x - STEP_SIZE,
                        y: this.state.robotLocation.y
                    }
                });
            }
        }
        if (robotId == ROBOT2_ID) {
            if (this.state.robotLocation2.x < 0) {
                this.setState({
                    robotLocation2: {
                        x: 500,
                        y: this.state.robotLocation2.y
                    }
                });
            } else {
                this.setState({
                    robotLocation2: {
                        x: this.state.robotLocation2.x - STEP_SIZE,
                        y: this.state.robotLocation2.y
                    }
                });
            }
        }
    };

    moveRight = (robotId) => {
        if (robotId == ROBOT1_ID) {
            if (this.state.robotLocation.x > 500) {
                this.setState({
                    robotLocation: {
                        x: 0,
                        y: this.state.robotLocation.y
                    }
                });
            } else {
                this.setState({
                    robotLocation: {
                        x: this.state.robotLocation.x + STEP_SIZE,
                        y: this.state.robotLocation.y
                    }
                });
            }
        }
        if (robotId == ROBOT2_ID) {
            if (this.state.robotLocation2.x > 500) {
                this.setState({
                    robotLocation2: {
                        x: 0,
                        y: this.state.robotLocation2.y
                    }
                });
            } else {
                this.setState({
                    robotLocation2: {
                        x: this.state.robotLocation2.x + STEP_SIZE,
                        y: this.state.robotLocation2.y
                    }
                });
            }
        }

    };
    moveUp = (robotId) => {
        if (robotId == ROBOT1_ID) {
            if (this.state.robotLocation.y > 500) {
                this.setState({
                    robotLocation: {
                        y: 0,
                        x: this.state.robotLocation.x
                    }
                });
            } else {
                this.setState({
                    robotLocation: {
                        x: this.state.robotLocation.x,
                        y: this.state.robotLocation.y + STEP_SIZE
                    }
                });
            }
        }
        if (robotId == ROBOT2_ID) {
            if (this.state.robotLocation2.y > 500) {
                this.setState({
                    robotLocation2: {
                        y: 0,
                        x: this.state.robotLocation2.x
                    }
                });
            } else {
                this.setState({
                    robotLocation2: {
                        x: this.state.robotLocation2.x,
                        y: this.state.robotLocation2.y + STEP_SIZE
                    }
                });
            }
        }
    };

    moveDown = (robotId) => {
        if (robotId == ROBOT1_ID) {
            if (this.state.robotLocation.y < 0) {
                this.setState({
                    robotLocation: {
                        y: 500,
                        x: this.state.robotLocation.x
                    }
                });
            } else {
                this.setState({
                    robotLocation: {
                        x: this.state.robotLocation.x,
                        y: this.state.robotLocation.y - STEP_SIZE
                    }
                });
            }
        }
        if (robotId == ROBOT2_ID) {
            if (this.state.robotLocation2.y < 0) {
                this.setState({
                    robotLocation2: {
                        y: 500,
                        x: this.state.robotLocation2.x
                    }
                });
            } else {
                this.setState({
                    robotLocation2: {
                        x: this.state.robotLocation2.x,
                        y: this.state.robotLocation2.y - STEP_SIZE
                    }
                });
            }
        }
    };



    moveDiagLeftUp = (robotId) => {
        if (robotId == ROBOT1_ID) {
            if (this.state.robotLocation.y > 500) {
                this.setState({
                    robotLocation: {
                        y: 0,
                        x: this.state.robotLocation.x
                    }
                });
            } else {
                this.setState({
                    robotLocation: {
                        x: this.state.robotLocation.x - DIAG_STEP_SIZE,
                        y: this.state.robotLocation.y + DIAG_STEP_SIZE
                    }
                });
            }
        }
        if (robotId == ROBOT2_ID) {
            if (this.state.robotLocation2.y > 500) {
                this.setState({
                    robotLocation2: {
                        y: 0,
                        x: this.state.robotLocation2.x
                    }
                });
            } else {
                this.setState({
                    robotLocation2: {
                        x: this.state.robotLocation2.x - DIAG_STEP_SIZE,
                        y: this.state.robotLocation2.y + DIAG_STEP_SIZE
                    }
                });
            }
        }
    };

    moveDiagLeftDown = (robotId) => {
        if (this.state.robotLocation.y < 0) {
            this.setState({
                robotLocation: {
                    y: 500,
                    x: this.state.robotLocation.x
                }
            });
        } else {
            this.setState({
                robotLocation: {
                    x: this.state.robotLocation.x - DIAG_STEP_SIZE,
                    y: this.state.robotLocation.y - DIAG_STEP_SIZE
                }
            });
        }
    };
    moveDiagRightUp = (robotId) => {
    if (this.state.robotLocation.y > 500) {
        this.setState({
            robotLocation: {
                y: 0,
                x: this.state.robotLocation.x
            }
        });
    } else {
        this.setState({
            robotLocation: {
                x: this.state.robotLocation.x + DIAG_STEP_SIZE,
                y: this.state.robotLocation.y + DIAG_STEP_SIZE
            }
        });
    }
};

    moveDiagRightDown = (robotId) => {
        if (this.state.robotLocation.y < 0) {
            this.setState({
                robotLocation: {
                    y: 500,
                    x: this.state.robotLocation.x
                }
            });
        } else {
            this.setState({
                robotLocation: {
                    x: this.state.robotLocation.x + DIAG_STEP_SIZE,
                    y: this.state.robotLocation.y - DIAG_STEP_SIZE
                }
            });
        }
    };

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>ROBO WARS</h2>
                </div>
                <p className="App-intro">
                    Make this robot move around the screen using the buttons
                    below
                </p>
                <button onClick={this.moveLeft}>Left</button>
                <button onClick={this.moveRight}>Right</button>
                <button onClick={this.moveUp}>Up</button>
                <button onClick={this.moveDown}>Down</button>
                <button onClick={this.moveDiagLeftDown}>LeftDown</button>
                <button onClick={this.moveDiagLeftUp}>LeftUp</button>
                <button onClick={this.moveDiagRightDown}>RightDown</button>
                <button onClick={this.moveDiagRightUp}>RightUp</button>
                <div
                    style={{
                        position: 'relative',
                        height: 500,
                        width: 500,
                        margin: 'auto',
                        border: '5px solid black'
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
                    <img
                        src="http://www.robot-advance.com/EN/ori-wowwee-mip-white-robot-1281.jpg"
                        style={{
                            position: 'absolute',
                            left: this.state.robotLocation2.x - 25,
                            bottom: this.state.robotLocation2.y - 25,
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
