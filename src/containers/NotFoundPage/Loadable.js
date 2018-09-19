/**
 * Asynchronously loads the component for NotFoundPage
 */
import Loadable from 'react-loadable';
import CircularProgress from '@material-ui/core/CircularProgress';

export default Loadable({
  loader: () => import('./index'),
  loading: CircularProgress,
});