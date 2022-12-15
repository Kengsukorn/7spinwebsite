import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Img1 from '../../img/gamemobile/imggamemobile.webp';

function MobileGames() {
    return (
        <>
        <Row>
            <Col xs={6} md={3}>
                <Card>
                    <Card.Img variant="top" src={Img1} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={6} md={3}>
                <Card>
                    <Card.Img variant="top" src={Img1} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={6} md={3}>
                <Card>
                    <Card.Img variant="top" src={Img1} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={6} md={3}>
                <Card>
                    <Card.Img variant="top" src={Img1} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
        <Col xs={6} md={3}>
            <Card>
                <Card.Img variant="top" src={Img1} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} md={3}>
            <Card>
                <Card.Img variant="top" src={Img1} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} md={3}>
            <Card>
                <Card.Img variant="top" src={Img1} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={6} md={3}>
            <Card>
                <Card.Img variant="top" src={Img1} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    </>
    )
}

export default MobileGames