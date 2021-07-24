import cookieDecoder from "./helpers/cookieDecoder";
import { LOGIN_DATA_COOKIE, SESSION_STORAGE_LIST } from "../constants";

const getLoginDataCookie = () => {
  const cookieValue = cookieDecoder(LOGIN_DATA_COOKIE);

  if (cookieValue) {
    const parsedCookieValues = JSON.parse(cookieValue);

    Object.keys(parsedCookieValues).forEach((value) => {
      if (SESSION_STORAGE_LIST.includes(value)) {
        sessionStorage.setItem(value, parsedCookieValues[value]);
      } else {
        localStorage.setItem(value, parsedCookieValues[value]);
      }
    });
  }
};

export default getLoginDataCookie;
