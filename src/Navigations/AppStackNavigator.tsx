import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from '../Screens/screen1/Screen1';
import Screen2 from '../Screens/screen2/Screen2';
import Screen3 from '../Screens/screen3/Screen3';
import Screen4 from '../Screens/screen4/Screen4';
import Screen5 from '../Screens/screen5/Screen5';
import Screen6 from '../Screens/screen6/Screen6';
import AppHeader from '../Components/Shared/AppHeader';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import DeckSwiper from '../Screens/deckSwiper/DeckSwiper';
import Screen7 from '../Screens/screen7/Screen7';

Icon.loadFont();
const AppStackNavigator = createStackNavigator(
  {
    screen1: {
      screen: Screen1,
      navigationOptions: {
        header: AppHeader,
        headerTitle: 'Screen 1',
        headerLeft: (
          // <View />
          <Icon style={{paddingLeft: 40}} size={50} name="ios-more" />
        ),
      },
    },
    screen2: {
      screen: Screen2,
      navigationOptions: {
        header: AppHeader,
        headerTitle: 'Screen 2',
      },
    },
    screen3: {
      screen: Screen3,
      navigationOptions: {
        header: AppHeader,
        headerTitle: 'Screen 3',
      },
    },
    screen4: {
      screen: Screen4,
      navigationOptions: {
        header: AppHeader,
        headerTitle: 'Screen 4',
      },
    },
    screen5: {
      screen: Screen5,
      navigationOptions: {
        header: AppHeader,
        headerTitle: 'Screen 5',
      },
    },
    screen6: {
      screen: Screen6,
      navigationOptions: {
        header: AppHeader,
        headerTitle: 'Screen 6',
      },
    },
    deckSwiper: {
      screen: DeckSwiper,
      navigationOptions: {
        header: AppHeader,
        headerTitle: 'DeckSwiper',
      },
    },
    screen7: {
      screen: Screen7,
      navigationOptions: {
        header: AppHeader,
        headerTitle: 'Screen 7',
      },
    },
  },
  {
    initialRouteName: 'screen1',
    headerMode: 'float',
  },
);

export default AppStackNavigator;
