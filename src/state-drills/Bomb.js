import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0
    }
    counter = null;
    componentDidMount() {
        this.counter = setInterval(() => {
            if (this.state.count < 8) {
                this.setState({ count: this.state.count + 1 })
            }
            else {
                clearInterval(this.counter)
            }
        }, 1000);
    }

    componentWillUnmount() {
            clearInterval(this.counter);
    }
    
    render() {
        return (
            <div>
                <p>{this.state.count >= 8 ? 'BOOM!!!!' : this.state.count % 2 === 0 ? 'tick' :  'tock'}</p>
            </div>
        )
    }
}

export default Bomb