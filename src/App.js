import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import TextMenu from "./components/TextMenu";
import {Grid, Segment, Container, Image} from "semantic-ui-react";
import TeamLogo from "./components/TeamLogo";
import SimpleExample from "./components/SimpleExample";
import movie from './movie.gif';

const containerStyle = {
    marginTop: '20px'
};

class App extends Component {
    render() {
        return (
            <Container style={containerStyle}>
                <TeamLogo />
                <Grid columns={2} relaxed>
                    <Grid.Column width={3}>
                        <TextMenu/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Segment>
                            <SimpleExample/>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Image src={movie} />
            </Container>
        );
    }
}

export default App;
