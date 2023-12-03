import { PageWrapper } from '@/components/Views/ScreenWrapper';
import { colorsPattern } from '@/styles/colors';
import { useRoute } from '@react-navigation/native';
import { FlatList, Text, View } from 'native-base';
import { mockChat } from './mockChat';
import { Messages } from './Messages';
import { Animated } from 'react-native';
import { BottomTextInputAttachment } from './BottomTextInputAttachment';

interface ChatRoomProps {
    name: string;
    isGroup: boolean;
}

export const ChatRoom: React.FC = () => {
    const {
        params: { name, isGroup },
    } = useRoute() as any as { params: ChatRoomProps };

    const userId = 1;

    const sortMessager = Array.from(mockChat).sort((a, b) => {
        return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
    });

    return (
        <PageWrapper edges={['right', 'left']}>
            <View pt={12} w={'100%'} px={4} bgColor={'gray.200'} pb={2} shadow={2}>
                <Text color={colorsPattern.blue} bold fontSize={16}>
                    {name}
                </Text>
            </View>

            <Animated.View style={{ width: '100%', flexShrink: 1 }}>
                <FlatList
                    w={'100%'}
                    px={4}
                    contentContainerStyle={{ paddingTop: 16 }} // Ta invertido logo inverte tudo F
                    data={sortMessager}
                    scrollsToTop={true}
                    inverted={true}
                    renderItem={({ item }) => {
                        return (
                            <Messages
                                isGroup={isGroup}
                                name={item.username}
                                userId={userId}
                                userIdMessage={item.userId}
                                message={item.message}
                                createdAt={item.dateTime}
                            />
                        );
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </Animated.View>

            <BottomTextInputAttachment />
        </PageWrapper>
    );
};
