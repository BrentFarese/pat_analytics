import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import AddTableRowModal from './AddTableRowModal';
import { toggleAddRowModal } from './actions';


const styleSheet = createStyleSheet('AddTableRow', theme => ({
  button: {
    margin: theme.spacing.unit,
  },
}));

const AddTableRow = props => {
  return (
    <div>
      <Button fab color="primary" className={props.classes.button} onClick={() => props.toggleAddRowModal()}>
        <AddIcon />
      </Button>
      <AddTableRowModal/>
    </div>
  );
}

AddTableRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
  toggleAddRowModal
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(withStyles(styleSheet)(AddTableRow));