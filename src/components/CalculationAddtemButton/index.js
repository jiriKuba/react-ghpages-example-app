import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { generateGuid } from '../../utils/guid';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class CalculationAddtemButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onCreate, intl } = this.props;
    onCreate({
      id: generateGuid(),
      name: intl.formatMessage(messages.goal),
      price: 0,
      months: 0
    });
  }

  render() {
    const { classes, intl } = this.props;
    return (
      <div>
        <Button 
          variant="fab" 
          color="primary" 
          aria-label={intl.formatMessage(messages.add)}
          className={classes.button} 
          onClick={this.handleClick}>
          <AddIcon />
        </Button>
      </div>
    );
  }
}

CalculationAddtemButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onCreate: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(CalculationAddtemButton));