import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators, compose } from 'redux';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { toggleAddRowModal } from './actions';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet('TableFormInputs', theme => ({
	container: {
		padding: '8px'
	},
	cancelButton: {
		margin: theme.spacing.unit
	},
	submitButton: {
		margin: theme.spacing.unit,
		keyboardFocused: true
	}
}));


const renderTableFormInput = ({ type, input, value, helperText, className, required }) => {
	return (
		<div>
			<TextField type={type} {...input} value={value} helperText={helperText} className={className} required={required} fullWidth/>
		</div>
	)
};

let AddRowForm = props => {
	
	const {  onChange, handleSubmit, applicationNo, matterRef } = props;

	return (
		<form onSubmit={ handleSubmit } >
			<Grid container className={props.classes.container}>
				<Grid item xs={12}>
					<Field name='applicationNo' type='text' value={applicationNo} onChange={onChange} helperText='Enter a New Application Number' component={renderTableFormInput} required={true} />
				</Grid>
				<Grid item xs={12}>
					<Field name='matterRef' type='text' value={matterRef} onChange={onChange} helperText='Enter a Related Matter' component={renderTableFormInput} />
				</Grid>
				<Grid item xs={12}>
					<Grid container justify='center'>
						<Grid item xs={2}>
							<Button color="primary" className={props.classes.cancelButton} type='button' onClick={() => props.toggleAddRowModal()}>Cancel</Button>
						</Grid>
						<Grid item xs={2}>
							<Button color="primary" className={props.classes.submitButton} type='submit'>Submit</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</form>
	)
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
	toggleAddRowModal
	}, dispatch)
}

const enhance = compose(
	reduxForm({form: 'AddRowForm'}),
	connect(null, mapDispatchToProps),
	withStyles(styleSheet)
)

export default enhance(AddRowForm);