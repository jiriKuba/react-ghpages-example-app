/**
 *
 * CalculationItem component
 * 
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';

import messages from './messages';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import Edit  from './edit';
import Detail  from './detail';
import Wrapper  from './Wrapper';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { isInvalid } from './validator';

const styles = theme => ({
  actions: {
    display: 'flex',
  },
  cardHeader: {
    alignItems: 'start',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  rightButton: {
    alignItems: 'end',
  },
});

class CalculationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      item: {
        id: props.item.id,
        name: props.item.name,
        editing: props.item.editing,
        price: props.item.price === 0 ? '' : props.item.price,
        months: props.item.months === 0 ? '' : props.item.months,
        isInvalid: isInvalid(props.item)
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
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

  handleSave() {
    const { onSave } = this.props;
    onSave(this.state.item);
  }

  handleEdit() {
    const { onEdit, item } = this.props;
    this.handleClose();
    onEdit({ id: item.id, editing: true });
  }

  handleCancelEdit() {
    const { onEdit, item } = this.props;
    onEdit({ id: item.id, editing: false });
  }

  handleItemChange(item) {
    this.setState({
      item: {
        id: item.id,
        name: item.name,
        editing: item.editing,
        price: item.price,
        months: item.months,
        isInvalid: item.isInvalid,
      }
    });
  }

  render() {
    const { classes, intl, item } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    let content;
    if (item.editing) {
      content = <Edit intl={intl} item={item} messages={messages} itemChanged={this.handleItemChange} />;
    } else {
      content = <Detail intl={intl} item={item} messages={messages} />;
    }

    return (
      <Wrapper>
        <Card>
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
                  {!item.editing && <MenuItem className={classes.menuItem} onClick={this.handleEdit}>
                    <ListItemIcon className={classes.icon}>
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset>
                      <FormattedMessage {...messages.edit} />
                    </ListItemText>
                  </MenuItem>}
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
            subheader = {content}
          />
          {item.editing && <CardActions className={classes.actions}>
            <Button size="small" color="primary" className={classes.rightButton} onClick={this.handleSave} disabled={this.state.item.isInvalid}>
              <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              <FormattedMessage {...messages.save} />
            </Button>

            <Button size="small" color="primary" className={classes.rightButton} onClick={this.handleCancelEdit}>
              <CancelIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              <FormattedMessage {...messages.cancel} />
            </Button>
          </CardActions>}
        </Card>
      </Wrapper>
    );
  }
}

CalculationItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    editing: PropTypes.bool,
  }).isRequired,
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default withStyles(styles)(injectIntl(CalculationItem));