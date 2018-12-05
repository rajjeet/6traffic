import React from 'react'
import { Header } from 'semantic-ui-react'
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";

const HeaderExampleBlock = () => (
    <Header as='h1' block>
        <Icon name='road' />
        <Header.Content>
            6 Traffic
            <Header.Subheader>A Blue Sticky Company</Header.Subheader>
        </Header.Content>
    </Header>
)

export default HeaderExampleBlock
