import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Footer} from '../components';
import mainStyles from '../utilities/mainStyle';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.mainView}>
      <Header />
      <Text>Home</Text>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: mainStyles.primaryColor,
    flex: 1,
  },
});