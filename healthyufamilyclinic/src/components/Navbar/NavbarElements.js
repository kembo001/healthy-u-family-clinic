import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import{FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
background: #fff;
height: 80px;
display:flex;
justify-content: space-between;
padding:0.5rem calc(100vw - 1000px)/2);
z-index: 10;
`

export const NavLink = styled(Link)`
    color:#000;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;

    &.active {
        color: #385399
    }
    
`

export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtnLink = styled(Link)`
background: var(--main-color) !important;
color: #fff !important;
font-weight: 650 !important;
font-size: 1.25rem;
text-transform: uppercase;
font-weight: 400;
padding: 9px 15px;
/* border-radius: 30px; */
text-align: center;
display: inline-block;
-webkit-transition: all 0.3s ease-in-out;
-moz-transition: all 0.3s ease-in-out;
-o-transition: all 0.3s ease-in-out;
transition: all 0.3s ease-in-out;
`