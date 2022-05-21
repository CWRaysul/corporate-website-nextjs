import React, { Fragment } from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'

export default function service() {
  return (
    <Fragment>
        <Container className="marginAndPadding">
            <Row>
                <h2 className='heading-three text-center'>My Service</h2>
                <Col lg={4} md={4} sm={6}> 
                    <div className="service">
                       <Card className="py-2">
                          <Card.Img className="circle-img" variant="top" src="https://www.codewareltd.com/assets/images/icon/Software-Development.png" />
                          <Card.Body>
                             <Card.Title className="text-center">Software Development</Card.Title>
                             <Card.Text className="card-text">
                                SManual work transforming to automation, business need solutions – Solid Team providing the solution
                             </Card.Text>
                          </Card.Body>
                       </Card>
                    </div>
                </Col>
               <Col lg={4} md={4} sm={6}>
                    <div className="service">
                       <Card className="py-2">
                          <Card.Img className="circle-img" variant="top" src="https://www.codewareltd.com/assets/images/icon/Web-Development.png" />
                          <Card.Body>
                             <Card.Title className="text-center">Web Development</Card.Title>
                             <Card.Text className="card-text">
                                A talented & passionate team, just delivering awesome web creation that max fit your need.
                             </Card.Text>
                          </Card.Body>
                       </Card>
                    </div>
                </Col>
               <Col lg={4} md={4} sm={6}>
                    <div className="service">
                       <Card className="py-2">
                          <Card.Img className="circle-img" variant="top" src="https://www.codewareltd.com/assets/images/icon/APPS-DEVELOPMENT.png" />
                          <Card.Body>
                             <Card.Title className="text-center">App Development</Card.Title>
                             <Card.Text className="card-text">
                                Today’s trend – world going to within a 5.5 inch monitor, assuring quality mobile apps development
                             </Card.Text>
                          </Card.Body>
                       </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}
