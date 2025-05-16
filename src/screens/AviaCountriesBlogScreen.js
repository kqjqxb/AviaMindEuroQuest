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

const AviaCountriesBlogScreen = ({ setUnveilingScreenNow }) => {
    const dimensions = Dimensions.get('window');
    const [isAviaBlogReadingNow, setAviaBlogReadingNow] = useState(false);
    const [selectedAviaBlogToReading, setSelectedAviaBlogToReading] = useState(null);
    const styles = aviaMindStyles(dimensions);

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
                    opacity: isAviaBlogReadingNow ? 1 : 0,
                }}
                    disabled={!isAviaBlogReadingNow}
                    onPress={() => {
                        setAviaBlogReadingNow(false);
                        setSelectedAviaBlogToReading(null);
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
                    Blog
                </Text>

                <View style={{
                    opacity: 0,
                }}>
                    <ArrowLeftIcon size={dimensions.width * 0.1} color='white' />

                </View>
            </View>



            {!isAviaBlogReadingNow ? (
                <ScrollView style={{
                }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: dimensions.height * 0.15,
                    }}
                >
                    {aviaBlogData.map((aviaBlog, index) => (
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
                                <TouchableOpacity style={styles.longButtonStyles}
                                    onPress={() => {
                                        setAviaBlogReadingNow(true);
                                        setSelectedAviaBlogToReading(aviaBlog);
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

                                <TouchableOpacity style={styles.shareButtonStyles}
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: dimensions.height * 0.15,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: fontPaytoneOneRegular,
                            textAlign: 'left',
                            fontSize: dimensions.width * 0.05,
                            maxWidth: dimensions.width * 0.91,
                            fontWeight: '600',
                            color: 'white',
                            alignSelf: 'center',
                        }}
                    >
                        {selectedAviaBlogToReading.aviaTitle}
                    </Text>

                    <Text
                        style={{
                            color: 'white',
                            maxWidth: dimensions.width * 0.91,
                            fontSize: dimensions.width * 0.04,
                            fontFamily: fontMontserratRegular,
                            fontWeight: '400',
                            alignSelf: 'center',
                            marginTop: dimensions.height * 0.03,
                            textAlign: 'left',
                        }}
                    >
                        {selectedAviaBlogToReading.aviaBlogContent}
                    </Text>

                    <View style={{
                        width: '91%',
                        marginTop: dimensions.height * 0.02,
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                    }}>
                        <TouchableOpacity style={[styles.longButtonStyles, {
                            marginRight: dimensions.width * 0.05,
                        }]}
                            onPress={() => {
                                setAviaBlogReadingNow(true);
                                setSelectedAviaBlogToReading(aviaBlog);
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
                                    fontFamily: fontPaytoneOneRegular,
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    fontSize: dimensions.width * 0.05,
                                    color: 'white',
                                }}
                            >
                                Save
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.shareButtonStyles}
                            onPress={() => {
                                Share.share({
                                    message: `Read about ${selectedAviaBlogToReading.aviaTitle} on AviaMind: EuroQuest!`,
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
    },
    shareButtonStyles: {
        justifyContent: 'center',
        width: dimensions.width * 0.18,
        borderColor: '#EF3A38',
        borderRadius: dimensions.width * 0.06,
        overflow: 'hidden',
        alignItems: 'center',
        height: dimensions.height * 0.08,
        borderWidth: dimensions.width * 0.003,
    },
});

export default AviaCountriesBlogScreen;
