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
} from 'react-native';
import { ArrowLeftIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import citiesData from '../components/citiesData';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import LinearGradient from 'react-native-linear-gradient';
import aviaBlogData from '../components/aviaBlogData';

const fontMontserratRegular = 'Montserrat-Regular';
const fontPaytoneOneRegular = 'PaytoneOne-Regular';

const AviaSavedBlScreen = ({ setUnveilingScreenNow }) => {
    const dimensions = Dimensions.get('window');
    const [savedAviaReads, setSavedAviaReads] = useState([1, 2, 3, 4, 5]);
    const [isAviaReadingNow, setAviaReadingNow] = useState(false);
    const [selectedAviaReadObj, setSelectedAviaReadObj] = useState(null);

    return (
        <SafeAreaView style={{ width: dimensions.width, height: dimensions.height }}>
            <View style={{
                width: dimensions.width * 0.91,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'center',
                paddingBottom: dimensions.height * 0.02,
            }}>
                <TouchableOpacity style={{
                    opacity: isAviaReadingNow ? 1 : 0,
                }}
                    disabled={!isAviaReadingNow}
                    onPress={() => {
                        setAviaReadingNow(false);
                        setSelectedAviaReadObj(null);
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
                    Saved
                </Text>

                <View style={{
                    opacity: 0,
                }}>
                    <ArrowLeftIcon size={dimensions.width * 0.1} color='white' />

                </View>
            </View>



            {!isAviaReadingNow ? (
                <ScrollView style={{

                }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: dimensions.height * 0.15,
                    }}
                >
                    {savedAviaReads.length > 0 && aviaBlogData.map((aviaBlog, index) => (
                        <View
                            key={index}
                            style={{
                                width: dimensions.width * 0.9,
                                alignSelf: 'center',
                                borderRadius: dimensions.width * 0.07,
                                backgroundColor: '#151311',
                                marginTop: dimensions.height * 0.02,
                                paddingHorizontal: dimensions.width * 0.06,
                                paddingVertical: dimensions.height * 0.02,
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    textAlign: 'left',
                                    fontSize: dimensions.width * 0.055555,
                                    maxWidth: dimensions.width * 0.91,
                                    fontWeight: '600',
                                    alignSelf: 'center',
                                    fontFamily: fontPaytoneOneRegular,
                                }}
                            >
                                {aviaBlog.aviaTitle}
                            </Text>

                            <View style={{
                                width: '100%',
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: dimensions.height * 0.02,
                            }}>
                                <TouchableOpacity style={{
                                    width: dimensions.width * 0.5,
                                    height: dimensions.height * 0.08,
                                    borderRadius: dimensions.width * 0.05,
                                    overflow: 'hidden',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: dimensions.width * 0.003,
                                    borderColor: '#EF3A38',
                                }}
                                    onPress={() => {
                                        setAviaReadingNow(true);
                                        setSelectedAviaReadObj(aviaBlog);
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
                                        Read
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    width: dimensions.width * 0.18,
                                    height: dimensions.height * 0.08,
                                    borderRadius: dimensions.width * 0.06,
                                    overflow: 'hidden',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: dimensions.width * 0.003,
                                    borderColor: '#EF3A38',
                                }}
                                    onPress={() => {
                                        Share.share({
                                            message: `Read about ${aviaBlog.aviaTitle} on AviaMind: EuroQuest!`,
                                        })
                                    }}
                                >
                                    <LinearGradient
                                        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, }}
                                        colors={['#9F0D0B', '#EF3A38']}
                                        start={{ x: 0.5, y: 1 }}
                                        end={{ x: 0.5, y: 0 }}
                                    />
                                    <Image
                                        source={require('../assets/icons/aviaShare.png')}
                                        style={{
                                            width: dimensions.height * 0.04,
                                            height: dimensions.height * 0.04,
                                        }}
                                        resizeMode='contain'
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>
                    ))}
                </ScrollView>
            ) : (
                <ScrollView style={{

                }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: dimensions.height * 0.15,
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'left',
                            fontSize: dimensions.width * 0.05,
                            maxWidth: dimensions.width * 0.91,
                            fontWeight: '600',
                            alignSelf: 'center',
                            fontFamily: fontPaytoneOneRegular,
                        }}
                    >
                        {selectedAviaReadObj.aviaTitle}
                    </Text>

                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'left',
                            fontSize: dimensions.width * 0.04,
                            maxWidth: dimensions.width * 0.91,
                            fontWeight: '400',
                            alignSelf: 'center',
                            fontFamily: fontMontserratRegular,
                            marginTop: dimensions.height * 0.03,
                        }}
                    >
                        {selectedAviaReadObj.aviaBlogContent}
                    </Text>


                    <View style={{
                        width: '91%',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginTop: dimensions.height * 0.02,
                        alignSelf: 'center',
                    }}>
                        <TouchableOpacity style={{
                            width: dimensions.width * 0.5,
                            height: dimensions.height * 0.08,
                            borderRadius: dimensions.width * 0.05,
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: dimensions.width * 0.003,
                            borderColor: '#EF3A38',
                            marginRight: dimensions.width * 0.05,
                        }}
                            onPress={() => {
                                setAviaReadingNow(true);
                                setSelectedAviaReadObj(aviaBlog);
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
                                Unsave
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: dimensions.width * 0.18,
                            height: dimensions.height * 0.08,
                            borderRadius: dimensions.width * 0.06,
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: dimensions.width * 0.003,
                            borderColor: '#EF3A38',
                        }}
                            onPress={() => {
                                Share.share({
                                    message: `Read about ${selectedAviaReadObj.aviaTitle} on AviaMind: EuroQuest!`,
                                })
                            }}
                        >
                            <LinearGradient
                                style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, }}
                                colors={['#9F0D0B', '#EF3A38']}
                                start={{ x: 0.5, y: 1 }}
                                end={{ x: 0.5, y: 0 }}
                            />
                            <Image
                                source={require('../assets/icons/aviaShare.png')}
                                style={{
                                    width: dimensions.height * 0.04,
                                    height: dimensions.height * 0.04,
                                }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            )}

        </SafeAreaView>
    );
};

export default AviaSavedBlScreen;
