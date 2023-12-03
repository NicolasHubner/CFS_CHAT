import {
    NativeStackNavigationOptions,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Routes } from '../routes';
import { Login } from '@/screens/Login';
import { Splash } from '@/screens/Splash';

export function AuthRoutes() {
    const Stack = createNativeStackNavigator();

    const screenOptions: NativeStackNavigationOptions = {
        headerShown: false,
        orientation: 'portrait',
        animation: 'fade',
    };

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={Routes.Auth.Login} component={Login} />
            <Stack.Screen name={Routes.Auth.Splash} component={Splash} />
        </Stack.Navigator>
    );
}
