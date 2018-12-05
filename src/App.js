import React, {Component} from 'react';
// import './App.css';
import TextMenu from "./components/TextMenu";
import {Grid, Segment, Image, Container} from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            <Container>
                <Grid columns={2}>
                    <Grid.Column>
                        <TextMenu/>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Image src='https://via.placeholder.com/350'/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default App;
