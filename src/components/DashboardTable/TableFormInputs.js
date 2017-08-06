import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { toggleAddRowModal } from '../../actions/actions';

const styleSheet = createStyleSheet('TableFormInputs', theme => ({
  textField: {
  	display: 'block'
  },
  cancelButton: {
    display: 'inline',
    margin: theme.spacing.unit
  },
  submitButton: {
  	display: 'inline',
  	margin: theme.spacing.unit,
  	keyboardFocused: true
  }
}));


const TableFormInputs = props => {
	const { input: { applicationNo, matterRef, onChange } } = props;

	return (
		<div>
			<TextField type='text' value={applicationNo} onChange={onChange} className={props.classes.textField} helperText='Enter a New Application Number' required />
			<TextField type='text' value={matterRef} onChange={onChange} className={props.classes.textField} helperText='Enter a Related Matter' />
			<Button color="primary" className={props.classes.cancelButton} type='button' onClick={() => props.toggleAddRowModal()}>Cancel</Button>
			<Button color="primary" className={props.classes.submitButton} type='submit'>Submit</Button>
		</div>
	)
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
	toggleAddRowModal
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(withStyles(styleSheet)(TableFormInputs));
