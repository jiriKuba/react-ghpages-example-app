/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NotFound from '../index';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(<NotFound />);
    expect(
      renderedComponent.contains(
        <Card>
          <CardContent>
            <Typography>
              <FormattedMessage 
              id="savings.containers.NotFoundPage.header"
              defaultMessage="Page not found."/>
            </Typography>
            <Typography component="p">
            <FormattedMessage 
              id="savings.containers.NotFoundPage.description"
              defaultMessage="You broke it! :(" />
            </Typography>        
          </CardContent>
        </Card>
      )
    ).toEqual(true);
  });
});