import React, { Component } from 'react'

export class StatePractice extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
            imageWidth: ''
        }
    }
    handleFocus = (e) => {
        this.setState({
            message: 'Do you agree to the site terms of service by filling out the form?'
        })
    }
    handleMouseEnter = (e) => {
        // e.preventDefault()
        this.setState({
            message: ''
        })
    }
    handleLoad = (e) => {
        // e.preventDefault()
        const width = e.target.width
        if (width >= 100) {
            this.setState({
                imageWidth: 'Your image is big!'
            })
        }
    }
    componentDidUpdate(){
        console.log(this.state.imageWidth)
    }

    render() {
        return (
            <div>
                <input type="text" onFocus={this.handleFocus} />
                <h3 onMouseEnter={this.handleMouseEnter}>{this.state.message}</h3>
                <img src="https://picsum.photos/200/300" alt="" onLoad={this.handleLoad} />
                <p>{this.state.imageWidth}</p>
            </div>
        )
    }
}

export default StatePractice
