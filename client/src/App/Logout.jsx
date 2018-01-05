function Logout({ onLogOut, history }) {
  onLogOut();
  history.push('/');
  return false;
}

export default Logout;
