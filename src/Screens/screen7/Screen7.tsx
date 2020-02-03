import React from 'react';
import {View, Button, Alert} from 'react-native';

function Screen7() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{height: 300, width: 300}}>
        <Button onPress={() => Alert.alert('1')} title={'button 1'}>
          <Button onPress={() => Alert.alert('1')} title={'button 2'}></Button>
        </Button>
      </View>
    </View>
  );
}

export default Screen7;
