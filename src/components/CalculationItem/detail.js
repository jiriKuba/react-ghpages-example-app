import React from 'react';
import CurrencyFormatter  from 'react-currency-formatter';
import { FormattedMessage } from 'react-intl';

export default function Detail(props) {
  const { intl, item, messages } = props;
  return (
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
  );
}