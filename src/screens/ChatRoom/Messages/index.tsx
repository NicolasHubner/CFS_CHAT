import { Text, View } from 'native-base';
import { format } from 'date-fns';

interface MessagesProps {
    name: string;
    userId: string | number;
    message: string;
    createdAt: string;
    userIdMessage: string | number;
    isGroup: boolean;
}

export const Messages: React.FC<MessagesProps> = ({
    name,
    userId,
    userIdMessage,
    message,
    createdAt,
    isGroup,
}: MessagesProps) => {
    const formatTime = format(new Date(createdAt), 'HH:mm');
    return (
        <View
            flexDir={'column'}
            mt={2}
            justifyContent={'center'}
            alignItems={userId === userIdMessage ? 'flex-end' : 'flex-start'}>
            <View bgColor={'red.100'} p={2} rounded={8}>
                {isGroup && <Text>{name}</Text>}
                <Text>{message}</Text>
                <Text alignSelf={userId === userIdMessage ? 'flex-end' : 'flex-start'}>
                    {formatTime}
                </Text>
            </View>
        </View>
    );
};
