import React from 'react';
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import mainStyles from '../utilities/mainStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableHighlight} from 'react-native-gesture-handler';

export default function Footer({navigation}) {
  return (
    <View style={styles.footer}>
      <TouchableHighlight
        style={styles.tabs}
        onPress={() => navigation.navigate('Home')}>
        <Icon name="rocket" size={30} color={mainStyles.primaryColor} />
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.tabs}
        onPress={() => navigation.navigate('Favorite')}>
        <Icon name="rocket" size={30} color={mainStyles.primaryColor} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 50,
    paddingHorizontal: 0,
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  tabs: {
    width: Dimensions.get('window').width / 2,
    backgroundColor: '#FFF',
    color: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    marginEnd: 1,
  },
});
