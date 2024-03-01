import React from 'react';
import {View, ActivityIndicator} from 'react-native';

function Splash(): React.JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator />
    </View>
  );
}

export default Splash;
