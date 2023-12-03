import React, { useEffect, useState } from 'react';
import { ScrollView, View, Animated } from 'react-native';
import type { ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

interface PageWrapperProps {
    children: React.ReactNode;
    marginTop?: number;
    padding?: number;
    setHeaderShown?: React.Dispatch<React.SetStateAction<boolean>> | null;
    edges?: Edge[];
    styles?: ViewStyle;
    bottomSpacing?: boolean | number;
    setRef?: React.Dispatch<React.SetStateAction<ScrollView | null>>;
    enableFade?: boolean;
}

export function PageWrapper({
    children,
    marginTop,
    edges,
    bottomSpacing,
    styles,
    enableFade = false,
}: PageWrapperProps) {
    const [fadeAnim, _] = useState(new Animated.Value(enableFade ? 0 : 1));

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }} edges={edges}>
            <Animated.View
                style={{
                    alignItems: 'center',
                    marginTop: marginTop ?? 0,
                    opacity: enableFade ? 1 : fadeAnim,
                    ...styles,
                    height: '100%',
                }}>
                {children}
                {!!bottomSpacing && (
                    <View
                        style={{ height: typeof bottomSpacing === 'boolean' ? 56 : bottomSpacing }}
                    />
                )}
            </Animated.View>
        </SafeAreaView>
    );
}

export function ScrollablePageWrapper({
    children,
    padding = 16,
    setHeaderShown = null,
    edges,
    styles,
    bottomSpacing,
    setRef,
    enableFade = false,
}: PageWrapperProps) {
    const [fadeAnim, _] = useState(new Animated.Value(enableFade ? 0 : 1));
    const scrollViewRef = React.useRef<ScrollView>(null);

    React.useEffect(() => {
        setRef?.(scrollViewRef.current);
    }, [setRef]);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, height: '100%', width: '100%' }} edges={edges}>
            <Animated.ScrollView
                contentContainerStyle={{ alignItems: 'center' }}
                scrollEventThrottle={128}
                onScroll={({ nativeEvent }) => {
                    if (setHeaderShown === null) {
                        return;
                    }
                    if (nativeEvent.contentOffset.y > 200) {
                        setHeaderShown(false);
                    } else {
                        setHeaderShown(true);
                    }
                }}
                style={{
                    padding,
                    flex: 1,
                    width: '100%',
                    opacity: enableFade ? 1 : fadeAnim,
                    ...styles,
                }}
                ref={scrollViewRef}
                showsVerticalScrollIndicator={false}>
                {children}
                {!!bottomSpacing && (
                    <View
                        style={{
                            height: typeof bottomSpacing === 'boolean' ? 56 : bottomSpacing,
                        }}
                    />
                )}
            </Animated.ScrollView>
        </SafeAreaView>
    );
}
