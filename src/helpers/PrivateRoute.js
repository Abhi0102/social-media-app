function PrivateRoute({ children }) {
  const { isLoggedIn } = children.props.isLoggedIn;

  return isLoggedIn ? children : children;
}

export default PrivateRoute;
