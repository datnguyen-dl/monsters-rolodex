import React, { Component } from 'react';
import Lifecycles from './lifecycles.component'

class LifecyclesWrap extends Component {
    // constructor(props) {
    //   super(props) // gan props o tren va o day thi` moi' dung props trong Contructor duoc.
    //   this.state = {
    //     monsters: [],
    //     searchField: '',
    //     meaningOfLife: 47 + this.props.increment
    //   }
    //   // de bo code duoi ta dung Arrows Function: handleChange(e){} ----------> handleChange = (e) => {}
    //   // this.handleChange = this.handleChange.bind(this)
    // }
    // ===> rut ngan nhu o duoi
    // state = constructor(props) {super(props)}
    state = {
        meaningOfLife: 47 + this.props.increment,
        showChild: true,
        text: ''
    }

    handleClick = () => {
        // prevState = this.state
        // prevProps = this.props
        this.setState((prevState, prevProps) => {
            return { meaningOfLife: prevState.meaningOfLife + prevProps.increment }
        },
            () => console.log(this.state.meaningOfLife)
        )
    }

    render() {
        return (
            <div>
                <h2>Lifecycles Component</h2>
                <button onClick={() =>
                    this.setState(state => ({
                        // state = this.state
                        showChild: !state.showChild
                    }))
                }
                >
                    Toggle Lifecycles
                </button><br />
                <button
                    onClick={() =>
                        this.setState(state => ({
                            text: state.text + '_hello'
                        }))
                    }
                >
                    Update Text
                </button>
                {this.state.showChild ?
                    <Lifecycles text={this.state.text} /> : null
                }
                <br /><br />
                <div>=======================================</div>
                <h2>Asynchronous setState</h2>
                <strong>{this.state.meaningOfLife}</strong><br /><br />
                <button onClick={this.handleClick}>State</button><br /><br />
            </div>
        )
    }
}

export default LifecyclesWrap