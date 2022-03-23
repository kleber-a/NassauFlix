import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {
  getAccountDetails,
  getIdAccessToken,
  getRequestToken,
  validateToken,
} from '../service/api';

export const AuthContext = React.createContext();

export default function Auth({children}) {
  const [account, setAccount] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  async function getUser(token) {
    const dataSession = await getIdAccessToken({request_token: token});
    const dataAccount = await getAccountDetails(dataSession);
    setAccount(dataAccount);
    setSessionId(dataSession);
  }

  async function userLogin(username, password) {
    try {
      const token = await getRequestToken();
      const isSucess = await validateToken({
        username: username,
        password: password,
        request_token: token,
      });
      AsyncStorage.setItem(['@CodeApi:token', JSON.stringify(token)]);
      await getUser(token);
      return isSucess;
    } catch (error) {
      return error.response.data.success;
    }
  }

  return (
    <AuthContext.Provider value={{userLogin, account, sessionId}}>
      {children}
    </AuthContext.Provider>
  );
}
