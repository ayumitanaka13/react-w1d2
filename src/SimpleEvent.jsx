import React, { Component } from 'react'

export class SimpleEvent extends Component {
    state = {
        btnText: 'Click',
        inputText: ''
    }
    handlerClick(){
        console.log('Clicked!');
    }
    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted', this.state.inputText)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button className="btn" onClick={this.handlerClick}>
                        {this.state.btnText}
                    </button>
                    <input type="text" placeholder="Enter text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default SimpleEvent
