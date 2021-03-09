import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <Container>
            <Row>
            {
                countries.map(country => <Country country={country} key={country.name}></Country>)
            }
            </Row>
        </Container>
    );
};

export default Home;