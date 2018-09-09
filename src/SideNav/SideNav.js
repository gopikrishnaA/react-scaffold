import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Links,
  NavItem,
  NavTitle,
  NavLabel,
  NavIcon,
  CustomLink,
  IconSize
} from './SideNavLinks'
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faTimes,
  faBars
} from 'fa5-pro-solids'
import UserNav from '../TopNav/UserNav/UserNav'

const SideNavContainer = styled.div`
  display: grid;
  grid-template-rows: 56px auto;
  grid-template-areas: ' Logo ' ' Links ';
  z-index: 20;
  bottom: 0px;
  grid-area: SideNav;
  position: absolute;
  height: 100vh;
  color: #ffffff40;
  background: ${p => p.theme.palette && p.theme.palette.background.nav2};
  width: ${p => (p.sideNavisOpen ? '240px' : '60px ')};
  box-shadow: ${p => (p.sideNavisOpen ? '2px 4px 6px rgba(0,0,0,.24)' : 'none')};
  transition: width 185ms;
  transition-property: width;
  transition-delay: 60ms;
  @media (max-width : 768px) {
    display: ${p => (p.sideNavisOpen ? 'grid' : 'none')}
  }
`

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: auto 1fr;
  grid-template-rows: 56px 1fr;
  grid-template-areas:  
  ' SideNav ContentArea ';
`

const Image = styled.img`
width: 25px;
margin-right: 10px;
`

const BottomNavItem = styled(NavItem)`
position: absolute;
bottom: 0;
`

const RightIcon = styled(IconSize)`
position: absolute;
bottom: 10px;
right: 10px;
`

const MenuIcon = styled(NavItem)`
  z-index: 20;
  cursor: pointer;
  color: #000;
  bottom: 50px;
  @media (min-width : 769px) {
    display: none;
  }
`

const CloseIcon = styled.div`
  @media (max-width : 768px) {
    height: 50px;
    display: grid;
    width: 100%;
    cursor: pointer;
    align-items: end;
    position: absolute;
    color: #000;
    justify-content: end;
    left: 30px;
    top: 0
  }
`

const CloseIconeSize = styled(IconSize)`
  display: none;
  @media (max-width : 768px) {
    display: block;
  }
`

const UserNavItem = styled(NavItem)`
  display: none;
  @media (max-width : 768px) {
    display: block;
    margin-top: 50px;
  }
`
const BottomLine = styled.div`
  margin: 0 10px;
  border-bottom: 1px solid #fff;
`

export default class SideNav extends React.Component {
  state = {
    sideNavisOpen: false
  }

  toggleNav = () => {
    this.setState({ sideNavisOpen: !this.state.sideNavisOpen })
  }

  render () {
    const { sideNavLinks = [],
      appName = '',
      appLogo,
      userAvatar,
      firstName,
      lastName,
      userProfession,
      settingsIcon,
      isFromSideNav } = this.props
    return (
      <Grid>
        <MenuIcon onClick={this.toggleNav}>
          <IconSize icon={faBars} />
        </MenuIcon>
        <SideNavContainer sideNavisOpen={this.state.sideNavisOpen}>
          <NavTitle>
            <Image src={appLogo} />
            {this.state.sideNavisOpen && <span>{appName}</span>}
          </NavTitle>
          <UserNavItem>
            <UserNav
              isFromSideNav={isFromSideNav}
              userAvatar={userAvatar}
              firstName={firstName}
              lastName={lastName}
              userProfession={userProfession}
              settingsIcon={settingsIcon} />
            <BottomLine />
          </UserNavItem>
          <Links>
            {sideNavLinks.map((link, index) => (
              <NavItem key={index} onClick={this.toggleNav}>
                <CustomLink>
                  <NavIcon>
                    <IconSize icon={link.icon} />
                  </NavIcon>
                  {this.state.sideNavisOpen &&
                    <NavLabel to={link.path}>
                      {link.title}
                    </NavLabel>}
                </CustomLink>
              </NavItem>
            ))}
            <BottomNavItem>
              <CustomLink>
                {!this.state.sideNavisOpen
                  ? <NavIcon onClick={this.toggleNav}>
                    <IconSize icon={faChevronCircleRight} />
                  </NavIcon>
                  : <NavIcon onClick={this.toggleNav}>
                    <RightIcon icon={faChevronCircleLeft} />
                  </NavIcon>}
              </CustomLink>
            </BottomNavItem>
          </Links>
          <CloseIcon onClick={this.toggleNav}>
            <CloseIconeSize icon={faTimes} />
          </CloseIcon>
        </SideNavContainer>
      </Grid>
    )
  }
}

SideNav.propTypes = {
  sideNavLinks: PropTypes.array,
  appLogo: PropTypes.string,
  appName: PropTypes.string,
  userAvatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userProfession: PropTypes.string,
  settingsIcon: PropTypes.object,
  isFromSideNav: PropTypes.bool
}
