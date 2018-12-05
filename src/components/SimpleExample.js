import React from 'react';
import ReactMapGL, {SVGOverlay} from 'react-map-gl';
import Immutable from 'immutable';
import ScatterplotOverlay from './scatterplot-overlay';
import CITIES from '../data.json';

//
// function redraw({project}) {
//     const [cx, cy] = project([-79.4163, 43.70011]);
//     return <circle cx={cx} cy={cy} r={4} fill="blue" />;
// }

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
        }
    };


    render() {
        return (
            <ReactMapGL
                mapboxApiAccessToken='pk.eyJ1IjoicGh1bGxyMiIsImEiOiJjanBibGIwbjgwNTQyM29sa3M1OGdyM3V5In0.hxUtbU_3ehRWJ-HOQLm8dw'
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                // mapStyle={mapStyle}
            >
                <ScatterplotOverlay key="scatterplot"
                                    locations={CITY_LOCATIONS}
                                    dotRadius={10}
                                    globalOpacity={0.8}
                                    compositeOperation="lighter"
                                    dotFill="#00a8fe"
                                    renderWhileDragging={true} />
            </ReactMapGL>
        );
    }
}