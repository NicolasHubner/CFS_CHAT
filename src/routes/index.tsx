import { Home } from '@/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthRoutes } from './auth';
import { MainRoutes } from './main';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const Routes: React.FC = () => {
    const { isLogged } = useSelector((state: RootState) => state.profile);

    return <NavigationContainer>{isLogged ? <MainRoutes /> : <AuthRoutes />}</NavigationContainer>;
};
