import styled from 'styled-components'
import ButtonBase from '@material-ui/core/ButtonBase'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

export const Links = styled.div`
  display: grid;
  grid-area: Links;
  grid-template-rows: 50px 50px 50px 50px 50px 50px;
  align-items: center;
  @media (max-width : 768px) {
    margin-top: 60px;
  }
`

export const NavItem = styled(ButtonBase)`
  height: 50px;
  display: grid;
  width: 100%;
  padding: 5px;
  grid-template-columns: 50px 1fr;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  &:hover {
    color: ${p => p.theme.palette && p.theme.palette.text.alt1};
    background: rgba(0, 0, 0, 0.2);
  }
`

export const NavTitle = styled.div`
letter-spacing: .05em;
  color: ${p => p.theme.palette && p.theme.palette.text.alt1};
  font-weight: 400;
  position: absolute;
  left: 20px;
  top: 22px;

  span {
    font-weight: 600;
    position: fixed;
    padding-top: 5px;
  }
`

export const NavLabel = styled(Link)`
  letter-spacing: .08em;
  font-weight: 300;
  text-transform: uppercase;
  font-size:14px;
  position: absolute;
  left: 60px;
  top: 20px;
  text-decoration: none !important;
  color: ${p => p.theme.palette && p.theme.palette.text.alt1};
`

export const NavIcon = styled.div`
  width: 50px;
  padding: 0;
  display: grid;
  justify-content: center;
  align-items: center;
`
export const IconSize = styled(FontAwesomeIcon)`
  font-size: 2.2em;
`
export const CustomLink = styled.a`
  transition: 0.3s all ease-in-out;
  padding: 10px 0;

  &:link {
    color: ${p => p.theme.palette && p.theme.palette.text.alt2};
  }
  &:visited {
    color: ${p => p.theme.palette && p.theme.palette.text.alt2};
  }
  &:hover {
    color: ${p => p.theme.palette && p.theme.palette.text.alt1};
    transition: 0.3s all ease-in-out;
  }
`
