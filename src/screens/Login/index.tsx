import { PageWrapper } from '@/components/Views/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';
import { Title } from './components/Title';
import InputsLogin from './components/InputsLogin';
import { VStack } from 'native-base';

export const Login: React.FC = () => {
    const { navigate } = useNavigation();

    return (
        <PageWrapper>
            <VStack
                alignItems="center"
                justifyContent="center"
                mb={10}
                w={'100%'}
                h={'100%'}
                pb={16}>
                <Title />

                <InputsLogin />
            </VStack>
        </PageWrapper>
    );
};
