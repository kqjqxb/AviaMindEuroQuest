import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import aviaDataOnb from '../components/aviaDataOnb';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const fontMontserratRegular = 'Montserrat-Regular';
const fontPaytoneOneRegular = 'PaytoneOne-Regular';

const AviaOnboMindScreen = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [aviaSlidePosition, setAviaSlidePosition] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const onChange = ({ window }) => {
      setDimensions(window);
    };
    const dimensionListener = Dimensions.addEventListener('change', onChange);
    return () => {
      dimensionListener.remove();
    };
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'rgba(16,15,14,255)',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Image
        source={aviaDataOnb[aviaSlidePosition].aviaImg}
        style={{
          width: dimensions.width * 0.95,
          height: dimensions.height * 0.45,
          marginTop: dimensions.height * 0.04,
          alignSelf: 'center',
        }}
        resizeMode="contain"
      />
      <View style={{
        shadowOffset: {
          width: 0,
          height: -dimensions.height * 0.002,
        },


        height: dimensions.height * 0.5,

        borderTopRightRadius: dimensions.width * 0.0391,
        borderTopLeftRadius: dimensions.width * 0.0391,
        backgroundColor: '#151411',

        shadowColor: 'rgba(223, 14, 12, 1)',

        paddingTop: dimensions.height * 0.03,

        display: 'flex',
        
        shadowRadius: 0,

        shadowOpacity: 1,
      }}>
        <View style={{
          alignItems: 'center',
          width: dimensions.width,
          flex: 1,
          justifyContent: 'space-between',
        }}>
          <View style={{
            alignSelf: 'center',
            width: dimensions.width,
            alignItems: 'center',
          }}>
            <Text
              style={{
                color: 'rgba(223, 14, 12, 1)',
                textAlign: 'center',
                fontSize: dimensions.width * 0.07,
                paddingHorizontal: dimensions.width * 0.1,
                fontFamily: fontPaytoneOneRegular,
                fontWeight: 700,
              }}>
              {aviaDataOnb[aviaSlidePosition].aviaText}
            </Text>

            <Text
              style={{
                fontWeight: 400,
                color: 'white',
                fontSize: dimensions.width * 0.043,
                paddingHorizontal: dimensions.width * 0.05,
                fontFamily: fontMontserratRegular,
                textAlign: 'center',
                marginTop: dimensions.height * 0.019,
              }}>
              {aviaDataOnb[aviaSlidePosition].aviaDescrip}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          if (aviaSlidePosition >= aviaDataOnb.length - 1) {
            navigation.replace('AviaHomeMindScreen');
          } else {
            setAviaSlidePosition((prev) => prev + 1);
          }
        }}
        style={{
          alignItems: 'center',
          borderRadius: dimensions.width * 0.1,
          alignSelf: 'center',
          height: dimensions.height * 0.076,
          position: 'absolute',
          bottom: dimensions.height * 0.1111,
          justifyContent: 'center',
          backgroundColor: '#D99CBE',
          width: '79%',
        }}
      >
        <LinearGradient
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, borderRadius: dimensions.width * 0.1 }}
          colors={['rgba(239, 58, 56, 1)', 'rgba(159, 13, 11, 1)']}
          start={{ x: 0.4, y: 0 }}
          end={{ x: 0.7, y: 1 }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontFamily: fontPaytoneOneRegular,
            fontWeight: 500,
            fontSize: dimensions.width * 0.0555,
            color: 'white',
          }}>
          {aviaSlidePosition === 0 ? 'Start Journey' : aviaSlidePosition === 1 ? 'Let’s Go' : 'Get Started'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AviaOnboMindScreen;
