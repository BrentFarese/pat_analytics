import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import { selectAllRows, sortTable } from './actions';

const DashboardTableHead = props => {

	return (
		<TableHead>
			<TableRow>
				<TableCell checkbox>
					<Checkbox onChange={() => props.selectAllRows()} />
				</TableCell>
				<TableCell
				numeric={false}
				disablePadding={true}
				>
					<TableSortLabel
					active={props.orderBy === 'appno'}
					direction={props.order}
					onClick={() => props.sortTable('appno')}
					>
					Application No.
					</TableSortLabel>
				</TableCell>
				<TableCell
				numeric={true}
				disablePadding={false}
				>
					<TableSortLabel
					active={props.orderBy === 'title'}
					direction={props.order}
					onClick={() => props.sortTable('title')}
					>
					Title
					</TableSortLabel>
				</TableCell>
				<TableCell
				numeric={true}
				disablePadding={false}
				>
					<TableSortLabel
					active={props.orderBy === 'status'}
					direction={props.order}
					onClick={() => props.sortTable('status')}
					>
					Status
					</TableSortLabel>
				</TableCell>
				<TableCell
				numeric={true}
				disablePadding={false}
				>
					<TableSortLabel
					active={props.orderBy === 'filing_date'}
					direction={props.order}
					onClick={() => props.sortTable('filing_date')}
					>
					Filing Date
					</TableSortLabel>
				</TableCell>
			</TableRow>
		</TableHead>
	)
}


DashboardTableHead.propTypes = {
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		selectAllRows,
		sortTable
	}, dispatch)
}

const mapStateToProps = state => {
	return {
		order: state.getIn(['dashboardTable', 'order']),
		orderBy: state.getIn(['dashboardTable', 'orderBy']),
		data: state.getIn(['dashboardTable', 'tableData'])
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTableHead);


