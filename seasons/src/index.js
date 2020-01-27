import React from 'react';
import ReactDOM from 'react-dom';
import MySeasonDisplay from './MySeasonDisplay';
import MySpinner from './MySpinner';

class App extends React.Component {
    //function that belongs to javascript
    //very first function that is created when the class is rendered
    // constructor(props) {
    //     //super = this brings in all the parents constructors are brought into this child class 
    //     super(props);
        

    //     this.state = { lat: null, errorMessage: '' };
    // }

    //same thing as writing contstructor props --> but jsx we can just write this and babel will read it as if it had constructor
    state = { lat: null, errorMessage: '' }

    //right after the component is render this function will execute
    //do some initial data loading; or for loading something only one time 
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
                console.log(position);
            },
            err => {
                this.setState({ errorMessage: err.message });
                console.log(err)
            }
        );
        console.log('My component was rendered to the screen');
    }

    //this will be called automatically when the component is updated
    //maybe when state changes
    //good place to do more data-laoding when state/props change
    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!')
    }

    //this function will be called when we decide to not show a method at a time on our screen
    //used to do cleanup
    //componentWillUnmount() {}


    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>Error: {this.state.errorMessage}</div>
            )
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
               <MySeasonDisplay lat={this.state.lat}/>
            );
        }
        return (
            <MySpinner message="Finding Your Location (Please Accept Location Request)" />
        )
    }


    //requirement of react
    // render method alone is for returning jsx and nothing else
    render() {
        return(
            <div className='border red'>
                {this.renderContent()}
            </div>
        )
        
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));