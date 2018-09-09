import React from 'react'
import renderer from 'react-test-renderer'
import Toolbar from './Toolbar'

it('renders correctly', () => {
  const tree = renderer.create(<Toolbar />).toJSON()
  expect(tree).toMatchSnapshot()
})
