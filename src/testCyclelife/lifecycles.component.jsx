import React, { Component } from 'react';
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
class Lifecycles extends Component {
    constructor() {
        super();
        console.log('============ constructor!! ============')
    }
    // khi mo component se bao
    componentDidMount() {
        console.log('componentDidMount!')
    }
    // khi update component se bao
    componentDidUpdate() {
        console.log('componentDidUpdate!')
    }
    // khi tat component se bao
    componentWillUnmount() {
        console.log('componentWillUnmount!')
    }
    // khi update thay doi chay. truoc khi RENDER va componentDidUpdate (React updates DOM and Refs)
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate!', nextProps)
        return true
    }

    render() {
        console.log('RENDER!')
        return (
            <div>text: {this.props.text}</div>
        )
    }
}

export default Lifecycles