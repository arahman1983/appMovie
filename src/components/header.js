import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import mainStyles from '../utilities/mainStyle';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>sdfsdf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    padding: 10,
    width: Dimensions.get('window').width,
    borderBottomColor: mainStyles.secondaryColor,
    borderBottomWidth: 0.5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
