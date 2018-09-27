import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormatter  from 'react-currency-formatter';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Edit extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      id: props.item.id,
      name: props.item.name,
      editing: props.item.editing,
      price: props.item.price === 0 ? '' : props.item.price,
      months: props.item.months === 0 ? '' : props.item.months,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { itemChanged } = this.props;
    this.setState({
      [event.target.name]: event.target.value,
    });

    const stateItem = {
      id: this.state.id,
      name: this.state.name,
      editing: this.state.editing,
      price: this.state.price,
      months: this.state.months,
    };
    stateItem[event.target.name] = event.target.value;
    itemChanged(stateItem);
  }

  render() {
    const { intl, messages, classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            name={'name'}
            onChange={this.handleChange}
            margin="normal"
            variant="filled"
          />
        <TextField
            id="standard-price"
            label="Price[$]"
            className={classes.textField}
            value={this.state.price}
            name={'price'}
            onChange={this.handleChange}
            margin="normal"
            type="number"
            variant="filled"
          />
        <TextField
            id="standard-months"
            label="Month count"
            className={classes.textField}
            value={this.state.months}
            name={'months'}
            onChange={this.handleChange}
            margin="normal"
            type="number"
            variant="filled"
          />
      </form>
    );
  }
}

Edit.propTypes = {
  classes: PropTypes.object.isRequired,
  itemChanged: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    editing: PropTypes.bool,
  }).isRequired,
};

export default withStyles(styles)(Edit);