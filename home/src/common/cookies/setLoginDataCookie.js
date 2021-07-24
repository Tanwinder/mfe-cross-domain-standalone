import { getDomainName } from '../utilities';
import { LOGIN_DATA_COOKIE } from '../constants';

const setLoginDataCookie = (sessionToken) => {
  const domainName = getDomainName();
  const secureValue = window?.location?.href?.includes('.lowes.com') ? 'secure=true' : '';

  const cookieLocalStorageValues = window.localStorage;

  const cookieSessionTokenValue = {
    updatedAt: new Date(Date.now()),
    token: sessionToken,
  };

  const cookieData = JSON.stringify({
    ...cookieLocalStorageValues,
    sessionToken: JSON.stringify(cookieSessionTokenValue),
  });

  document.cookie = `${LOGIN_DATA_COOKIE}=${cookieData};domain=${domainName};path=/;${
    secureValue && secureValue
  }`;
};

export default setLoginDataCookie;