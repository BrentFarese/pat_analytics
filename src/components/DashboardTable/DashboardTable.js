import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import keycode from 'keycode';
import Table, {
  TableBody,
  TableCell,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Icon from 'material-ui/Icon';
import DashboardTableToolbar from './DashboardTableToolbar';
import DashboardTableHead from './DashboardTableHead';
import AddTableRow from './AddTableRow';
import { fakeData, moreFakeData } from './fakeData';
import { selectRow, fetchSavedApplications } from './actions';

const styleSheet = createStyleSheet('DashboardTable', theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: 'blue'
    },
  }
}));

class DashboardTable extends Component {
  
  componentDidMount() {
    this.props.fetchSavedApplications();
  }

  render() {
    return (
        <div>
        <Paper className={this.props.classes.paper}>
          <Table>
            <DashboardTableHead/>
            <TableBody>
              {this.props.data.map((n, index) => {
                let isSelected = this.props.selected[index];
                return (
                  <TableRow
                    hover
                    onClick={() => this.props.selectRow(index)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex="-1"
                    key={index}
                    selected={isSelected}
                  >
                    <TableCell checkbox>
                      {/* <Checkbox checked={isSelected}/> */}
                    </TableCell>
                    <TableCell disablePadding>
                      <Link to={`application/${n.get('appno')}`} className={this.props.classes.link}>{n.get('appno')}</Link>
                    </TableCell>
                    <TableCell numeric>
                      {n.get('title')}
                    </TableCell>
                    <TableCell numeric>
                      {n.get('status')}
                    </TableCell>
                    <TableCell numeric>
                      {n.get('filingDate')}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <AddTableRow/>
        </div>
      );
  }
} 

DashboardTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    selectRow,
    fetchSavedApplications
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    selected: state.getIn(['dashboardTable', 'selected']).toJS(),
    data: state.getIn(['dashboardTable', 'applicationData'])
  }
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styleSheet)
)

export default enhance(DashboardTable);






