import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { fetchExaminerData } from './actions';


const styleSheet = createStyleSheet('ExaminerInfo', theme => ({
  body: {
    textAlign: 'right',
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
}));

class ExaminerInfo extends Component {
  
  componentDidMount() {
    const examinerInfo = new Promise((resolve, reject) => {
      const applicationsArray = this.props.applicationData.toJS();
      for (const application of applicationsArray) {
        if (application.appno == this.props.currentApplication) {
          let examinerInfo = {
            examiners: application.examiners,
            artUnitID: application.artUnit,
          };
          resolve(examinerInfo)
        }
      }
    });

    examinerInfo.then(examinerInfo => {
      this.props.fetchExaminerData(examinerInfo);
    });
  }

  render() {
     return (
        <div>
          <Card>
            <CardContent>
              <Typography type="headline" component="h2">
                Examiner Info
              </Typography>
              <Typography component="p" className={this.props.classes.body}>
                Name: {this.props.currentExaminerData.getIn(['examinerInfo', 'examiners', 'main', 'name'])}
              </Typography>
              <Typography component="p" className={this.props.classes.body}>
                Art Unit: {this.props.currentExaminerData.getIn(['examinerInfo', 'artUnitID'])}
              </Typography>
              <Typography component="p" className={this.props.classes.body}>
                Primary Examiner: {this.props.currentExaminerData.getIn(['examinerInfo', 'examiners', 'primary', 'name'])}
              </Typography>
            </CardContent>
            <CardActions>
              <Button dense>Learn More</Button>
            </CardActions>
          </Card>
        </div>
      );
    }
}

ExaminerInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  applicationData: state.getIn(['dashboardTable', 'applicationData']),
  currentExaminerData: state.getIn(['analytics', 'currentExaminerData']),
  currentApplication: state.getIn(['currentApplication', 'currentApplication'])
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchExaminerData
  }, dispatch)
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styleSheet)
  )

export default enhance(ExaminerInfo);


