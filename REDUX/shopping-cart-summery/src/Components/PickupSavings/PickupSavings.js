import React, { Component } from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

var styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
};

class PickupSavings extends Component {

    render() {
        const tooltip = (
          <Tooltip id="tooltip">
            <p>Picking up your order in the store helps reduce the costs, and we pass the savings on to you</p>
          </Tooltip>
        );
       
        return (
            <div>
                <Row className="show-grid">
                    <Col md={6}>
                        <OverlayTrigger placement="bottom" overlay={tooltip}>
                            <div style={styles.pickupSavings}>Pickup Savings</div>
                        </OverlayTrigger>
                    </Col>
                    <Col style={styles.totalSavings} md={6}> 
                        {`$${this.props.price}`} 
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PickupSavings;