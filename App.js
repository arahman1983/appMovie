import React from 'react';
import {
  SafeAeaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {HomeScreen, DetailsScreen, FavoriteScreen} from './src/pages';
import mainStyles from './src/utilities/mainStyle';
// const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={mainStyles.primaryColor} />
      <SafeAeaView style={styles.mainView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>dfsdfsdf</Text>
          {/* <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
              <Stack.Screen name="Favorite" component={FavoriteScreen} />
            </Stack.Navigator>
          </NavigationContainer> */}
        </ScrollView>
      </SafeAeaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: mainStyles.primaryColor,
    flex: 1,
  },
});

export default App;
