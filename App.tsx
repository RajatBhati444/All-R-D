import React, {useEffect} from 'react';
import AppTheme from './src/Config/AppTheme';
import AppSwitchNavigator from './src/Navigations/AppSwitchNavigator';
import NavigationService from './src/Navigations/NavigationService';
import {ThemeProvider} from './UIKIT/lib';
import firebase from 'react-native-firebase';
import {BackHandler, Alert} from 'react-native';
// import analytics from '@react-native-firebase/analytics';
// import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
function App() {
  // componentWillUnmount() {
  //   this.backHandler.remove()
  // }

  const handleBackPress = () => {
    Alert.alert('hy');
    // BackHandler.exitApp();
  };

  useEffect(() => {
    // BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    try {
      firebase.analytics().logEvent('product_view', {
        id: '123456789',
        color: 'red',
        via: 'ProductCatalog',
      });
      const a = firebase.analytics();
      console.log('console analyt', a);
      firebase.analytics().setCurrentScreen('App', 'screen');

      firebase.analytics().setAnalyticsCollectionEnabled(true);
      firebase.analytics().setSessionTimeoutDuration(10000);
      firebase.analytics().setUserId('12'),
        firebase.analytics().setUserProperty('account_balance', 'bacalce'),
        firebase.analytics().setUserProperties({prop: ''});
      firebase.analytics().resetAnalyticsData();
    } catch (error) {
      console.log('catch error::', error);
    }
  }, []);

  return (
    <ThemeProvider value={AppTheme}>
      <AppSwitchNavigator
        // hNavigator
        ref={navigatorRef =>
          NavigationService.setTopLevelNavigator(navigatorRef)
        }
      />
    </ThemeProvider>
  );
}

export default App;
