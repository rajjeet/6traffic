import React from 'react';
import ReactMapGL, {SVGOverlay} from 'react-map-gl';
import Immutable from 'immutable';
import ScatterplotOverlay from './scatterplot-overlay';
import CITIES from '../data.json';
import axios from 'axios';

const API_URL = 'http://35.231.129.73:8080/weather?hour=1';

const CITY_LOCATIONS = Immutable.fromJS(
    CITIES.map(c => [c.longitude, c.latitude])
);

export default class SimpleExample extends React.Component {

    state = {
        viewport: {
            width: 800,
            height: 400,
            latitude: 43.6532,
            longitude: -79.3832,
            zoom: 10
        },
        data: []
    };

    componentDidMount() {
        // axios.get(API_URL)
            // .then(d => this.setState({data: {...d.data}}));
            // .then(d => console.log(d));
        // console.log(this.state);

        // console.log(CITY_LOCATIONS);
        this.setState({data: CITY_LOCATIONS});
    }


    render() {

        return (
            <ReactMapGL
                mapboxApiAccessToken='pk.eyJ1IjoicGh1bGxyMiIsImEiOiJjanBibGIwbjgwNTQyM29sa3M1OGdyM3V5In0.hxUtbU_3ehRWJ-HOQLm8dw'
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                // mapStyle={mapStyle}
            >
                <ScatterplotOverlay key="scatterplot"
                                    locations={this.state.data}
                                    dotRadius={10}
                                    globalOpacity={0.8}
                                    compositeOperation="lighter"
                                    dotFill="#00a8fe"
                                    renderWhileDragging={true}/>
            </ReactMapGL>
        );
    }
}