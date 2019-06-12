import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Delivery from './Delivery'
import Confirmation from './Confirmation'


class Checkout extends Component {
    state = {
        firstname : '',
        lastname: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        shippingType: ''

    };
    render() {
        return (
            <div><Confirmation/></div>
        );
    }
}



export default Checkout;
