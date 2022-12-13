import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer-bg'>
      <Container>
        <Row className='footer-row'>
          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} md={4}>
                <p style={{ marginBottom: "1.6rem" }}>We believe in Simple, Creative & Flexible Design Standards.</p>
                <p style={{ marginBottom: "1.6rem" }}>Headquarters:795 Folsom Ave, Suite 600 San Francisco, CA 94107</p>
                <p style={{ marginBottom: "1.6rem" }}>Phone: (1) 8547 632521 <br />Fax: (1) 11 4752 1433 <br />Email: info@canvas.com</p>
              </Col>
              <Col xs={12} md={4}>
                <p style={{ marginBottom: "1.6rem" }}>We believe in Simple, Creative & Flexible Design Standards.</p>
                <p style={{ marginBottom: "1.6rem" }}>Headquarters:795 Folsom Ave, Suite 600 San Francisco, CA 94107</p>
                <p style={{ marginBottom: "1.6rem" }}>Phone: (1) 8547 632521 <br />Fax: (1) 11 4752 1433 <br />Email: info@canvas.com</p>
              </Col>
              <Col xs={12} md={4}>
                <p style={{ marginBottom: "1.6rem" }}>We believe in Simple, Creative & Flexible Design Standards.</p>
                <p style={{ marginBottom: "1.6rem" }}>Headquarters:795 Folsom Ave, Suite 600 San Francisco, CA 94107</p>
                <p style={{ marginBottom: "1.6rem" }}>Phone: (1) 8547 632521 <br />Fax: (1) 11 4752 1433 <br />Email: info@canvas.com</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col>
                <p style={{ marginBottom: "1.6rem" }}>We believe in Simple, Creative & Flexible Design Standards.</p>
                <p style={{ marginBottom: "1.6rem" }}>Headquarters:795 Folsom Ave, Suite 600 San Francisco, CA 94107</p>
                <p style={{ marginBottom: "1.6rem" }}>Phone: (1) 8547 632521 <br />Fax: (1) 11 4752 1433 <br />Email: info@canvas.com</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer