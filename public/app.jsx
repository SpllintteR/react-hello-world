import React from 'react';
import ReactDOM from 'react-dom';

var GreeterMessage = React.createClass({
    render: function() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message + '!!'}</p>
            </div>
        );
    }
})

var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var updates = {}
        if(name.length > 0){
            updates.name = name;
            this.refs.name.value = '';
        }
        if(message.length > 0){
            updates.message = message;
            this.refs.message.value = '';
        }
        this.props.onNewData(updates);
    },
    render: function() {
       return (
            <form onSubmit={this.onFormSubmit}>
                <div><input type="text" ref="name" placeholder="Enter Name"/></div>
                <div><textarea ref="message" placeholder="Enter Message"/></div>
                <div><button>Submit</button></div>
            </form>
       );
    }
})

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: "React",
            message: "This is the default message!"
        };
    },
    handleNewData: function(updates) {
        this.setState(updates);
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    render: function() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

var firstName = "Paulo";

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);