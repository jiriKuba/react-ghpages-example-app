/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormattedMessage } from 'react-intl';
import FormControl from '@material-ui/core/FormControl';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export class LocaleToggle extends React.PureComponent {
  render() {
    let languagesViews = [];
    if (appLocales) {
      languagesViews = appLocales.map(item => (
        <MenuItem value={item} key={item}>
          <FormattedMessage {...messages[item]} />
        </MenuItem>
      ));
    }
    return (
      <FormControl>        
        <Select
          value={this.props.locale}
          inputProps={{
            name: 'language',
            id: 'app-language-select',
          }}
          onChange={this.props.onLocaleToggle}
        >
          {languagesViews}
        </Select>
      </FormControl>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleToggle);