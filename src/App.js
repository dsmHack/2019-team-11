import React, { Component } from "react";
import {Map, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';
import "./App.css";
import Header from "./ui-core/components/header";
import AddressModal from "./ui-core/modals/address";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: "#84ffff"
        }
    },
    typography: {
        useNextVariants: true
    }
});

class App extends Component {
    render() {
        const triangleCoords = [
            {lat: 41.583943, lng: -93.629191},
            {lat: 41.584208, lng: -93.627939},
            {lat: 41.583247, lng: -93.627649},
            {lat: 41.582972, lng: -93.628821},
        ];

        const style = {
            width: '100%',
            height: '100%'
        };

        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Header title="Find Water Quality Near Me" />

                    <Map
                      google={this.props.google}
                      style={style}
                      zoom={17}
                      initialCenter={{lat: 41.583586, lng: -93.628419}}>

                        <Polygon
                          paths={triangleCoords}
                          strokeColor="#0000FF"
                          strokeOpacity={0.8}
                          strokeWeight={2}
                          fillColor="#0000FF"
                          fillOpacity={0.35} />

                        <Marker position={{lat: 41.5839, lng: -93.6283}} />

                        <Marker
                          position={{lat: 41.5825, lng: -93.629}}
                          icon={{
                              url: "/images/low.png",
                              anchor: new window.google.maps.Point(24,24),
                              scaledSize: new window.google.maps.Size(48,48)
                          }}
                        />

                        <Marker
                          position={{lat: 41.5825, lng: -93.628025}}
                          icon={{
                              url: "/images/med.png",
                              anchor: new window.google.maps.Point(24,24),
                              scaledSize: new window.google.maps.Size(48,48)
                          }}
                        />

                        <Marker
                          position={{lat: 41.5825, lng: -93.627}}
                          icon={{
                              url: "/images/high.png",
                              anchor: new window.google.maps.Point(24,24),
                              scaledSize: new window.google.maps.Size(48,48)
                          }}
                        />


                    </Map>

                    <AddressModal handleClose={() => {}} show={true} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBbQM-FxetsrzMqbJ2xzZbcbDUb9Au4nh4')
})(App)

