import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import { closeLeftNav } from './actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const styleSheet = createStyleSheet('NavDrawer', {
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
});

const MainItems = props => (
      <div>
      <Link to='/dashboard' className={props.classes.link}>
        <ListItem button>
          <Icon>dashboard</Icon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to='/account/:id' className={props.classes.link}>
        <ListItem button>
          <Icon>account_box</Icon>
          <ListItemText primary="Account" />
        </ListItem>
      </Link>
      </div>
    );

const OtherItems = props => (
      <div>
      <Link to='/messages/:id' className={props.classes.link}>
        <ListItem button>
          <Icon>message</Icon>
          <ListItemText primary="Messages" />
        </ListItem>
      </Link>
      </div>
    );


const SideBar = props => (
       <div>
        <List disablePadding>
          <MainItems classes={props.classes} />
        </List>
        <Divider />
        <List disablePadding>
          <OtherItems classes={props.classes} />
        </List>
      </div>
    );


const NavDrawer = props => (
      <div>
        <Drawer
          open={props.open}
          onRequestClose={() => props.closeLeftNav()}
          onClick={() => props.closeLeftNav()}
        >
          <SideBar classes={props.classes} />
        </Drawer>
      </div>
)

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
    open: state.getIn(['toggleLeftNav', 'open'])
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
    closeLeftNav
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(NavDrawer));