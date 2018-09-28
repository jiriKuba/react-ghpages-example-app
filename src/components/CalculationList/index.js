import React from 'react';
import PropTypes from 'prop-types';
import CalculationItem from '../CalculationItem';
import Wrapper from './Wrapper';

class CalculationList extends React.Component {
  render() {
    const { items, onDelete, onEdit, onSave } = this.props;
    let itemViews = null;
    
    // If we have items, render them
    if (items) {
      itemViews = items.map(item => (
        <CalculationItem 
          key={`item-${item.id}`} 
          item={item} 
          onEdit={onEdit}
          onSave={onSave}
          onDelete={onDelete} />
      ));
    }
    return (
      <Wrapper>
        { itemViews }
      </Wrapper>
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
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default CalculationList;