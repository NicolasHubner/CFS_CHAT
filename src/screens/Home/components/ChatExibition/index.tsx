import { INavigation } from '@/interfaces/Navigation';
import { Routes } from '@/routes/routes';
import { colorsPattern } from '@/styles/colors';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'native-base';

interface ChatExibitionProps {
    name: string;
    lastMessage: string;
    lastMessageTime: string;
    unreadMessages: number;
    isGroup: boolean;
    nameFromPersonLastMessage?: string;
}

export const ChatExibition: React.FC<ChatExibitionProps> = ({
    name,
    lastMessage,
    lastMessageTime,
    unreadMessages,
    isGroup,
    nameFromPersonLastMessage,
}) => {
    const getFirstAndSecondLetter = (name: string) => {
        const [firstLetter, secondLetter] = name.split(' ');

        return `${firstLetter[0].toLocaleUpperCase()}${secondLetter[0].toUpperCase()}`;
    };

    const { navigate } = useNavigation<INavigation>();

    const putLimitCaracters = (text: string) => {
        if (text.length > 25) {
            if (isGroup) return `${text.substring(0, 20)}...`;
            return `${text.substring(0, 25)}...`;
        }

        return text;
    };

    const putLimitCaractersName = (text: string) => {
        if (text.length > 5) {
            return `${text.substring(0, 10)}...`;
        }

        return text;
    };
    return (
        <Pressable
            w={'100%'}
            _pressed={{
                backgroundColor: '#E5E5E5',
            }}
            roundedBottomLeft={24}
            roundedTopLeft={24}
            onPress={() =>
                navigate(Routes.Main.ChatRoom, {
                    name,
                    isGroup,
                })
            }
            flexDir={'row'}
            justifyContent={'flex-start'}>
            <View
                backgroundColor={'blue.500'}
                w={12}
                h={12}
                rounded={'full'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Text color={'white'} bold>
                    {getFirstAndSecondLetter(name)}
                </Text>
            </View>

            <View ml={2} flexDir={'column'} flexGrow={1}>
                <View flexDir={'row'} justifyContent={'space-between'}>
                    <Text bold color={colorsPattern.blue}>
                        {name}
                    </Text>

                    <Text fontSize={10}>há {lastMessageTime}</Text>
                </View>

                <View flexDir={'row'} justifyContent={'space-between'}>
                    {!isGroup && <Text>{putLimitCaracters(lastMessage)}</Text>}

                    {isGroup && (
                        <Text>
                            <Text bold>
                                {putLimitCaractersName(nameFromPersonLastMessage || '')}
                            </Text>
                            : {putLimitCaracters(lastMessage)}
                        </Text>
                    )}
                    <View
                        bgColor={'red.400'}
                        w={6}
                        h={6}
                        rounded={'full'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Text color={'#fff'} bold>
                            {unreadMessages}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};
