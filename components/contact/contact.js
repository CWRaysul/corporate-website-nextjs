import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

export default function Contact(){
    return(
        <Fragment>
            <div className="container marginAndPadding contact">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="contact-form">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="name" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                                <Button type="submit" className="button-one">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}