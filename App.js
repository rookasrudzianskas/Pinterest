import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import PinScreen from "./src/screens/PinScreen";
import * as SecureStore from "expo-secure-store";
import {NhostClient, NhostReactProvider} from "@nhost/react";
window = undefined;

const nhost = new NhostClient({
    backendUrl: "https://zrgjwkhtxvwjnduihxev.nhost.run",
    clientStorageType: "expo-secure-storage",
    clientStorage: SecureStore,
});

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <NhostReactProvider nhost={nhost}>
                <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar style="light" />
                </SafeAreaProvider>
            </NhostReactProvider>
        );
    }
}
