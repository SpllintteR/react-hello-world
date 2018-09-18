import React from 'react';
import ReactDOM from 'react-dom';

import Greeter from 'Greeter';

var firstName = "Paulo";

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);