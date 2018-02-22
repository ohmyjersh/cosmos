import React from 'react'
import styled from 'styled-components'

import Section from '../ov-components/section'
import Example from '../ov-components/example'
import { List, Button, ButtonGroup, Code, Link, Stack, Switch, Icon } from '../../components'

import Avatar from '../../manage/client-avatar'

const clients = [
  {
    id: 'autogenerated-id-goes-here',
    name: 'Clients One',
    type: 'NO TYPE'
  },
  {
    id: 'beep-beep-boop-boop',
    name: 'Clients Two',
    type: 'SINGLE PAGE APPLICATION'
  }
]

const StyledLogo = styled.span`
  width: 48px;
  height: 48px;
  display: inline-block;
`
// TODO: Remove the ConnectionType component and maybe do a flag component
const ConnectionType = styled.div`
  span {
    display: inline-block;
    vertical-align: middle;
  }
`

const ListsExample = () => (
  <Section>
    <Example title="List of Connections">
      <List label="Social">
        <Stack align="fill" widths={[60, 40, 20]}>
          <div>github</div>
          <ConnectionType>
            <Icon size={16} name="" />
            <span>GitHub</span>
          </ConnectionType>
          <Stack align="right">
            <Switch accessibleLabels={[]} />
          </Stack>
        </Stack>
        <Stack align="fill" widths={[60, 40, 20]}>
          <div>google-oauth2</div>
          <ConnectionType>
            <Icon size={16} name="" />
            <span>Google</span>
          </ConnectionType>
          <Stack align="right">
            <Switch accessibleLabels={[]} />
          </Stack>
        </Stack>
      </List>
    </Example>

    <Example title="List of Clients">
      <List>
        {clients.map(client => (
          <Stack key={client.id} widths={[7, 25, 40, 28]}>
            <StyledLogo>
              <Avatar />
            </StyledLogo>
            <div>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
              <br />
              <div>{client.type}</div>
            </div>
            <Stack align="left">
              <span>Client Id: </span>
              <Code>{client.id}</Code>
            </Stack>
            <ButtonGroup>
              <Button icon="quickstarts" label="Quickstart" />
              <Button icon="settings" label="Settings" />
              <Button icon="code" label="Addons" />
              <Button icon="connections" label="Connections" />
            </ButtonGroup>
          </Stack>
        ))}
      </List>
    </Example>
  </Section>
)

export default ListsExample