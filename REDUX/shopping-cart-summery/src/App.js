import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';

import { connect } from 'react-redux';
import { handleChange } from './Actions/promoCodeActions';

import './App.css';
import Subtotal from './Components/Subtotal/Subtotal'
import PickupSavings from './Components/PickupSavings/PickupSavings';
import TaxesFees from './Components/TaxesFees/TaxesFees';
import EstimatedTotal from './Components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import PromoCode from './Components/PromoCode/PromoCode';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total : 100,
      pickupSavings : -3.85,
      taxes : 0,
      estimatedTotal : 0,
      disablePromoButton : false
    }
  }

  componentDidMount = () => {
    this.setState(
    {
      taxes: (this.state.total + this.state.pickupSavings) * 0.0875
    },
    function() {
      this.setState({
        estimatedTotal : this.state.total + this.state.pickupSavings + this.state.taxes
      });
     }
    );
  }

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
      function() {
        this.setState({
          disablePromoButton: true
        });
      }
     );
    }
  };

  render() {
    return (
      <div className="App">
        <Container className="purchase-card">
          <Subtotal price = { this.state.total.toFixed(2)} />
          <br/>
          <PickupSavings price ={this.state.pickupSavings} />
          <br/>
          <TaxesFees taxes = {this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode 
            giveDiscount = { () => this.giveDiscountHandler()}
            isDisabled = {this.state.disablePromoButton} />
        </Container>
      </div>
    );
  }
}  

const mapStateToProps = state => ({
  promoCode : state.promoCode.value
});

export default connect(mapStateToProps,{ handleChange })(App);
