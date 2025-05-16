import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loadUserData } from '../redux/userSlice';
import { UserContext } from '../context/UserContext';
import AviaLoaderComponent from '../components/AviaLoaderComponent';

const AviaLoadAppScreen = () => {
  const dispatch = useDispatch();
  const { setUser } = useContext(UserContext);
  
  const navigation = useNavigation();
  
  const [isAviaAppWasLoadedYet, setAviaAppWasLoadedYet] = useState(false);
  const [isOnbAviaWas, setOnbAviaWas] = useState(false);
  
  const dimensions = Dimensions.get('window');
  const styles = AviaStyles(dimensions);

  useEffect(() => {
    dispatch(loadUserData());
  }, [dispatch]);

  useEffect(() => {
    const loadAviaUser = async () => {
      try {
        const aviaDeviceIdentif = await DeviceInfo.getUniqueId();
        const aviaStoragedKeyOfMind = `currentUser_${aviaDeviceIdentif}`;
        const isAviaMindOnbWasVis = await AsyncStorage.getItem('isAviaMindOnbWasVis');
        const aviaStoredUser = await AsyncStorage.getItem(aviaStoragedKeyOfMind);

        if (aviaStoredUser) {
          setUser(JSON.parse(aviaStoredUser));
          setAviaAppWasLoadedYet(false);
        } else if (isAviaMindOnbWasVis) setAviaAppWasLoadedYet(false);
         else {
          setAviaAppWasLoadedYet(true);
          await AsyncStorage.setItem('isAviaMindOnbWasVis', 'true');
        }
      } catch (error) {
        console.error('Error aviamind user loading:', error);
      } finally {
        setOnbAviaWas(true);
      }
    };

    loadAviaUser();
  }, [setUser]);

  useEffect(() => {
    if (isOnbAviaWas) {
      const custleDefenderTimer = setTimeout(() => {

        const aviaDestination = isAviaAppWasLoadedYet ? 'AviaOnboardingMindScreen' : 'AviaHomeMindScreen';

        navigation.replace(aviaDestination);
      }, 3333);
      return () => clearTimeout(custleDefenderTimer);
    }
  }, [isOnbAviaWas, isAviaAppWasLoadedYet, navigation]);

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#04050E',
        height: '100%',
        alignSelf: 'center',
        width: '100%',
      }}
    >
      <AviaLoaderComponent />
     
    </SafeAreaView>
  );
};

const AviaStyles = (dimensions) => StyleSheet.create({
  images: {
    width: dimensions.height * 0.1,
    height: dimensions.height * 0.1,
    position: 'absolute',
  }
});

export default AviaLoadAppScreen;