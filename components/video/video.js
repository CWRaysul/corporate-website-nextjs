import React, {Fragment, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function Video() {
   return (
      <Fragment>
         <Container>
            <Row>
               <div className="videoMani">
                  <h2 className='heading-three text-center'>How i Do</h2>
                  <p className="p-two text-center">A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose</p>
                  <p className="text-center videoPlay"><FontAwesomeIcon icon={faPlayCircle}/></p>
                  <Col lg={12} md={12} sm={12}>
                     {/*<Player>*/}
                     {/*   <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />*/}
                     {/*</Player>*/}
                  </Col>
               </div>
            </Row>
         </Container>
      </Fragment>
   );
}

