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
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const DomainCard = ({ domain, udImg, searchQuery}) => {
    const {name, price} = domain;
    const domainName = name.split('.')

    const handleClick = () => {
        const url = `https://unstoppabledomains.com/search?searchTerm=${encodeURIComponent(searchQuery)}&searchRef=home&tab=relev`;
        window.open(url, '_blank');
        console.log('Search: ', url, searchQuery);
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
                <Button 
                    className='domain-button'
                    style={{ marginRight: '10px', backgroundColor: 'rgb(77, 72, 242)' }}
                    onClick={handleClick}
                >
                    UD
                </Button>
                <Button style={{ backgroundColor: 'rgb(77, 72, 242)' }}>Credit Card</Button>
            </CardFooter>
      </Card>
    );
  }

  export default DomainCard;