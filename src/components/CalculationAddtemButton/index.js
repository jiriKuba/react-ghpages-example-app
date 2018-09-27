import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { newItem } from './new';

const styles = theme => ({
  button: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

class CalculationAddtemButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onCreate, intl } = this.props;
    onCreate(newItem(intl, messages.goal));
  }

  render() {
    const { classes, intl } = this.props;
    return (
      <Tooltip title={intl.formatMessage(messages.add)}>
        <Button 
          variant="fab" 
          color="primary" 
          aria-label={intl.formatMessage(messages.add)}
          className={classes.button} 
          onClick={this.handleClick}>
          <AddIcon />
        </Button>
      </Tooltip>
    );
  }
}

CalculationAddtemButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onCreate: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(CalculationAddtemButton));