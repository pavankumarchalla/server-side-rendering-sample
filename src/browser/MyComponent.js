import React, { Component } from 'react'

class MyComponent extends Component {

    constructor(props) {
        super(props)

        // let data;

        // if(__isBrowser__) {
        //     data = window.__data__
        // } else {
        //     data = []
        // }

        this.state = {
            data: "",
            jsonData: {firstName: "Pavan from Client", lastName: "Kumar from Client"}
        }
    }

    componentDidMount() {
        console.log("Window data",window.__data_)
        console.log("Window JSON Data", window.__jsonData__)
        this.setState({data: window.__data__})
        this.setState({jsonData: window.__jsonData__})
    }

    handleClick() {
        console.log('event works');
    }

    render() {
        return <div>
            <p>{this.state.data}</p>
            <p>{this.state.jsonData.firstName}</p>
            <p>{this.state.jsonData.lastName}</p>
            <button onClick={this.handleClick}>Hello Pavan</button>
        </div>
    }
}

export default MyComponent;