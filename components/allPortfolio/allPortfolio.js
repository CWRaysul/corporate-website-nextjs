import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'

export default function AllPortfolio() {
    return(
        <Fragment>
            <Container className="marginAndPadding portfolio">
                <Row>
                    <Col lg={4} md={4} sm={4}>
                         <Card>
                            <a target='_blank' href="www.building.cwprojects.xyz">
                                <Card.Img variant="top" src="https://codewareltd.com/assets/images/portfolio/hoteldhakagardeninn.jpg" />
                            </a>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                         <Card>
                            <a target='_blank' href="www.building.cwprojects.xyz">
                                <Card.Img variant="top" src="https://codewareltd.com/assets/images/portfolio/building.png" />
                            </a>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                         <Card>
                            <a target='_blank' href="www.building.cwprojects.xyz">
                                <Card.Img variant="top" src="https://codewareltd.com/assets/images/portfolio/szefy.png" />
                            </a>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                         <Card>
                            <a target='_blank' href="www.building.cwprojects.xyz">
                                <Card.Img variant="top" src="https://codewareltd.com/assets/images/portfolio/jamdani-xpress.png" />
                            </a>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                         <Card>
                            <a target='_blank' href="www.building.cwprojects.xyz">
                                <Card.Img variant="top" src="https://codewareltd.com/assets/images/portfolio/go-shobuj.png" />
                            </a>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                         <Card>
                            <a target='_blank' href="www.building.cwprojects.xyz">
                                <Card.Img variant="top" src="https://codewareltd.com/assets/images/portfolio/pixigraphics.png" />
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
                    
        </Fragment>
    )
}
