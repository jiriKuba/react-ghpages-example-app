import React from 'react';
import PropTypes from 'prop-types';
import CalculationResultItem from './item';

class CalculationResultList extends React.Component {
  render() {
    const { items, intl, messages } = this.props;
    let itemViews = null;
    
    // If we have items, render them
    if (items) {
      itemViews = items.map(item => (
        <CalculationResultItem 
          key={`item-${item.index}`}
          intl={intl}
          messages={messages}
          item={item} />
      ));
    }
    return (
      <div>
        { itemViews }
      </div>
    );
  }
}

CalculationResultList.propTypes = {
  intl: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      interval: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default CalculationResultList;