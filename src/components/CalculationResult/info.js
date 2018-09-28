import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import messages from './messages';
import Wrapper from './Wrapper';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import image from '../../images/pig.png';

const styles = {
  card: {
  },
  media: {
    width: 'auto',
    margin: 'auto'
  },
};

function CalculationInfo(props) {
  const { classes, intl } = props;
  return (    
    <Wrapper>
      <Card className={classes.card}>
        <CardMedia
            component="img"
            className={classes.media}
            height="270"
            image={image}
            title={intl.formatMessage(messages.infoImageAlt)}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            <FormattedMessage {...messages.infoHeader} />
          </Typography>
          <Typography component="p">
            <FormattedMessage {...messages.infoDescriptionPartOne} />
            <b>
              <FormattedMessage {...messages.infoDescriptionPartTwo} />
            </b>
            <FormattedMessage {...messages.infoDescriptionPartThree} />
          </Typography>
        </CardContent>
      </Card>
    </Wrapper>
  );
}

CalculationInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(CalculationInfo));