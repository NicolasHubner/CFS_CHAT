import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export const Splash: React.FC = () => {
    const { navigate } = useNavigation();

    return (
        <View>
            <Text>Splash</Text>
        </View>
    );
};
