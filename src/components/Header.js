import {Col, Container, Navbar, NavbarBrand, Row} from 'reactstrap'

const Header = () => {
    return(
        <>
        <Navbar dark color='black' sticky='top' expand='md'>
            <NavbarBrand>
                
            </NavbarBrand>
        </Navbar>
        <Container>
                    <Row className='justify-content-between'>
                        <Col sm={3} className='text-center'>
                            <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-brands fa-instagram"></i></a>
                            <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a class="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        </Col>
                        <Col sm={5} className='text-center'>
                        <h3>Destinations</h3>
                            <form>
                                <select class="form-control form-control-sm">
                                    <option value="Select">Select</option>
                                    <option value="Amsterdam">Amsterdam</option>
                                    <option value="HongKong">Hong Kong</option>
                                    <option value="Kyoto">Kyoto</option>
                                    <option value="Lisbon">Lisbon</option>
                                    <option value="London">London</option>
                                    <option value="Paris">Paris</option>
                                    <option value="Saigon">Saigon</option>
                                    <option value="Tokyo">Tokyo</option>
                                </select>
                            </form>
                        </Col>
                        <Col sm={3} className='text-center'>
                        Some Text
                        </Col>
                    </Row>
                </Container>
        </>
    );
};

export default Header;