import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Delivery from './Delivery'
import Confirmation from './Confirmation'
import Payment from './Payment'
import Success from './Success';
import {connect} from "react-redux"
import {getOrder, createOrder} from '../redux/actions'



class Checkout extends Component {
    state = {
        name : 'Shonubi',
        address: '',
        city: '',
        
        postal_code: '',
        country: '',
        shipping_region_id: '',
        shipping_id: 1,
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
         const {shipping_id, tax_id} = this.state
         const cart_id = this.props.cart.cartId.cart_id
       console.log(cart_id, shipping_id, tax_id)
       
       this.props.createOrder(cart_id, shipping_id, tax_id)
    //    if(!this.props.isLoading){
    //     this.nextStep()
    //    }
       
      
      
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
                        isLoading =  {this.props.isLoading}
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

const mapStateToProps = ({isLoading, cart}) =>({
 cart,
 isLoading
})
const mapDispatchToProps = dispatch => ({

    createOrder: (cart_id, shipping_id, tax_id) => dispatch(createOrder(cart_id, shipping_id, tax_id)),
    getOrder: () => dispatch(getOrder())
})


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
