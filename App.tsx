import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function InteractiveHeaderScreen({navigation}) {
  const [headerShown, setHeaderShown] = React.useState(true);

  return (
    <View style={[styles.container]}>
      <Text>Interactive Header Screen</Text>
      <Button
        title={headerShown ? 'Hide Header' : 'Show Header'}
        onPress={() => {
          navigation.setOptions({headerShown: !headerShown});
          setHeaderShown(!headerShown);
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const defaultHeaderOptions = {
  // headerStyle: {
  //   backgroundColor: 'red',
  // },
  headerBackground: () => <View style={styles.header} />,
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InteractiveHeader">
        <Stack.Screen
          name="InteractiveHeader"
          component={InteractiveHeaderScreen}
          options={{...defaultHeaderOptions}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default App;
