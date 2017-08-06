import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toJS } from 'immutable'

const styleSheet = createStyleSheet('KeyEventTime', theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  }
}));

const KeyEventTime = props => {

  if (props.loading == true) {
    return (
      <CircularProgress className={props.classes.progress} />
      );
  }
  return (
    <Paper className={props.classes.paper}>
    <Typography type="headline" component="h3">
    Months Between Key Events
    </Typography>
    <Typography type='display2'>
    {props.currentExaminerData.getIn(['data', 'total', 'time_to', 'allowance', 'average']).toJS()}
    </Typography>
    <Typography type="body1" component="p">
    Paper can be used to build surface or other elements for your application.
    </Typography>
    </Paper>
    );
}

const mapStateToProps = state => ({
  currentExaminerData: state.getIn(['analytics', 'currentExaminerData']),
  loading: state.getIn(['analytics', 'loading'])
});

const enhance = compose(
  connect(mapStateToProps, null),
  withStyles(styleSheet)
  )

export default enhance(KeyEventTime);