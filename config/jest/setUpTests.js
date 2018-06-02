// in src/setupTests.js file
import { configure } from 'enzyme'
// this is where we reference the adapter package we installed
// earlier
import Adapter from 'enzyme-adapter-react-16'

// This sets up the adapter to be used by Enzyme
configure({ adapter: new Adapter() })
