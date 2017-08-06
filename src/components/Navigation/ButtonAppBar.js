import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import NavDrawer from './NavDrawer';
import { openLeftNav } from './actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const styleSheet = createStyleSheet('AppBar', {
  root: {
    top: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

const ButtonAppBar = props => (
  <div className={props.classes.root}>
  <AppBar position="static">
  <Toolbar>
  <IconButton color="contrast" aria-label="Menu" onClick={() => props.openLeftNav()}>
  <MenuIcon />
  </IconButton>
  <Typography type="title" color="inherit" className={props.classes.flex}>
  Patent Analytics
  </Typography>
  <Button color="contrast">Login</Button>
  </Toolbar>
  </AppBar>
  <NavDrawer/>
  </div>
  )

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({/*Saved in case props is needed for Login later.  Otherwise, set to null in connect() below.*/});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    openLeftNav
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(ButtonAppBar));