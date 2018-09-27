/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import messages from './messages';

const styles = {
  card: {
    flexGrow: 1,
    margin: 'auto',
    marginTop: '15px',
    maxWidth: '512px'
  },
  media: {
    width: 'auto',
    margin: 'auto'
  },
};

function NotFound(props) {
  const { classes, intl } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        height="512"
        image="/images/pig_crash.png"
        title={intl.formatMessage(messages.image)}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h1">
          <FormattedMessage {...messages.header} />
        </Typography>
        <Typography component="p">
        <FormattedMessage {...messages.description} />
        </Typography>        
      </CardContent>
    </Card>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(NotFound));