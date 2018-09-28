import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { isInvalid } from './validator';

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
    let newValue = event.target.value;
    if (event.target.name === 'price' || event.target.name === 'months') {
      newValue = Number(event.target.value);
    }

    this.setState({
      [event.target.name]: newValue,
    });

    const stateItem = {
      id: this.state.id,
      name: this.state.name,
      editing: this.state.editing,
      price: this.state.price,
      months: this.state.months,
    };

    stateItem[event.target.name] = newValue;
    stateItem.isInvalid = isInvalid(stateItem);

    itemChanged(stateItem);
  }

  render() {
    const { intl, messages, classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
            error={!this.state.name}
            id="standard-name"
            label={intl.formatMessage(messages.editName)}
            className={classes.textField}
            value={this.state.name}
            name={'name'}
            onChange={this.handleChange}
            margin="normal"
            variant="filled"
          />
        <TextField
            error={!this.state.price}
            id="standard-price"
            label={intl.formatMessage(messages.editPrice)}
            className={classes.textField}
            value={this.state.price}
            name={'price'}
            onChange={this.handleChange}
            margin="normal"
            type="number"
            variant="filled"
          />
        <TextField
            error={!this.state.months}
            id="standard-months"
            label={intl.formatMessage(messages.editMonth)}
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
  intl: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    editing: PropTypes.bool,
  }).isRequired,
};

export default withStyles(styles)(Edit);