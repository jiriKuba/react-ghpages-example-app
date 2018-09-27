import React from 'react';
import CalculationItem from '../CalculationItem';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

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
      <Grid item xs={12} md={8} container direction="row" spacing={8}>
        { itemViews }
      </Grid>
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