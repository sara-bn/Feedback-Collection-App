import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class StripeComponent extends Component {
	render() {
		return (
			<StripeCheckout
				name="Emaily App"
				description="$5 for 5 email credits"
				amount={500}
				token={(token) => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			/>
		);
	}
}
export default connect(null, actions)(StripeComponent);
