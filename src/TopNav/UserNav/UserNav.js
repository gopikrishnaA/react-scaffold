import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUser } from 'fa5-pro-solids'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'

const UserDiv = styled.div`
  align-items: center;
  letter-spacing: 0;
  grid-template-columns: 56px auto;
  text-align: left;
  margin-left: auto;
  grid-area: User;
  border-left: 1px solid ${p => p.theme.palette.background.border};
  @media(max-width: 768px){
    border-left: none;
  }
`
const UserNameContainer = styled(Typography)`
  padding-left: 5px;
  @media(max-width: 768px){
    display: none;
  }
`
const UserAvatar = styled(Avatar)`
  @media(max-width: 768px){
    justify-self: center;
    display: ${p => !p.isFromSideNav ? 'none' : 'block'};
  }
`
const DefaultUserAvatar = styled(Avatar)`
  justify-content: center;
  @media(max-width: 768px){
    display: ${p => !p.isFromSideNav ? 'none' : 'block'};
  }
`
const UserButton = styled(Button)`
  text-transform: none;
  align-items: center;
  span {
    margin-right: auto;
  }
`
const ThemedIcon = styled(FontAwesomeIcon)`
  color: ${p => p.theme.palette && p.theme.palette.text.primary}
`

const UserName = styled.div`
font-weight: 600;
font-size: 14px;
position: relative;
color: #fff;
margin-left: 10px;
`
const UserProfession = styled.div`
position: relative;
color: #fff;
`
const SettingsIcon = styled.div`
position: absolute;
justify-content: end;
align-items: end;
left: 190px;
color: #fff;
`
const IconSize = styled(FontAwesomeIcon)`
font-size: 2.2em;
`

class UserNav extends Component {
  state = {
    open: false
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return
    }
    this.setState({ open: false })
  }

  renderUserButton = (userAvatar, firstName, lastName, isFromSideNav) => {
    if (userAvatar && firstName) {
      return (
        <Fragment>
          <UserAvatar alt={`${firstName} ${lastName}`} src={userAvatar} isFromSideNav={isFromSideNav} />
          <UserNameContainer>{`Hello, ${firstName}`}</UserNameContainer>
        </Fragment>
      )
    } else if (firstName) {
      return (
        <Fragment>
          <UserAvatar alt={`${firstName} ${lastName}`} isFromSideNav={isFromSideNav} >
            {firstName.charAt(0)}{lastName && lastName.charAt(0)}
          </UserAvatar>
          <UserNameContainer>{`Hello ${firstName}`}</UserNameContainer>
        </Fragment>
      )
    } else {
      return (
        <DefaultUserAvatar alt='User Nav' isFromSideNav={isFromSideNav} >
          <ThemedIcon icon={faUser} />
        </DefaultUserAvatar>
      )
    }
  }

  render () {
    const { open } = this.state
    const { userAvatar, firstName, lastName, isFromSideNav, userProfession, settingsIcon } = this.props

    return (
      <UserDiv>
        <UserButton
          buttonRef={node => {
            this.anchorEl = node
          }}
          aria-owns={open ? 'menu-list-grow' : null}
          aria-haspopup='true'
          onClick={this.handleToggle}
        >
          {this.renderUserButton(userAvatar, firstName, lastName, isFromSideNav)}
          {isFromSideNav && <Fragment>
            <div>
              <UserName>{`${firstName} ${lastName}`}</UserName>
              <UserProfession>{userProfession}</UserProfession>
            </div>
            <SettingsIcon>
              <IconSize icon={settingsIcon} />
            </SettingsIcon>
          </Fragment>}
        </UserButton>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id='menu-list-grow'
              style={{
                transformOrigin: placement === 'bottom'
                  ? 'center top'
                  : 'center bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={this.handleClose}>
                      <Typography>Settings</Typography>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Typography>Feedback</Typography>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </UserDiv>
    )
  }
}

UserNav.propTypes = {
  userAvatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  handleClose: PropTypes.func
}

export default UserNav
