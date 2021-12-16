import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute(props, { children }) {
  // console.log(props.children);
  let location = useLocation();
  // console.log('Private Route', props.auth.isLoggedIn);
  if (props.auth.isLoggedIn) {
    return props.children;
  }
  //   const { isLoggedIn } = children.props.isLoggedIn;

  return <Navigate to="/login" state={{ from: location }} />;
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(PrivateRoute);
