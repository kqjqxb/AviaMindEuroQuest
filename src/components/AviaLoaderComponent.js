import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Mask, Rect, G, Circle, Polygon } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedG = Animated.createAnimatedComponent(G);

const AviaLoaderComponent = () => {
    const rotationAnim = useRef(new Animated.Value(0)).current;
    const strokeAnim = useRef(new Animated.Value(452)).current;
    const arrowAnim = useRef(new Animated.Value(0)).current;
    const tickOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotationAnim, {
                toValue: 1, 
                duration: 2000,
                useNativeDriver: true,
            })
        ).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(strokeAnim, {
                    toValue: 169.5,
                    duration: 1000,
                    useNativeDriver: false, 
                }),
                Animated.timing(strokeAnim, {
                    toValue: 452,
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ])
        ).start();

        Animated.loop(
            Animated.timing(arrowAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            })
        ).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(tickOpacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(tickOpacity, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [rotationAnim, strokeAnim, arrowAnim, tickOpacity]);

    const rotateInterpolate = rotationAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg'],
    });

    const arrowRotate = arrowAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                <Svg width="160" height="160" viewBox="0 0 160 160">
                    <Defs>
                        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                            <Stop offset="0%" stopColor="#000" />
                            <Stop offset="100%" stopColor="#fff" />
                        </LinearGradient>
                        <Mask id="mask1">
                            <Rect x="0" y="0" width="160" height="160" fill="url(#grad)" />
                        </Mask>
                    </Defs>
                    <G>
                        <AnimatedCircle
                            cx="80"
                            cy="80"
                            r="72"
                            fill="none"
                            stroke="hsl(223,90%,55%)"
                            strokeWidth="16"
                            strokeDasharray="452.39"
                            strokeDashoffset={strokeAnim}
                            strokeLinecap="round"
                            transform="rotate(-45 80 80)"
                        />
                    </G>
                    <AnimatedG opacity={tickOpacity}>
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                            <Rect
                                key={index}
                                x="78"
                                y="5"
                                width="4"
                                height="10"
                                fill="white"
                                transform={`rotate(${angle} 80 80)`}
                            />
                        ))}
                    </AnimatedG>
                    <AnimatedG transform={`rotate(${arrowRotate} 80 80)`}>
                        <Polygon
                            points="80,40 90,70 70,70"
                            fill="hsl(3,90%,55%)"
                        />
                        <Polygon
                            points="80,120 90,90 70,90"
                            fill="hsl(223,10%,90%)"
                        />
                    </AnimatedG>
                </Svg>
            </Animated.View>
        </View>
    );
};

export default AviaLoaderComponent;