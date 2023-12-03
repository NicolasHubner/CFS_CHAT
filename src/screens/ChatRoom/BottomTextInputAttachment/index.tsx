import { colorsPattern } from '@/styles/colors';
import { Input, Pressable, View } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

export const BottomTextInputAttachment: React.FC = () => {
    return (
        <View
            w={'100%'}
            h={20}
            bgColor={colorsPattern.blue}
            flexDir={'row'}
            p={4}
            justifyContent={'space-around'}
            style={{ gap: 8 }}>
            <Input
                placeholder={'Escreva uma mensagem...'}
                flexGrow={1}
                rounded={12}
                placeholderTextColor={colorsPattern.blue}
                bgColor={'#fff'}
                _focus={{ borderColor: 'transparent' }}
                _hover={{ borderColor: 'transparent' }}
                _web={{
                    _focus: { borderColor: 'transparent' },
                    _hover: { borderColor: 'transparent' },
                }}
            />
            <Pressable
                w={12}
                h={12}
                bgColor={'#fff'}
                rounded={12}
                justifyContent={'center'}
                _pressed={{ opacity: 0.5 }}
                alignItems={'center'}>
                <Feather name={'alert-triangle'} size={24} color={colorsPattern.blue} />
            </Pressable>

            <Pressable
                w={12}
                h={12}
                bgColor={'#fff'}
                rounded={12}
                justifyContent={'center'}
                _pressed={{ opacity: 0.5 }}
                alignItems={'center'}>
                <Feather name={'camera'} size={24} color={colorsPattern.blue} />
            </Pressable>

            <Pressable
                w={12}
                h={12}
                bgColor={'#fff'}
                rounded={12}
                justifyContent={'center'}
                _pressed={{ opacity: 0.5 }}
                alignItems={'center'}>
                <Feather name={'send'} size={24} color={colorsPattern.blue} />
            </Pressable>
        </View>
    );
};
