import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TitleHeader.css';

function TitleHeader() {
    return (
        <section className='section-title-page'>
            <Container>
                <Row>
                    <Col><h1>Product & Service</h1></Col>
                </Row>
            </Container>
        </section>
    )
}

export default TitleHeader