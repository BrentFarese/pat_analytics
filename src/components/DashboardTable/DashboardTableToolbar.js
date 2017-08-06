// import React, { Component } from 'react';
// import { fetchData } from '../actions/actions';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import { withStyles, createStyleSheet } from 'material-ui/styles';
// import keycode from 'keycode';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import IconButton from 'material-ui/IconButton';
// import DeleteIcon from 'material-ui-icons/Delete';
// import FilterListIcon from 'material-ui-icons/FilterList';

// const styleSheet = createStyleSheet('DashboardTableToolbar', theme => ({
//   root: {
//     paddingRight: 2,
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.accent.A700,
//           backgroundColor: theme.palette.accent.A100,
//         }
//       : {
//           color: theme.palette.accent.A100,
//           backgroundColor: theme.palette.accent.A700,
//         },
//   spacer: {
//     flex: '1 1 100%',
//   },
//   actions: {
//     color: theme.palette.text.secondary,
//   },
//   title: {
//     flex: '0 0 auto',
//   },
// }));

// let DashboardTableToolbar = props => {
//   return (
//     <Toolbar
//       className={classNames(props.classes.root, {
//         [props.classes.highlight]: props.selected > 0,
//       })}
//     >
//       <div className={props.classes.title}>
//         {props.numSelected > 0
//           ? <Typography type="subheading">
//               {props.numSelected} selected
//             </Typography>
//           : <Typography type="title">My Patents</Typography>}
//       </div>
//       <div className={props.classes.spacer} />
//       <div className={props.classes.actions}>
//         {props.numSelected > 0
//           ? <IconButton aria-label="Delete" onClick={}>
//               <DeleteIcon />
//             </IconButton>
//           : <IconButton aria-label="Filter list">
//               <FilterListIcon />
//             </IconButton>}
//       </div>
//     </Toolbar>
//   );
// };

// DashboardTableToolbar.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
// };

// const mapStateToProps = state => ({
//     selected: state.selected
// });

// const mapDispatchToProps = dispatch => (bindActionCreators({
//   deleteRows
// }, dispatch))

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(toolbarStyleSheet)(DashboardTableToolbar));



