var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: "React"
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    onButtonClick: function(e) {
        e.preventDefault();
        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = '';
        if(typeof name === 'string' && name.length > 0){
            this.setState({
                name: name
            });
        }
    },
    render: function() {
        var name = this.state.name;
        return (
            <div>
                <h1>Hello React {name}</h1>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

var firstName = "Paulo";

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);