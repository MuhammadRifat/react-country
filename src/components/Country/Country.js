import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Country.css';

const Country = (props) => {
    const {flag, name} = props.country;
    const history = useHistory();
    const showDetail = country => {
        const url = `/country/${country}`;
        history.push(url);
    }
    return (
        <Col lg={4}>
            <div className="country">
                <img src={flag} alt=""/>
                <h5>{name}</h5>
                <button onClick={() => showDetail(name)}>See Details</button>
            </div>
        </Col>
    );
};

export default Country;