import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Wrapper from './Wrapper';
import { calculate } from './calculation';
import CurrencyFormatter  from 'react-currency-formatter';
import messages from './messages';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

const styles = {
  card: {
  },
  media: {
    width: 'auto',
    margin: 'auto'
  },
};

function CalculationResult(props) {
  const { classes, items, intl } = props;
  const calculation = calculate(items);
  return (    
    <Wrapper>
      <Card className={classes.card}>
        <CardContent>        
          <Typography gutterBottom variant="headline" component="h2">
            <FormattedMessage {...messages.resultHeader} />
          </Typography>
          <Typography component="p">
            <FormattedMessage {...messages.savingLabel} />
            <b>
              <CurrencyFormatter
                  quantity={calculation.price || 0}
                  currency={intl.formatMessage(messages.currency)}
              />
            </b>
            <FormattedMessage {...messages.savingForLabel} />
            <b>{`1. - ${calculation.months || 1}. ${intl.formatMessage(messages.months)}.`}</b>
          </Typography>
        </CardContent>
      </Card>
    </Wrapper>
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