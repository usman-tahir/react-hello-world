import React from 'react';
import {render} from 'react-dom';

import LikesComponent from './LikesComponent';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Hello React!</p>
                <LikesComponent/>
            </div>
        );
    }
};

render(<App/>, document.getElementById('app'));