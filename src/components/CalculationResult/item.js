import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CurrencyFormatter  from 'react-currency-formatter';

class CalculationResultItem extends React.Component {
  render() {
    const { item, intl, messages } = this.props;
    return (
      <li>
        <b>
          <CurrencyFormatter
              quantity={item.price || 0}
              currency={intl.formatMessage(messages.currency)}
          />
        </b>
        <FormattedMessage {...messages.savingForLabel} />
        <b>{`${item.interval} ${intl.formatMessage(messages.months)}.`}</b>
      </li>
    );
  }
}

CalculationResultItem.propTypes = {
  intl: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  item: PropTypes.shape({
    index: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired
};

export default CalculationResultItem;