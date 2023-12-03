import {
    NativeStackNavigationOptions,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Home } from '@/screens/Home'; // Fix import path
import { ChatRoom } from '@/screens/ChatRoom'; // Fix import path
import { Routes } from '../routes';

export function MainRoutes() {
    const Stack = createNativeStackNavigator();

    const screenOptions: NativeStackNavigationOptions = {
        headerShown: false,
        orientation: 'portrait',
        animation: 'fade',
    };

    return (
        <Stack.Navigator initialRouteName={Routes.Main.Home} screenOptions={screenOptions}>
            <Stack.Screen name={Routes.Main.Home} component={Home} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    headerTransparent: true,
                }}
                name={Routes.Main.ChatRoom}
                component={ChatRoom}
            />
        </Stack.Navigator>
    );
}
