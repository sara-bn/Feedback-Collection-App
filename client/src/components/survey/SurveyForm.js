import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyFiled from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, (field) => {
			return <Field key={field.name} component={SurveyFiled} type="text" label={field.label} name={field.name} />;
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/survey" className="red btn-flat white-text">
						Cancle
					</Link>
					<button type="submit" className="teal btn-flat rught white-text">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	//first check the emails
	//if no email provided, emoty string will be considered
	errors.recipients = validateEmails(values.recipients || '');
	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value';
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false,
})(SurveyForm);
