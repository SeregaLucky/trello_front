import { Navigate } from 'react-router';

import { Urls } from 'helpers/urls';

const RedirectToLogin = () => {
  return <Navigate to={Urls.getLoginURL()} replace />;
};

export default RedirectToLogin;
