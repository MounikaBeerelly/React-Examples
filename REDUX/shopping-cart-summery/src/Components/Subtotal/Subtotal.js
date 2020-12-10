import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Subtotal extends Component {
    render() {
        return (
            <Container>
                <Row className="show-grid">
                    <Col md={6}>Subtotal</Col>
                    <Col md={6}>{`$${this.props.price}`}</Col>
                </Row>
            </Container>
        );
    }
}

export default Subtotal;