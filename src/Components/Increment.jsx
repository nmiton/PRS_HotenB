import React from "react";

class Incrementer extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {
            value: props.value, 
            timer : null
        }
    }

    componentDidMount () {
        this.play();
    }

    componentwillUnmount () {
        this.pause();
    }

    increment (){
        if(this.state.value<this.props.end){
            this.setState((state, props)=>({value : state.value + props.step}));
        }
    }

    tick () {
        this.setState({date: new Date()});
    }

    pause () {
        window.clearInterval(this.state.timer);
        this.setState({
            timer : null
        })
    }

    play () {
        this.setState({
            timer : window.setInterval(this.increment.bind(this), 150)
        })
    }

    render () {
        return (
            <span> {this.state.value}</span>
        )
    }
}

Incrementer.defaultProps = {
    value : 0,
    step : 2,
}

export default Incrementer
