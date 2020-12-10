import React from 'react';
import { buyIcecream } from '../Redux';
import { connect } from 'react-redux';


function IcecreamContainer(props) {
        return (
            <div>
                <h1>Number Of IceCreams- {props.numberOfIcecreams} </h1>
                <button onClick = {props.buyIcecream}>Buy IceCream</button>
            </div>
        )}
const mapStateToProps = state => {
    return {
        numberOfIcecreams : state.iceCream.numberOfIcecreams
    }
}  
const mapDispatchToProps = dispatch => {
    return {
        buyIcecream : () => dispatch(buyIcecream())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(IcecreamContainer);

