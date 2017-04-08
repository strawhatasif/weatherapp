import React, { Component } from 'react';

class GoogleMap extends Component {
    //a new map will be injected into a DOM element (in this case this.refs.map)
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
            
        });
    }
    
    render() {
        //ref refers to interacting with the HTML element created
        //this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;