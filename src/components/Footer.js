import { Container, Row, Col } from 'reactstrap';
import '../../node_modules/bootstrap-social/bootstrap-social.css'

const Footer = () => {
    return(
      <Container fluid className='site-footer'>
        <Row className="justify-content-center">
          <Col sm={6} className='text-center'>
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