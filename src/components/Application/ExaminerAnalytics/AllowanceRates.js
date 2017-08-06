import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { toJS } from 'immutable'
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { AreaChart, linearGradient, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend, ResponsiveContainer } from 'recharts';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { fetchAllowanceRatesData } from './actions';

const styleSheet = createStyleSheet('AllowanceRates', theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 12,
    paddingBottom: 12,
  }),
  typography: {
  	textAlign: 'center'
  }
}));

class AllowanceRates extends Component {

	componentDidMount() {
		const getExaminerAndArtUnitID = new Promise((resolve, reject) => {
			const applicationsArray = this.props.applicationData.toJS();
			for (const application of applicationsArray) {
				if (application.appno == this.props.currentApplication) {
					let ids = {
						examinerID: application.examiners.main.id,
						artUnitID: application.artUnit
					};
					resolve(ids)
				}
			}
		});

		getExaminerAndArtUnitID.then(ids => {
			this.props.fetchAllowanceRatesData(ids.examinerID, ids.artUnitID);
		});
	}


	render() {
		return (
		<Paper className={this.props.classes.paper}>
		<Typography className={this.props.classes.typography} type='title'>Allowance Rates by Year</Typography>
		<ResponsiveContainer height={250} width='100%'>
			<AreaChart data={this.props.allowanceData.toJS()} className={this.props.classes.areaChart}>
			<defs>
			<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
			<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
			<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
			</linearGradient>
			<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
			<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
			<stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
			</linearGradient>
			</defs>
			<XAxis dataKey="year" />
			<YAxis />
			<CartesianGrid strokeDasharray="3 3" />
			<Tooltip />
			<Legend />
			<Area type="monotone" dataKey="examinersAllowanceRate" name="Examiner Allowance Rate" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
			<Area type="monotone" dataKey="art-unitsAllowanceRate" name="Art Unit Allowance Rate" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
			</AreaChart>
		</ResponsiveContainer>
		</Paper>
		)
	}
}

const mapStateToProps = state => ({
	allowanceRateData: state.getIn(['analytics', 'allowanceRateData']),
	allowanceData: state.getIn(['analytics', 'allowanceRateData', 'data']),
	applicationData: state.getIn(['dashboardTable', 'applicationData']),
	currentApplication: state.getIn(['currentApplication', 'currentApplication'])
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchAllowanceRatesData
	}, dispatch)
}

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withStyles(styleSheet)
	)

export default enhance(AllowanceRates);



