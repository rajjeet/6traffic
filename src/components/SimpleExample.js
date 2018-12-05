import React from 'react';
import ReactMapGL, {SVGOverlay} from 'react-map-gl';
import {fromJS} from 'immutable';


function redraw({project}) {
    const [cx, cy] = project([-79.4163, 43.70011]);
    return <circle cx={cx} cy={cy} r={4} fill="blue" />;
}

const mapStyle = fromJS({
    version: 8,
    sources: {
        points: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {type: 'Feature', geometry: {type: 'Point', coordinates: [-79.4163, 43.70011]}}
                ]
            }
        }
    },
    layers: [
        {
            id: 'my-layer',
            type: 'circle',
            source: 'points',
            paint: {
                'circle-color': '#f00',
                'circle-radius': '4'
            }
        }
    ]
});



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
                <SVGOverlay redraw={redraw} />
            </ReactMapGL>
        );
    }
}