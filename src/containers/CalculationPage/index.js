/**
 * CalculationPage
 *
 * This is the page with calculation
 */

import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectItems } from './selectors';
import PropTypes from 'prop-types';
import CalculationResult from '../../components/CalculationResult';
import CalculationList from '../../components/CalculationList';
import CalculationAddtemButton from '../../components/CalculationAddtemButton';
import { deleteCalculationItem, addCalculationItem } from './actions';

export class Calculation extends React.PureComponent {
  render() {
    return (
      <div>
        <CalculationResult items={this.props.calculationItems} />
        <CalculationList items={this.props.calculationItems} onDelete={this.props.onCalculationItemDelete} />
        <CalculationAddtemButton onCreate={this.props.onCalculationItemAdd} />
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
};

const mapStateToProps = createSelector(makeSelectItems(), calculationItems => ({
  calculationItems,
}));

export function mapDispatchToProps(dispatch) {
  return {
    onCalculationItemDelete: calculationItem => dispatch(deleteCalculationItem(calculationItem)),
    onCalculationItemAdd: (calculationItem) => dispatch(addCalculationItem(calculationItem)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculation);