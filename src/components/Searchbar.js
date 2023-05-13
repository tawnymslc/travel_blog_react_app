import React, { useState } from "react";
import { Button, Container, Col, Row } from 'reactstrap';
import axios from "axios";
import DomainCard from "./DomainCard";
import udCardImg from '../img/ud_image.png'
import udLogo from '../img/ud_logo.png'

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const API_ENDPOINT = "https://api.ud-sandbox.com/api/v2/resellers/tawnyapp/domains/suggestions?";

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    axios.get(API_ENDPOINT, {
        params: {
          search: searchQuery,
        },
      })
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
      //setSearchQuery("");
  };

  return (
    <Container className='web3-container'>
      <Row>
        <Col className='text-center'>
          <h2>Own your identity in the digital world</h2>
          <h5>Search for a Web3 domain by Unstoppable Domains <img className='ud-logo-indesc' src={udLogo}/></h5>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ marginTop: '20px' }}>
        <Col xs='auto' className="text-center">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="custom-search-bar" 
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button type='submit' color='primary'>
              Search
          </Button>
        </form>
        </Col>
      </Row>
    <Container style={{ marginTop: '30px' }}>
      <Row style={{ marginLeft: '95px' }}>
        {searchResults.map((domain, index) => (
          <Col md={3} className="m-4 text-center" key={index}>
            <DomainCard domain={domain} udImg={udCardImg} searchQuery={domain.name} />
          </Col>
        ))}
      </Row>
    </Container>
  </Container>
);
}

export default SearchBar;
