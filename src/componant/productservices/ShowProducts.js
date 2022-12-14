import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';

import MobileGames from './MobileGames';
import PCGames from './PCGames';

import './ShowProducts.css';

function ShowProducts() {
    return (
        <section id='show-all-products'>
            <Container>
                <Row className='title-show-products'>
                    <Col>
                        <h2>Products</h2>
                        <p>Asiasoft เผยแพร่เกมต่อไปนี้ภายใต้แบรนด์ ‘PlayPark’</p>
                    </Col>
                </Row>
                <Tabs
                    defaultActiveKey="mobilegame"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3 button-products"
                >
                    <Tab eventKey="mobilegame" title={<span><FaDesktop />{" Mobile Game"}</span>}>
                        <MobileGames />
                    </Tab>
                    <Tab eventKey="pcgame" title={<span><FaMobileAlt />{" PC Game"}</span>}>
                        <PCGames />
                    </Tab>
                </Tabs>
            </Container>
        </section>

    )
}

export default ShowProducts