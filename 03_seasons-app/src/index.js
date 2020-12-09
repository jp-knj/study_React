import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props){
        super(props);

        // This is the only time we do direct assignment.
        // to this.state
        this.state = { lat: null };
    }

    // React says we have to difine render
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => {

                // Call setState
                this.setState({ lat: position.coords.latitude });

                // did not
                // this.state.late = position.coords.latitude
            },
            err => console.log(err)
        );

        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
