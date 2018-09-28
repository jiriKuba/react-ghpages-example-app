/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import CalculationPage from '../CalculationPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Header from '../../components/Header';
import materialTheme from '../../components/MaterialTheme';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';

const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
`;

function App(props) {
  const { intl } = props;
  return (
    <AppWrapper>
      <Helmet
        titleTemplate={intl.formatMessage(messages.titleTemplate)}
        defaultTitle={intl.formatMessage(messages.title)}
      >
        <meta name="description" content={intl.formatMessage(messages.description)} />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={CalculationPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}

App.propTypes = {
  intl: intlShape.isRequired
};

export default materialTheme(injectIntl(App));