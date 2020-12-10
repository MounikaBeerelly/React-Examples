import React, { Component } from 'react';
import { Row, Col, Button, Collapse, Media} from 'react-bootstrap';

class ItemDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <Button
                  className="item-details-button"
                  variant="link"
                  onClick={() => this.setState({open: !this.state.open})}
                >
                  {this.state.open === false ? 'See' : 'Hide'} item details
                  {this.state.open === false ? ' +' : ' -' }  
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                       <Media>
                            <img 
                                width={100}
                                height={100}
                                alt="thumbnail"
                                src="https://i5.walmartimages.com/asr/3e2b5dff-afc4-4085-a2d5-6f3aa658e490_1.11ab96630285b84d37758ed8af0569bd.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                            />
                            <Media.Body>
                                <p>Essentials by OFM-3085 Racing Style Leather Gaming Chair, Red</p>
                                <Row className="show-grid">
                                    <Col md={6}>
                                        <strong> {`$${this.props.price}`}</strong>
                                        <br />
                                        <strong className="price-strike">{`$${this.props.price}`}</strong>
                                    </Col>
                                    <Col md={6}> Qty: 1</Col>
                                </Row>
                            </Media.Body>
                        </Media>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default ItemDetails;