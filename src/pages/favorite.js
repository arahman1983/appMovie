import React from 'react';
import {View, Text} from 'react-native';
import {Footer} from '../components';

export default function FavoriteScreen({navigation}) {
  return (
    <View>
      <Text>Favorite</Text>
      <Footer navigation={navigation} />
    </View>
  );
}
