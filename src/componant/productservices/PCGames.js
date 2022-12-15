import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Img2 from '../../img/gamepc/imggamepc.jpg';

function PCGames() {
  return (
    <>
        <Row>
            <Col xs={6} md={3}>
                <Card>
                    <Card.Img variant="top" src={Img2} />
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
                    <Card.Img variant="top" src={Img2} />
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
                    <Card.Img variant="top" src={Img2} />
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
                    <Card.Img variant="top" src={Img2} />
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

export default PCGames