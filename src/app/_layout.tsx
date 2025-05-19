import { useFonts } from 'expo-font';
import "@/global.css";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider';
import store, { persistor } from '../stores';
import TabNavigator from './TabNavigator';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    //<Provider store={store}>
      //<PersistGate loading={null} persistor={persistor}>
        <GluestackUIProvider mode='light'>
          <TabNavigator />
          <StatusBar style="auto" />
        </GluestackUIProvider>
      //</PersistGate>
    //</Provider>
  )
}
