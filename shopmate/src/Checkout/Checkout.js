import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Delivery from './Delivery'
import Confirmation from './Confirmation'
import Payment from './Payment'
import Success from './Success';
import {connect} from "react-redux"
import {getOrder} from '../redux/actions'



class Checkout extends Component {
    state = {
        name : 'Shonubi',
        address: '',
        city: '',
        region: '',
        postal_code: '',
        country: '',
        shipping_region_id: 1,
        shipping_id: '',
        tax_id: 2,
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
    handleChange = (e) =>{
        
         this.setState({
         [e.target.name] : e.target.value
       })
     }
     handleSubmit= (e) => {
       e.preventDefault()
      this.props.createOrder()
       this.nextStep()
      
      
      
     }
    render() {
        
        let {step} = this.state
        switch (step){
             case 1:
                    return (
                        <Delivery 
                        nextStep={this.nextStep} prevStep={this.prevStep} 
                        state ={this.state} handleChange ={this.handleChange}
                        handleSubmit = {this.handleSubmit}
                        />
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

const mapDispatchToProps = dispatch => ({

    getOrder: () => dispatch(getOrder())
})


export default connect(null, mapDispatchToProps)(Checkout);
