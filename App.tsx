import { Routes } from '@/routes';
import { store } from '@/store/store';
import { NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <>
            <Provider store={store}>
                <NativeBaseProvider>
                    <Routes />
                </NativeBaseProvider>
            </Provider>
        </>
    );
}

LogBox.ignoreLogs([
    'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]);

// Problema apresentado recente no NativeBase https://github.com/GeekyAnts/NativeBase/issues/5758
