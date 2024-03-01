import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Splash from './src/screens/splash';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Splash />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
