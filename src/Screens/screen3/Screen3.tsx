import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {WebView} from 'react-native-webview';
import {useScaling} from '../../Hooks';
import {Spacer} from '../../../UIKIT/lib';

function Screen3({navigation}: any) {
  const {getFullWidth, perfectSize} = useScaling();
  const [back, setBack] = useState(false);
  let WEBVIEW_REF: any;
  // const onNavigationStateChange = (navState: any) => {
  //   console.log('nav change');
  //   setBack(navState.canGoBack);
  // };

  const onBack = () => {
    console.log('back click');
    WEBVIEW_REF.goBack();
    return true;
  };

  const goForword = () => {
    WEBVIEW_REF.goForward();
  };

  const reload = () => {
    WEBVIEW_REF.reload();
  };

  const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `;

  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View pointerEvents={'auto'} style={{flex: 8}}>
        <WebView
          ref={(webView: any) => {
            WEBVIEW_REF = webView;
          }}
          // onNavigationStateChange={onNavigationStateChange}
          style={{width: getFullWidth()}}
          source={{uri: 'http://www.google.com/'}}
          scrollEnabled={true}
          injectedJavaScript={INJECTEDJAVASCRIPT}
          scalesPageToFit={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* <Text>Screen 3</Text> */}

      <View style={{flex: 2}}>
        <View style={{flex: 1 / 2, flexDirection: 'row'}}>
          <Button
            title={'Navigate Next'}
            onPress={() => navigation.navigate('screen4')}
          />
          <Button title={'Navigate Back'} onPress={() => navigation.goBack()} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button title={'Go Back'} onPress={() => onBack()} />
          <Button title={'Go Forword'} onPress={() => goForword()} />
          <Button title={'reload'} onPress={() => reload()} />
        </View>
      </View>
    </View>
  );
}

export default Screen3;
