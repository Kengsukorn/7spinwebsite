import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

import { FaFacebookF, FaLine, FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

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
      <div className='container-sub-footer'>
        <Container>
          <Row className='sub-footer'>
            <Col xs={12} md={6} className='col-l'>
              <p>Copyright 2023 © <a href='https://7spin.co.th/' target="_blank">บริษัท เซเว่นสปิน จำกัด</a></p>
            </Col>
            <Col xs={12} md={6} className='col-r'>
              <ul>
                <li><a href='https://www.facebook.com' alt='facebook' target='_blank'><FaFacebookF /></a></li>
                <li><a href='https://line.me/th/' alt='line' target='_blank'><FaLine /></a></li>
                <li><a href='tel:0887501188' alt='tel' target='_blank'><FaPhoneAlt /></a></li>
                <li><a href='mailto:mathurapojjanakul@gmail.com' alt='mail' target='_blank'><FiMail /></a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer