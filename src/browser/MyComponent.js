import React, { Component } from 'react'

class MyComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        this.setState({data: window.__data__})
    }

    handleClick() {
        console.log('event works');
    }
    
    render() {
        return <div>
            <p>{this.state.data}</p>
            <button onClick={this.handleClick}>Hello Pavan</button>
        </div>
    }
}

export default MyComponent;