import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  height: 56px;
  border-radius: 0;
  align-items: center;
  grid-template-columns: auto 1fr auto auto;
  grid-template-areas: ' Logo . ToolBar User';
  background-color: ${p => p.theme.palette && p.theme.palette.background.header};
  padding: 0 0 0 60px;
`

class TopNav extends Component {
  render() {
    
    return <Grid elevation={3}>{this.props.children}</Grid>
  }
}

TopNav.propTypes = {
  children: PropTypes.array
}
export default TopNav
