import { Container, Row, Col } from 'reactstrap';
import '../../node_modules/bootstrap-social/bootstrap-social.css'

const Footer = () => {
    return(
      <Container fluid className='site-footer'>
        <Row className="justify-content-center">
          <Col sm={3} className='text-center'>
          <h3>Browse by Destination</h3>
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
          <Col sm={5} className='text-center'>
            <h3>Connect with Me</h3>
            <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-brands fa-instagram"></i></a>
            <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
            <a class="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
          </Col>
          <Col sm={3} className='text-center'>
            <h3>Newsletter</h3>
            <form>
                <div class="col-12 newsletter-input">
                    <input type="email" class="form-control form-control-sm" id="emailNews" placeholder="EMAIL" />
                </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
};

export default Footer;