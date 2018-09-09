import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBell } from 'fa5-pro-light';
import styled from 'styled-components';

const ToolBarContainer = styled.div`
  display: grid;
  grid-area: ToolBar;
  height: 56px;
  padding: 16px 20px;
  border-left: 1px solid ${p => p.theme.palette.background.border};
  @media(max-width: 768px){
    border-left: none;
    padding: 0 12px;
  }
`

const NotificationIcon = styled(FontAwesomeIcon)`
  font-size: 1.5em;
  place-self: center;
  color: ${p => p.theme.palette.text.primary};
`
export default class Toolbar extends React.Component {
  render() {
    return (
      <ToolBarContainer>
        <NotificationIcon icon={faBell} />
      </ToolBarContainer>
    )
  }
}
