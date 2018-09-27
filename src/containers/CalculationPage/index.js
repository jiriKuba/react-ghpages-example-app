/**
 * CalculationPage
 *
 * This is the page with calculation
 */

import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectItems } from './selectors';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CalculationResult from '../../components/CalculationResult';
import CalculationList from '../../components/CalculationList';
import CalculationAddtemButton from '../../components/CalculationAddtemButton';
import { deleteCalculationItem, addCalculationItem, 
  editCalculationItem, saveCalculationItem } from './actions';

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    maxWidth: '99%',
    justifyItems: 'center'
  },
});
export class Calculation extends React.PureComponent {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} direction="row">
          <Grid item xs={false} sm={2}></Grid>
          <CalculationResult items={this.props.calculationItems} />
          <Grid item xs={false} sm={2}></Grid>

          <Grid item xs={false} sm={2}></Grid>
          <CalculationList 
            items={this.props.calculationItems} 
            onDelete={this.props.onCalculationItemDelete} 
            onEdit={this.props.onCalculationItemEdit} 
            onSave={this.props.onCalculationItemSave} />
          <Grid item xs={false} sm={2}></Grid>
          <CalculationAddtemButton onCreate={this.props.onCalculationItemAdd} />
        </Grid>
      </div>
    );
  }
}

Calculation.propTypes = {
  calculationItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      months: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onCalculationItemDelete: PropTypes.func.isRequired,
  onCalculationItemAdd: PropTypes.func.isRequired,
  onCalculationItemEdit: PropTypes.func.isRequired,
  onCalculationItemSave: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createSelector(makeSelectItems(), calculationItems => ({
  calculationItems,
}));

export function mapDispatchToProps(dispatch) {
  return {
    onCalculationItemDelete: calculationItem => dispatch(deleteCalculationItem(calculationItem)),
    onCalculationItemAdd: (calculationItem) => dispatch(addCalculationItem(calculationItem)),
    onCalculationItemEdit: (calculationItem) => dispatch(editCalculationItem(calculationItem)),
    onCalculationItemSave: (calculationItem) => dispatch(saveCalculationItem(calculationItem)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Calculation));