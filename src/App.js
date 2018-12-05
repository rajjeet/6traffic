import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import TextMenu from "./components/TextMenu";
import {Grid, Segment, Container} from "semantic-ui-react";
import TeamLogo from "./components/TeamLogo";
import SimpleExample from "./components/SimpleExample";

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
            </Container>
        );
    }
}

export default App;
