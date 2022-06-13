import React, {Fragment} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

export default function PageTop(props){
   return(
      <Fragment>
         <Container fluid={true} className="topPageBanner p-0 text-center">
            <Row>
               <Col lg="12" md="12">
                  <div className='text-center'>
                     <p className='heading-three pageTop'>{props.title}</p>
                  </div>
               </Col>
            </Row>
         </Container>
      </Fragment>
   )
}