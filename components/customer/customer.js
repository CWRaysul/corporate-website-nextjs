import React, {Fragment} from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";

function Customer() {
   return (
      <Fragment>
         <Container className="marginAndPadding">
            <Row>
               <h2 className='heading-three text-center'>Our Customer</h2>
               <Col lg={6} md={6} sm={12} className="mb-5">
                  <div className="customer">
                     <Card>
                        <Card.Img className="left" variant="top" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80" />
                        <Card.Body>
                           <Card.Title>Card title</Card.Title>
                           <Card.Text>
                              This is a longer card with supporting text below as a natural
                              lead-in to additional content. This content is a little bit longer.
                           </Card.Text>
                           <Button className="cart-button" variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>
                  </div>
               </Col>
               <Col lg={6} md={6} sm={12} className="mb-5">
                  <div className="customer">
                     <Card>
                        <Card.Img className="left" variant="top" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80" />
                        <Card.Body>
                           <Card.Title>Card title</Card.Title>
                           <Card.Text>
                              This is a longer card with supporting text below as a natural
                              lead-in to additional content. This content is a little bit longer.
                           </Card.Text>
                           <Button className="cart-button" variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>
                  </div>
               </Col>

               <Col lg={6} md={6} sm={12} className="mb-5">
                  <div className="customer">
                     <Card>
                        <Card.Img className="left" variant="top" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80" />
                        <Card.Body>
                           <Card.Title>Card title</Card.Title>
                           <Card.Text>
                              This is a longer card with supporting text below as a natural
                              lead-in to additional content. This content is a little bit longer.
                           </Card.Text>
                           <Button className="cart-button" variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>
                  </div>
               </Col>

               <Col lg={6} md={6} sm={12} className="mb-5">
                  <div className="customer">
                     <Card>
                        <Card.Img className="left" variant="top" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80" />
                        <Card.Body>
                           <Card.Title>Card title</Card.Title>
                           <Card.Text>
                                This is a longer card with supporting text below as a natural
                              lead-in to additional content. This content is a little bit longer.
                           </Card.Text>
                           <Button className="cart-button" variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>
                  </div>
               </Col>
            </Row>
         </Container>
      </Fragment>
   );
}

export default Customer;