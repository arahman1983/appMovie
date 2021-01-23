import React from 'react';
import {View, Text} from 'react-native';
import {Footer} from '../components';

export default function DetailsScreen({navigation}) {
  return (
    <View>
      <Text>Details</Text>
      <Footer navigation={navigation} />
    </View>
  );
}
