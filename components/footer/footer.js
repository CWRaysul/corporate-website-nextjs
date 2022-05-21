import React, {Fragment} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
   return(
      <Fragment>
         <Container className="marginAndPadding">
            <Row>
               <Col lg={3} md={3} sm={6}>
                  <h1 className="heading-three">Follow Me</h1>
                  <a className="socialLink" target="_blank" href="#"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>
                  <a className="socialLink" target="_blank" href="#"><FontAwesomeIcon  icon={faYoutube} /> YouTube</a>
               </Col>
               <Col lg={3} md={3} sm={6}>
                  <h1 className="heading-three">Address</h1>
                  <p>Dhaka,shyamoli</p>
               </Col>

               <Col lg={3} md={3} sm={6}>
                  <h1 className="heading-three">Information</h1>
                  <p>About Me</p>
                  <p>Contact Me</p>
               </Col>

               <Col lg={3} md={3} sm={6}>
                  <h1 className="heading-three">Legal</h1>
                  <p>Refund Policy</p>
                  <p>Terms And Condition</p>
                  <p>Privacy Policy</p>
               </Col>
            </Row>
         </Container>
      </Fragment>
   )
}