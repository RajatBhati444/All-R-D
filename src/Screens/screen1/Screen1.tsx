import React, {useState, Fragment, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Clipboard,
  PanResponder,
  ImageBackground,
} from 'react-native';
//@ts-ignore
import AppIntro from 'react-native-app-intro';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

function Screen1({navigation}: any) {
  const [cord, setCord] = useState({height: 79, width: 90});

  useEffect(() => {
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    const addYear = `${date}-${month}`;
    console.log('addYear', addYear);
    const ret = addYear.replace(/-/g, '');
    console.log('return', ret);
  });

  const penrespo = () => {
    const _panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        console.log('onPanResponderGrant', evt, gestureState);
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });

    return (
      <View
        style={{height: 100, width: 100, backgroundColor: '#FF5673'}}
        {..._panResponder.panHandlers}
      />
    );
  };

  const nextBtnHandle = (index: any) => {
    console.log(index);
  };

  const doneBtnHandle = () => {
    // console.log(index);
    navigation.navigate('screen2');
  };

  const onSkipBtnHandle = (index: any) => {
    console.log(index);
  };

  const onSlideChangeHandle = ({index}: any) => {
    console.log(index);
    // console.log(total);
  };

  const pageArray = [
    {
      title: 'Page 1',
      description: 'Description 1',
      img: 'https://goo.gl/Bnc3XP',
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    },
    {
      title: 'Page 2',
      description: 'Description 2',
      img:
        'https://images.pexels.com/photos/3353994/pexels-photo-3353994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    },
    {
      title: 'Page 3',
      description: 'Description 3',
      img:
        'https://images.pexels.com/photos/3257375/pexels-photo-3257375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    },
    {
      title: 'Page 4',
      description: 'Description 4',
      img:
        'https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    },
  ];

  const circleArray = [
    {
      text: '1',
      color: 'grey',
      uri:
        'https://images.pexels.com/photos/3473492/pexels-photo-3473492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      text: '2',
      color: 'red',
      uri:
        'https://images.pexels.com/photos/3467150/pexels-photo-3467150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      text: '3',
      color: 'yellow',
      uri:
        'https://images.pexels.com/photos/3431494/pexels-photo-3431494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      text: '4',
      color: 'blue',
      uri:
        'https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      text: '+',
      color: 'green',
      uri:
        'https://images.pexels.com/photos/3433004/pexels-photo-3433004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      blur: true,
    },
  ];

  useEffect(() => {
    Clipboard.getString();
  }, []);

  const buttonClick = () => {
    navigation.navigate('screen2');
  };

  return (
    // <AppIntro
    //   onNextBtnClick={(index: any) => {
    //     nextBtnHandle(index);
    //   }}
    //   onDoneBtnClick={doneBtnHandle}
    //   onSkipBtnClick={(index: any) => {
    //     onSkipBtnHandle(index);
    //   }}
    //   onSlideChange={({index, total}: any) => {
    //     onSlideChangeHandle(index);
    //   }}
    //   pageArray={pageArray}
    // />
    <View
      style={{
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {penrespo()}
      <Button title={'Navigate'} onPress={() => buttonClick()} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#423BFA', '#5495D2', '#29D7F7']}
        style={{height: 100, width: 200, opacity: 0.9}}>
        <Image
          style={{flex: 1, opacity: 0.2}}
          source={{
            uri:
              'https://images.pexels.com/photos/3431494/pexels-photo-3431494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
      </LinearGradient>
      <Text
        suppressHighlighting={true}
        selectionColor={'white'}
        selectable={true}>
        hey therer hey therer hey therer hey there
      </Text>
      <Icon size={100} name="ios-more" />
      <View style={{flexDirection: 'row'}}>
        {circleArray.map(item => {
          return (
            <ImageBackground
              blurRadius={item.blur ? 5 : 0}
              style={{
                height: 80,
                width: 80,
                borderRadius: 60,
                backgroundColor: item.color,
                overflow: 'hidden',
                justifyContent: 'center',
                marginLeft: -30,
                alignItems: 'center',
              }}
              source={{uri: item.uri}}>
              <Text
                style={{color: 'white', fontSize: item.text == '+' ? 50 : 30}}>
                {item.text}
              </Text>
            </ImageBackground>
          );
        })}
      </View>
    </View>
  );
}

export default Screen1;
