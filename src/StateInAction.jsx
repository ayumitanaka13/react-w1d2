import React, { Component } from 'react';

class StateInAction extends Component {
    constructor() {
        super()
        this.state = {
            text: 'State is now in action'
        }
    }
    
    // this.state = 'This is this state'
    // this.setState =({
    //     text: 'This is a safe modification'
    // })

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default StateInAction;