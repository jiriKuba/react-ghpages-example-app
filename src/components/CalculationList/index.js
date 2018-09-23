import React from 'react';
import CalculationItem from '../CalculationItem';
import PropTypes from 'prop-types';

class CalculationList extends React.Component {
  render() {
    const { items, onDelete } = this.props;
    let itemViews = null;
    
    // If we have items, render them
    if (items) {
      itemViews = items.map(item => (
        <CalculationItem key={`item-${item.id}`} item={item} onDelete={onDelete} />
      ));
    }
    return (
      <div>
        { itemViews }
      </div>
    );
  }
}

CalculationList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      months: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CalculationList;