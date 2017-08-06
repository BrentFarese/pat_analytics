import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Dialog from 'material-ui/Dialog';
import { toggleAddRowModal, fetchApplicationData, postApplication } from './actions';
import AddRowForm from './AddRowForm';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */


 class AddTableRowModal extends Component {

 	onSubmit = values => {
 		const applicationNo = this.props.formData.AddRowForm.values.applicationNo;
 		this.props.toggleAddRowModal();
 		this.props.fetchApplicationData(applicationNo).then(res => {
 			console.log(res.appno);
 			const requestBody = {
 				serialNumber: res.appno,
 				title: res.title
 			};
 			const myInit = {
 				method: 'POST',
 				headers: {
 					'Content-Type': 'application/json'
 				},
 				body: JSON.stringify(requestBody)
 			};
 			this.props.postApplication(res.appno, myInit);
 		});
 	}

 	render() {

 		return (
 			<Dialog
 			open={this.props.addRowModal}
 			onRequestClose={() => this.props.toggleAddRowModal()}
 			>
 			<AddRowForm onSubmit={this.onSubmit}/>
 			</Dialog>
 			);
 	}
 }

 const mapStateToProps = state => ({
 	addRowModal: state.getIn(['dashboardTable', 'addRowModal']),
 	formData: state.get('form'),
 	applicationData: state.getIn(['dashboardTable', 'applicationData'])
 });

 const mapDispatchToProps = dispatch => {
 	return bindActionCreators({
 		toggleAddRowModal,
 		fetchApplicationData,
 		postApplication
 	}, dispatch)
 }

 const enhance = compose(
 	connect(mapStateToProps, mapDispatchToProps)
 	)

 export default enhance(AddTableRowModal);

