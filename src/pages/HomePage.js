import { Container, Row, Col } from 'reactstrap';
import heroImg from '../img/lisbon_hero.jpeg'
import tawnyHeroImg from '../img/tawny_hero.jpg'

const HomePage = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs='10' className='text-center'>
                    <img src={tawnyHeroImg} className="img-fluid hero" />
                </Col>
                <Col xs='12'>
                <p className='hero-text'>Hello Everyone <br /><br />
                My name is Tawny. Welcome to my travel blog. I'm glad you are here. I created this page as a hobby to detail what matters to me most when I travel. I'm mostly a solo traveler with the goal to still keep up my fitness journey while on the road. I visit local gyms when I'm overseas and hope to provide insight of them to you. <br /><br />
                Another part of my travels is to visit airport lounges. I'll be reviewing my experiences at the different lounges so you know if they are worth the visit.  I've also been blessed to take a couple of business class flights. I'll tell you about the  booking process and also my experience. <br /><br />
                Another topic I would like to cover is a blog of my trips. I'm the type of traveler that mostly stays away from all the "touristy" things in the cities I've visited. My ideal adventure is to find a local neighborhood and get lost.<br /><br />
                Thanks for visiting!<br /><br />
                <b>Tawny</b></p>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;