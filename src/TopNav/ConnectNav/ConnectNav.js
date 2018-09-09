import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretDown } from 'fa5-pro-solids';
import PropTypes from 'prop-types'

const ConnectNavContainer = styled.div`
  grid-area: Logo;
  height: 40px;
  padding: 18px 0 0 24px;
`

const DropDownSpan = styled.span`
  font-size: 20px;
  color: ${p => p.theme.palette.text.primary}

  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

const MenuContainer = styled(Menu)`
  top: 32px !important;
`

const DropDownIcon = styled(FontAwesomeIcon)`
  padding: 0 5px 0;
  font-size: 1.5em;
  height: 20px;
  color: ${p => p.theme.palette.text.primary}
`

export default class ConnectNav extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      menuEl: null,
      menuOpen: false
    }
  }

  handleMenuClose = () => {
    this.setState({ menuEl: null })
  }

  handleClick = e => {
    this.setState({ menuEl: e.currentTarget })
  }

  render () {
    const { menuItems = [] } = this.props
    return (
      <ConnectNavContainer>
        <DropDownSpan className='connect-nav' onClick={this.handleClick}>
          Connects
          <DropDownIcon icon={faCaretDown} />
        </DropDownSpan>
        <MenuContainer
          id='connect-menu'
          anchorEl={this.state.menuEl}
          open={!!this.state.menuEl}
          onClose={this.handleMenuClose}
        >
          {this.props.menuItems.map((item, index) => (
            <MenuItem onClick={this.handleMenuClose} key={`${item.value} - ${index}`}>{item.value}</MenuItem>
          ))}
        </MenuContainer>
      </ConnectNavContainer>
    )
  }
}
ConnectNav.propTypes = {
  menuItems: PropTypes.array, 
}

ConnectNav.propTypes = {
  menuItems: PropTypes.array
}
