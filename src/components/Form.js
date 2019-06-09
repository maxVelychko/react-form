import React, {Component} from 'react';

const validateForm = ({ name, email, phone, blog }) => {
    const urlRegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    if (name.length < 3 || name.length > 30 || !name.match(/^[A-Za-z]+$/)) {
        return false;
    } else if (!email.length || !email.match(/\S+@\S+\.\S+/)) {
        return false;
    } else if (!phone.length || !phone.match(/^[2-9]\d{9}$/)) {
        return false;
    } else if (!blog.length || !blog.match(urlRegExp)) {
        return false;
    }

    return true;
}

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            email: "",
            phone: "",
            blog: "",
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        const isFormValid = validateForm(this.state);
        if (isFormValid) {
            this.props.updateMessage("Form is valid");
        } else {
            this.props.updateMessage("Form is invalid");
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    <h3>Name:</h3>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}></input>
                </label>
                <label>
                    <h3>Email:</h3>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}></input>
                </label>
                <label>
                    <h3>Phone:</h3>
                    <input type="number" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this)}></input>
                </label>
                <label>
                    <h3>Blog URL:</h3>
                    <input type="text" name="blog" value={this.state.blog} onChange={this.handleChange.bind(this)}></input>
                </label>
                <div className="small-6 small-centered text-center columns">
                    <input className="button success expand round text-center" type="submit" value="Verify"></input>
                </div>
            </form>
        </div>);
    }
}

export default Form;
