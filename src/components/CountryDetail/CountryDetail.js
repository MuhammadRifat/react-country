import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from 'react-bootstrap';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    useEffect( () => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [countryName])
    let isShow = false;
    if(country.length !== 0){
        isShow = true;
    }
    console.log(country.length);
    return (
        isShow && <Container>
            <img style={{width: '60%'}} src={country[0].flag} alt=""/>
            <h2>Country : {country[0].name}</h2>
            <ul>
                <li>Area: {country[0].area}</li>
                <li>Capital: {country[0].capital}</li>
                <li>Population: {country[0].population}</li>
                <li>Region: {country[0].region}</li>
                <li>Subregion: {country[0].subregion}</li>
                <li>Native Name: {country[0].nativeName}</li>
            </ul>

        </Container>
    );
};

export default CountryDetail;