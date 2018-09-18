import React from 'react';
import GreeterForm from 'GreeterForm';
import GreeterMessage from 'GreeterMessage';

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

module.exports = Greeter;