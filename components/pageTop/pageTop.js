import React, {Fragment} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

export default function PageTop(){
   return(
      <Fragment>
         <Container fluid={true} className="topPageBanner p-0 text-center">
            <Row>
               <Col>
                  <div className='text-center py-5'>
                     <p className='heading-three pageTop'>Mobile and Web application</p>
                  </div>
               </Col>
            </Row>
         </Container>
      </Fragment>
   )
}