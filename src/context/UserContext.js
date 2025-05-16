import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const aviaLoadingUser = async () => {
      try {
        const storedAviaLoadedUser = await AsyncStorage.getItem('currentUser');
        if (storedAviaLoadedUser) {
          setUser(JSON.parse(storedAviaLoadedUser));
        }
      } catch (error) {
        console.error('load Avia user was crashed by error:', error);
      }
    };
    aviaLoadingUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
