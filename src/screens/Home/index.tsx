import { PageWrapper } from '@/components/Views/ScreenWrapper';
import { Divider, FlatList, IconButton, Text, View } from 'native-base';
import { Animated, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { FilterButtons } from './components/FilterIndGrou';
import { colorsPattern } from '@/styles/colors';
import { useEffect, useRef, useState } from 'react';
import { ChatExibition } from './components/ChatExibition';
import { groupChats, individualChats } from './mockChats';

export const Home: React.FC = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const [isGroup, setIsGroup] = useState<boolean>(false);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        });
    }, [isGroup]);

    return (
        <PageWrapper edges={['left', 'right', 'top']}>
            <View
                w={'100%'}
                mt={12}
                paddingX={4}
                flexDir={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Text bold fontSize={24}>
                    Chats
                </Text>

                <IconButton
                    size={12}
                    icon={<Feather name={'search'} size={24} color={colorsPattern.blue} />}
                />
            </View>

            <Divider my={2} mb={4} />

            <FilterButtons setIsGroup={setIsGroup} />

            {!isGroup && (
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        width: '100%',
                        height: '80%',
                    }}>
                    <FlatList
                        data={individualChats}
                        w={'100%'}
                        mt={4}
                        px={2}
                        renderItem={({ item }) => (
                            <ChatExibition
                                name={item.name}
                                lastMessage={item.lastMessage}
                                lastMessageTime={item.lastMessageTime}
                                unreadMessages={item.unreadMessages}
                                isGroup={item.isGroup}
                            />
                        )}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <Divider my={2} />}
                    />
                </Animated.View>
            )}

            {isGroup && (
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        width: '100%',
                        height: '80%',
                    }}>
                    <FlatList
                        data={groupChats}
                        w={'100%'}
                        mt={4}
                        px={2}
                        renderItem={({ item }) => (
                            <ChatExibition
                                name={item.name}
                                lastMessage={item.lastMessage}
                                lastMessageTime={item.lastMessageTime}
                                unreadMessages={item.unreadMessages}
                                isGroup={item.isGroup}
                                nameFromPersonLastMessage={item.nameFromPersonLastMessage}
                            />
                        )}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <Divider my={2} />}
                    />
                </Animated.View>
            )}
        </PageWrapper>
    );
};
