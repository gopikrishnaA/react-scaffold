import React, { Component } from 'react'
import { connect } from 'react-redux'
import { history } from 'store'

import './summery.css'

class Pure extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      items: this.props.items,
      isSort: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSortTimeStamp = this.onSortTimeStamp.bind(this)
  }
  handleChange (event) {
    const value = event.target.value
    const totalItems = this.props.items
    this.setState({
      value,
      items: value === 'All' ? totalItems : Object.keys(totalItems)
        .filter(key => totalItems[key].status === value)
        .reduce((obj, key) => {
          obj[key] = totalItems[key]
          return obj
        }, {})
    })
  }
  onSortTimeStamp (event) {
    const totalItems = this.state.items
    const isSort = !this.state.isSort
    this.setState({
      isSort,
      items: Object.keys(totalItems)
        .sort((a, b) => {
          return isSort ? (totalItems[a].timeStamp > totalItems[b].timeStamp ? -1
            : totalItems[a].timeStamp < totalItems[b].timeStamp ? 1 : 0)
            : (totalItems[a].timeStamp < totalItems[b].timeStamp ? -1
              : totalItems[a].timeStamp > totalItems[b].timeStamp ? 1 : 0)
        })
        .reduce((obj, key) => {
          obj[key] = totalItems[key]
          return obj
        }, {})
    })
  }
  render () {
    const {
      items,
      value,
      isSort
    } = this.state
    return (
      <div>
        <h1 className='h1'>Summery</h1>
        <table border='1' cellPadding='10' cellSpacing='0' className='summery-table'>
          <thead>
            <tr>
              <th className='th1'>S.no</th>
              <th className='th2'>JokeId</th>
              <th className='th3'>Joke</th>
              <th className='th4'>
                <select value={value} onChange={this.handleChange}>
                  <option value='' selected disabled hidden>Filter By</option>
                  <option value='Like'>Like</option>
                  <option value='Unlike'>Unlike</option>
                  <option value='All'>All</option>
                </select>
              </th>
              <th className='th5' style={{
                backgroundImage: isSort
                  ? 'url("http://tablesorter.com/themes/blue/asc.gif")'
                  : 'url("http://tablesorter.com/themes/blue/desc.gif")'
              }} onClick={this.onSortTimeStamp}>TimeStamp</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(items).map((key, i) => {
              return (<tr data-qa={`tr${key}`} key={i}>
                <td>{i + 1}</td>
                <td className='td1' onClick={() => history.push(`/joke/${key}`)} >
                  {key}
                </td>
                <td>{items[key].joke}</td>
                <td>{items[key].status}</td>
                <td>{items[key].timeStamp}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({login}) => ({
  items: login.items
})

const mapDispatchToProps = (dispatch) => ({
})

export const Summery = connect(mapStateToProps, mapDispatchToProps)(Pure)
