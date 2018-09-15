var Greeter = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello React component</h1>
                <p>component test ok</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);