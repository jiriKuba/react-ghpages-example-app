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
// import HomePage from './containers/HomePage/Loadable';
import CalculationPage from '../CalculationPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Header from '../../components/Header';
import materialTheme from '../../components/MaterialTheme';

const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
`;
// export default withRoot(withStyles(styles)(Index));
export default materialTheme(function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Savings calculation"
        defaultTitle="Savings calculation"
      >
        <meta name="description" content="A savings calculation application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={CalculationPage} />
        {/* <Route path="/about" component={AboutPage} /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
});