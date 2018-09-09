import appLogo from './logo.svg'
import userAvatar from './johnchapman.jpg'

import {
  faFolderOpen,
  faHome,
  faMedkit,
  faEdit,
  faDollarSign,
  faGem,
  faCog
} from 'fa5-pro-light'

const appName = ' Connect of Connects'
const userTitle = 'connect Team!'

const sideNavLinks = [
  { icon: faHome, title: 'Home', path: '/home' },
  { icon: faFolderOpen, title: 'Appeals', path: '/appeals' },
  { icon: faDollarSign, title: 'Billing', path: '/billing' },
  { icon: faGem, title: 'Claims', path: '/claims' },
  { icon: faMedkit, title: 'Benefits', path: '/benefits' },
  { icon: faEdit, title: 'Enrollment', path: '/enrollment' }
]

const connectMenuItems = [
  { value: 'Connect 1' },
  { value: 'Connect 2' },
  { value: 'Connect 3' }
]
export default {
  userAvatar,
  appLogo,
  appName,
  userTitle,
  sideNavLinks,
  connectMenuItems,
  settingsIcon: faCog
}
