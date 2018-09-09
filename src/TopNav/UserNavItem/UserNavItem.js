import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

class UserNavItem extends Component {
  render () {
    const { label } = this.props

    return (
      <MenuItem onClick={this.props.onClick}>
        <Typography>{label}</Typography>
      </MenuItem>
    )
  }
}

UserNavItem.propTypes = {
  label: PropTypes.string,
  handleClose: PropTypes.func
}
export default UserNavItem
