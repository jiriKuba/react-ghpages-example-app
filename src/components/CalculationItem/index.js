import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';

import messages from './messages';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import CurrencyFormatter  from 'react-currency-formatter';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = () => ({
  card: {
    maxWidth: 400,
  },
  actions: {
    display: 'flex',
  },
  cardHeader: {
    alignItems: 'start',
  },
});

class CalculationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {anchorEl: null};

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  handleDelete() {
    const { onDelete, item } = this.props;
    onDelete(item);
  }

  render() {
    const { item, classes, intl } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader}
          avatar = {
            <Avatar>
              {item.name[0]}
            </Avatar>
          }
          action = {
            <div>
              <IconButton 
                aria-label={intl.formatMessage(messages.action)}
                aria-owns={open ? 'long-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    width: 200,
                  },
                }}
                >
                <MenuItem className={classes.menuItem}>
                  <ListItemIcon className={classes.icon}>
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText classes={{ primary: classes.primary }} inset>
                    <FormattedMessage {...messages.edit} />
                  </ListItemText>
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={this.handleDelete}>
                  <ListItemIcon className={classes.icon}>
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText classes={{ primary: classes.primary }} inset>
                    <FormattedMessage {...messages.delete} />                  
                  </ListItemText>
                </MenuItem>
              </Menu>
            </div>            
          }
          title = {
            <Typography gutterBottom variant="headline" component="h2">
              {item.name}
            </Typography>         
          }
          subheader = {
            <div>
              <FormattedMessage {...messages.price} />
              <b>
              <CurrencyFormatter
                quantity={item.price}
                currency={intl.formatMessage(messages.currency)}
              />
              </b> <br/>
              <FormattedMessage {...messages.months} /><b>{item.months}</b>
            </div>
          }
        />
      </Card>
    );
  }
}

CalculationItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default withStyles(styles)(injectIntl(CalculationItem));