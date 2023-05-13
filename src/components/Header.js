import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap'

const Header = () => {
    return(
        <>
        <Navbar dark color='black' sticky='top' expand='md'>
            <NavbarBrand className='ms-5 ms-auto me-auto' href='/'>
                <img />
                <h1 className='mt-1'>Travel/Solo/Fitness</h1>
            </NavbarBrand>
        </Navbar>
        </>
    );
};

export default Header;