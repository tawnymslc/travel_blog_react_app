import {
        Button, 
        Card, 
        CardBody, 
        CardImg, 
        //CardImgOverlay, 
        CardText, 
        CardTitle, 
        CardFooter
    } from 'reactstrap';
import axios from "axios";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const DomainCard = ({ domain, udImg, searchQuery}) => {
    const {name, price} = domain;
    const domainName = name.split('.')

    const udClick = () => {
        const url = `https://unstoppabledomains.com/search?searchTerm=${encodeURIComponent(searchQuery)}&searchRef=home&tab=relev`;
        window.open(url, '_blank');
        console.log('Search: ', url, searchQuery);
    };

    const stripeClick = async () => {
        axios.post('http://localhost:4243/create-checkout-session', {
            // Add any request payload or data you need to send
          })
          .then((response) => {
            // Handle the response as needed
            console.log('Response:', response.data);
          })
          .catch((error) => {
            // Handle errors
            console.error('Error:', error);
          });
    };

    return (
        <Card className='domain-card'>
            <CardBody className='domain-card-body'>
            <CardImg 
                src={udImg}
            />
                <CardTitle className='domain-card-title'>{domainName[0]}</CardTitle>
                <CardText className='domain-tld'>.{domainName[1]}</CardText>
            </CardBody>
            <CardText style={{ marginTop: '15px', fontWeight: 'bold'}}>${price}</CardText>
            <CardFooter>
                <form action='/create-checkout-session' method='POST'>
                <Button 
                    style={{ marginRight: '10px', backgroundColor: 'rgb(77, 72, 242)' }}
                    onClick={udClick}
                >
                    UD
                </Button>
                
                <Button 
                    type='submit'
                    style={{ backgroundColor: 'rgb(77, 72, 242)' }}
                    //onClick={stripeClick}  
                >
                    Credit Card
                </Button>
                </form>
            </CardFooter>
      </Card>
    );
  }

  export default DomainCard;