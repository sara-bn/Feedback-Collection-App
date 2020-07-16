import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyFiled from './SurveyField';
import _ from 'lodash';

const FIELDS = [
	{ label: 'Survey Title', name: 'title' },
	{ label: 'Subject Line', name: 'subject' },
	{ label: 'Email body', name: 'body' },
	{ label: 'Recipient List', name: 'email' },
];
class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, (field) => {
			return <Field key={field.name} component={SurveyFiled} type="text" label={field.label} name={field.name} />;
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
					{this.renderFields()}
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({ form: 'surveyForm' })(SurveyForm);
