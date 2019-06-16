import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Delivery from './Delivery'
import Confirmation from './Confirmation'
import Payment from './Payment'
import Success from './Success';




class Checkout extends Component {
    state = {
        firstname : '',
        lastname: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        shippingType: '',
        step: 1

    };
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        this.setState({step: this.state.step - 1})
    }
    render() {
        let {step} = this.state
        switch (step){
             case 1:
                    return (
                        <Delivery nextStep={this.nextStep} prevStep={this.prevStep} />
                    );
             case 2:
                    return (
                        <Confirmation  nextStep={this.nextStep} prevStep={this.prevStep}/>
                            );        
            case 3:
                    return (
                           <Payment  nextStep={this.nextStep} prevStep={this.prevStep}/>
                                            );
            case 4: 
                 return (
                     <Success/>
                 )                           
                        }
       
    }
}



export default Checkout;
