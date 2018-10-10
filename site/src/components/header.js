import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import menuIcon from '../images/ui_assets/baseline-menu-24px.svg';
import logo from '../images/ui_assets/logo.svg';

// Styles //
const StyledMobileMenu = styled.div`
width: 0px;
height: 100vh;
background-color: rgb(74, 74, 74);
Z-Index: 5;
display: grid;
grid-template-areas: 
"mobile-menu-logo"
"links";
grid-template-columns: 100%;
grid-template-rows: auto 1fr;
position: fixed;
transition: all .5s;
overflow-x: hidden;
> img {min-width: 100px}
}
`

const StyledNavLink = styled(Link)`
display: block;
padding: 10px 10px 10px 15px;
text-decoration: none;
font-size: 16px;
color: #f5f5f5;
`

const StyledMobileMenuLogo = styled.img`
grid-area: mobile-menu-logo;
max-width: 100px;
margin: 10px 0px 10px 0px;
transform: unset;
`

const StyledMenuButton = styled.img`
  width: 42px;
  margin: 10px 16px 10px 10px;
  transition: all .4s;
  justify-self: end;
  align-self: start;
`


const StyledNavLinksContainer = styled.div`
  grid-area: links;
  display: grid;
  grid-auto-rows: min-content;
  height: auto;
`

const StyledHeader = styled.div`
display: grid;
grid-area: header;
height: auto;
`

const open = {
  menu:{
    width: '200px',
    transition: 'all .5s',
    overflowX: 'visible',
  }, 
  button: {
    transform: 'rotate(90deg)'
  }
}

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
    }
  }
  render(){
    return(
      <StyledHeader>
        <StyledMobileMenu key="StyledMenu" style={this.state.isVisible ? open.menu : null }>
          <StyledMobileMenuLogo src={logo} className="menuSiteLogo" alt="logo"/>
          <StyledNavLinksContainer>
            <StyledNavLink onClick={() => { this.setState({ isVisible: !this.state.isVisible }); this.props.menuOpen(); }} to={'/'}>Work</StyledNavLink>
            <StyledNavLink onClick={() => { this.setState({ isVisible: !this.state.isVisible }); this.props.menuOpen(); }} to={'/aboutme'}>About</StyledNavLink>
          </StyledNavLinksContainer>
        </StyledMobileMenu>
        <StyledMenuButton src={menuIcon} alt="Menu" onClick={() => {this.setState({isVisible: !this.state.isVisible});}} style={this.state.isVisible ? open.button : null }></StyledMenuButton>
      </StyledHeader>
    );
  }
}

export default Header