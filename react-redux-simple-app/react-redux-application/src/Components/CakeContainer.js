import React from 'react';
import { buyCake } from '../Redux';
import { connect } from 'react-redux';


function CakeContainer(props) {
        return (
            <div>
                <h1>Number Of Cakes - {props.numberOfCakes} </h1>
                <button onClick = {props.buyCake}>Buy Cake</button>
            </div>
        )}
const mapStateToProps = state => {
    return {
        numberOfCakes : state.cake.numberOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CakeContainer);

