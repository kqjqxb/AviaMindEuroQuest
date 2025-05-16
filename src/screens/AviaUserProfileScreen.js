import React, { useState, useRef } from 'react';
import {
    Text,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    Image,
    View,
    Animated,
    ScrollView,
    Share,
    StyleSheet,
} from 'react-native';
import { ArrowLeftIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import LinearGradient from 'react-native-linear-gradient';
import aviaBlogData from '../components/aviaBlogData';

const fontMontserratRegular = 'Montserrat-Regular';
const fontPaytoneOneRegular = 'PaytoneOne-Regular';

const AviaUserProfileScreen = ({ setUnveilingScreenNow }) => {
    const dimensions = Dimensions.get('window');
    const styles = aviaMindStyles(dimensions);
    const [countriesVisited, setCountriesVisited] = useState(0);

    return (
        <SafeAreaView style={{ width: dimensions.width, height: dimensions.height }}>
            <View style={{
                paddingBottom: dimensions.height * 0.02,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                alignItems: 'center',
                width: dimensions.width * 0.91,
            }}>
                <TouchableOpacity style={{
                    opacity: 0
                }}
                    onPress={() => {
                    }}
                >
                    <ArrowLeftIcon size={dimensions.width * 0.1} color='white' />
                </TouchableOpacity>
                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: dimensions.width * 0.07,
                        maxWidth: dimensions.width * 0.91,
                        fontWeight: '600',
                        alignSelf: 'center',
                        fontFamily: fontPaytoneOneRegular,

                    }}
                >
                    My profile
                </Text>

                <View style={{
                    opacity: 0,
                }}>
                    <ArrowLeftIcon size={dimensions.width * 0.1} color='white' />

                </View>
            </View>

            <TouchableOpacity style={{
                alignSelf: 'center',
                width: dimensions.width * 0.5,
                height: dimensions.width * 0.5,
                backgroundColor: 'white',
                borderRadius: dimensions.width * 0.08,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: dimensions.height * 0.03,
            }}>
                <Image
                    source={require('../assets/images/myImage.png')}
                    style={{
                        width: dimensions.width * 0.2,
                        height: dimensions.width * 0.2,
                    }}
                    resizeMode='contain'
                />
            </TouchableOpacity>

            <Text
                style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: dimensions.width * 0.07,
                    maxWidth: dimensions.width * 0.91,
                    fontWeight: '600',
                    alignSelf: 'center',
                    fontFamily: fontPaytoneOneRegular,
                    marginTop: dimensions.height * 0.02,
                }}
            >
                [nickname]
            </Text>

            <TouchableOpacity>
                <Text
                    style={{
                        color: '#EF3A38',
                        textAlign: 'center',
                        fontSize: dimensions.width * 0.04,
                        maxWidth: dimensions.width * 0.91,
                        fontWeight: '600',
                        alignSelf: 'center',
                        fontFamily: fontPaytoneOneRegular,
                        marginTop: dimensions.height * 0.01,
                    }}
                >
                    change nickname
                </Text>
            </TouchableOpacity>

            <View
                style={{
                    width: dimensions.width * 0.9,
                    alignSelf: 'center',
                    borderRadius: dimensions.width * 0.07,
                    backgroundColor: '#151311',
                    marginTop: dimensions.height * 0.04,
                    paddingHorizontal: dimensions.width * 0.06,
                    paddingVertical: dimensions.height * 0.02,
                    alignItems: 'center',
                }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-start',
                }}>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'left',
                            fontSize: dimensions.width * 0.055555,
                            maxWidth: dimensions.width * 0.91,
                            fontWeight: '600',
                            alignSelf: 'flex-start',
                            fontFamily: fontPaytoneOneRegular,
                        }}
                    >
                        Countries visited: -{' '}
                    </Text>

                    <Text
                        style={{
                            color: '#EF3A38',
                            textAlign: 'left',
                            fontSize: dimensions.width * 0.055555,
                            maxWidth: dimensions.width * 0.91,
                            fontWeight: '600',
                            alignSelf: 'flex-start',
                            fontFamily: fontPaytoneOneRegular,
                        }}
                    >
                        X{countriesVisited}
                    </Text>
                </View>

                <TouchableOpacity style={styles.longButtonStyles}
                    onPress={() => {
                        Share.share({
                            message: `I visited ${countriesVisited} countr${countriesVisited === 1 ? 'y' : 'ies'}`
                        })
                    }}
                >
                    <LinearGradient
                        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, }}
                        colors={['#9F0D0B', '#EF3A38']}
                        start={{ x: 0.5, y: 1 }}
                        end={{ x: 0.5, y: 0 }}
                    />
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: dimensions.width * 0.05,
                            fontWeight: '600',
                            fontFamily: fontPaytoneOneRegular,
                        }}
                    >
                        Share
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const aviaMindStyles = (dimensions) => StyleSheet.create({
    longButtonStyles: {
        width: dimensions.width * 0.5,
        height: dimensions.height * 0.08,
        borderRadius: dimensions.width * 0.05,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: dimensions.width * 0.003,
        borderColor: '#EF3A38',
        marginTop: dimensions.height * 0.031,
        alignSelf: 'flex-start',
    },
});

export default AviaUserProfileScreen;
