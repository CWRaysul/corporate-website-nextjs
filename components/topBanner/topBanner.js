import React, { Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function topHeader() {
  return (
     <Fragment>
        <Container fluid={true} className='topFixeBanner p-0'>
            <div className='topBannerOverlay'>
               <Container className='topContent'>
                  <Row>
                     <Col>
                        <div className='text-center py-5'>
                           <h1 className='heading-one'>software engineer</h1>
                           <p className='heading-three'>Mobile and Web application</p>
                           <Button variant='primary'>More...</Button>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
        </Container>
     </Fragment>
  )
}
