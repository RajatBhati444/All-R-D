import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import useActiveTheme from '../Themes/useActiveTheme';

function Loader() {
  const Theme = useActiveTheme();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} color={Theme.color.primary} />
    </View>
  );
}

export default Loader;
