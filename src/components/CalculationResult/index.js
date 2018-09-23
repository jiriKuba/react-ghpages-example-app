import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { calculate } from './calculation';
import CurrencyFormatter  from 'react-currency-formatter';
import messages from './messages';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

const styles = {
  card: {
    maxWidth: 820,
  },
  media: {
    // object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

function CalculationResult(props) {
  const { classes, items, intl } = props;
  const calculation = calculate(items);
  return (
    <Card className={classes.card}>
      {/* TODO: some image */}
      {/* <CardMedia
          component="img"
          className={classes.media}
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="headline" component="h1">
          How much money to save?
        </Typography>
        <Typography component="p">
          This app is calculating <b>how much money</b> you need to monthly save for your wishes. 
          You can <a>add</a> multiple items (by the plus + button) you wish to buy. 
          For every item you need to specify price and month count when you want to have saved money.
        </Typography>
        <Typography gutterBottom variant="headline" component="h2">
          Current savings
        </Typography>
        <Typography component="p">
          You have to save&nbsp;
          <b>
            <CurrencyFormatter
                quantity={calculation.price}
                currency={intl.formatMessage(messages.currency)}
            />
          </b> for <b>{`1. - ${calculation.months}. months.`}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}

CalculationResult.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      months: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
};

export default withStyles(styles)(injectIntl(CalculationResult));