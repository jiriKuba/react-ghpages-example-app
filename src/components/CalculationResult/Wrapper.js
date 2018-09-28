import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

function Wrapper(props) {
  return (
    <Grid item xs={12} md={8}>
        {props.children}
    </Grid>
  );
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;