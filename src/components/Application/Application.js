import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { compose } from 'redux';
import AllowanceRates from './ExaminerAnalytics/AllowanceRates';
import AvgOfficeActions from './ExaminerAnalytics/AvgOfficeActions';
import ExaminerInfo from './ExaminerAnalytics/ExaminerInfo';
import KeyEventTime from './ExaminerAnalytics/KeyEventTime';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet('Application', theme => ({
  container: {
		spacing: '8',
		padding: '8px'
	}
}));

const Application = props => {
	
	return (
		<div>
			<Grid container className={props.classes.container}>
				<Grid item xs={12} sm={4}> 
					<ExaminerInfo />
				</Grid>
				<Grid item xs={12} sm={8}>
					<KeyEventTime />
				</Grid>
			</Grid>
			<Grid container className={props.classes.container}>
				<Grid item xs={12} sm={6}>
					<AllowanceRates />
				</Grid>
				<Grid item xs={12} sm={6}>
					<AvgOfficeActions />
				</Grid>
			</Grid>
		</div>
	)
}

const enhance = compose(
  withStyles(styleSheet)
  )

export default enhance(Application);