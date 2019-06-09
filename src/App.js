import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ""
        }
    }

    updateMessage(text) {
        this.setState({ message: text });
    }

    render() {
        return (<div>
            <Form updateMessage={this.updateMessage.bind(this)}></Form>
            <Message text={this.state.message}></Message>
        </div>);
    }
}

export default App;
