import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {term: ''};

        // overriding setState (somewhat) by binding onInputChange
        // this is so that this.setState works 

        // rule of thumb: if you are having a callback that passes back a function
        // then you need to bind the context
        // otherwise, you'll get an error in the console that says 'this.setState is // undefined.'

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    // prevent the form from submitting if someone presses 'enter' or 
    // clicks 'submit'

    onFormSubmit(event) {
        event.preventDefault();

        // we need to go and fetch weather data 
        this.props.fetchWeather(this.state.term);
        //sets the state of term to empty string (looks like it emptied out the 
        // default)
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                  placeholder="Get a five-day forecast in your favorite cities"
                  className="form-control"
                  value={this.state.term}
                  onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// By passing 'null' for the first argument you are telling React that 
// you don't care about the state in this particular component 
export default connect(null, mapDispatchToProps)(SearchBar);

//the classNames are from Bootstrap...you can view more about them in that documentation