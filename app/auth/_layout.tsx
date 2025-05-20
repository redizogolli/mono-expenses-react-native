import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

const AuthLayout = () => {
    return (
        <>
        <Stack>
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
        <StatusBar barStyle="default" hidden={false} animated backgroundColor={'#fff'}/>
        </>
    );
}

export default AuthLayout