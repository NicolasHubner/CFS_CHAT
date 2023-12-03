import { Button, Input, Pressable, Spinner, Text } from 'native-base';
import { TextInputs } from './TextInputs';
import { INavigation } from '@/interfaces/Navigation';
import { useNavigation } from '@react-navigation/native';
import { colorsPattern } from '@/styles/colors';
import { Routes } from '@/routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { SET_USER_INFO } from '@/store/reducers/profileSlice';
import { useState } from 'react';

export default function InputsLogin() {
    const { navigate } = useNavigation<INavigation>();

    const [isLoad, setIsLoad] = useState(false);

    const dispatch = useDispatch();

    const onSubmit = () => {
        setIsLoad(true);
        try {
            dispatch(
                SET_USER_INFO({
                    name: 'João',
                    email: '',
                    isLogged: true,
                })
            );
            setTimeout(() => {
                navigate(Routes.Main.Home, { screen: Routes.Main.Home });
            }, 1000);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoad(false);
        }
    };
    return (
        <>
            <TextInputs textInput="Usuário" />
            <Input
                placeholder={'Usuário'}
                w={'90%'}
                rounded={12}
                mb={4}
                placeholderTextColor={'#000'}
                bgColor={'#fff'}
                _focus={{ borderColor: 'transparent' }}
                _hover={{ borderColor: 'transparent' }}
                _web={{
                    _focus: { borderColor: 'transparent' },
                    _hover: { borderColor: 'transparent' },
                }}
            />

            <TextInputs textInput="Senha" />

            <Input
                placeholder={'Senha'}
                w={'90%'}
                rounded={12}
                placeholderTextColor={'#000'}
                bgColor={'#fff'}
                _focus={{ borderColor: 'transparent' }}
                _hover={{ borderColor: 'transparent' }}
                _web={{
                    _focus: { borderColor: 'transparent' },
                    _hover: { borderColor: 'transparent' },
                }}
            />

            <Pressable
                onPress={onSubmit}
                w={'90%'}
                h={50}
                mt={8}
                rounded={12}
                bgColor={colorsPattern.blue}
                alignItems={'center'}
                disabled={isLoad}
                justifyContent={'center'}>
                {!isLoad ? (
                    <Text
                        color={'#fff'}
                        fontSize={14.33}
                        fontWeight={'500'}
                        lineHeight={21.49}
                        letterSpacing={1}
                        textAlign={'center'}>
                        Entrar
                    </Text>
                ) : (
                    <Spinner accessibilityLabel="Loading posts" color="white" size="sm" />
                )}
            </Pressable>
        </>
    );
}
