import React, {Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";


export default function Summary() {
   return (
      <Fragment>
         <Container fluid={true} className="summerBackground">
            <Container className="text-center">
               <Row>
                  <Col lg={8} md={8} sm={12}>
                     <Row className="count-section">
                        <Col>
                           <CountUp start={0} end={150} delay={0}>
                              {({ countUpRef }) => (
                                 <div>
                                    <h1>
                                       <span ref={countUpRef} />
                                    </h1>
                                 </div>
                              )}
                           </CountUp>
                           <h4>Total Project</h4>
                           <hr className="bg-white w-50"/>
                        </Col>

                        <Col>
                           <CountUp start={0} end={1000} delay={0}>
                              {({ countUpRef }) => (
                                 <div>
                                    <h1>
                                       <span ref={countUpRef} />
                                    </h1>
                                 </div>
                              )}
                           </CountUp>
                           <h4>Total Clients</h4>
                           <hr className="bg-white w-25"/>
                        </Col>
                     </Row>
                  </Col>

                  <Col lg={4} md={4} sm={4}>
                     <div className="summer-work">
                        <h1>How I work</h1>
                        <ul>
                           <li><span><FontAwesomeIcon icon={faCheckCircle}/></span> Requirement Gathering</li>
                           <li><span><FontAwesomeIcon icon={faCheckCircle}/></span> System Analysis</li>
                           <li><span><FontAwesomeIcon icon={faCheckCircle}/></span> Coding Testing</li>
                           <li><span><FontAwesomeIcon icon={faCheckCircle}/></span> Implementation</li>
                        </ul>
                     </div>
                  </Col>
               </Row>
            </Container>
         </Container>
      </Fragment>
   );
}

