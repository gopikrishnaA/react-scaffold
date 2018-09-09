import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import styled, { injectGlobal } from 'styled-components'

import CncThemeProvider from 'connect-nav/lib/CncThemeProvider'
import Canvas from 'connect-nav/lib/Canvas'
import TopNav from 'connect-nav/lib/TopNav'
import ConnectNav from 'connect-nav/lib/ConnectNav'
import UserNav from 'connect-nav/lib/UserNav'
import SideNav from 'connect-nav/lib/SideNav'
import Data from './static/data'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

html {
  font-family: 'Lato', helvetica, arial, sans-serif;
}
`
const AppWrapper = styled.div`
  height: 100vh;
`

class App extends Component {
  render () {
    return (
      <div>
        <AppWrapper>
          <CncThemeProvider>
            <CssBaseline>
              <Canvas>
                <TopNav>
                  <ConnectNav menuItems={Data.connectMenuItems} />
                  <UserNav
                    firstName='Johnny'
                    lastName='Appleseed'
                    userAvatar={Data.userAvatar}
                  />
                </TopNav>
                <SideNav
                  appLogo={Data.appLogo}
                  appName={Data.appName}
                  sideNavLinks={Data.sideNavLinks}
                  firstName='Johnny'
                  lastName='Appleseed'
                  userAvatar={Data.userAvatar}
                  userProfession={'senior Advocate'}
                  settingsIcon={Data.settingsIcon}
                  isFromSideNav
                />
              </Canvas>
            </CssBaseline>
          </CncThemeProvider>
        </AppWrapper>
      </div>
    )
  }
}

export default App
