import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>HealthyU</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/services" activeStyle>
                    Medical Services
                </NavLink>
                <NavLink to="/forms" activeStyle>
                    Forms
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About Us
                </NavLink>
                <NavLink to="/meet-the-team" activeStyle>
                    Meet The Team
                </NavLink>

            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/contact'>Contact Us</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar