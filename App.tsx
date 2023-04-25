import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={[styles.container]}>
      <Text>Home Screen</Text>
      <Button
        title="Details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
      <Button
        title="No Header"
        onPress={() => {
          navigation.navigate('NoHeader');
        }}
      />
      <Button
        title="Interactive Header"
        onPress={() => {
          navigation.navigate('InteractiveHeader');
        }}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={[styles.container]}>
      <Text>Details Screen</Text>
    </View>
  );
}

function NoHeaderScreen({navigation}) {
  return (
    <View style={[styles.container]}>
      <Text>No Header Screen</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

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
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{...defaultHeaderOptions}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{...defaultHeaderOptions}}
        />
        <Stack.Screen
          name="NoHeader"
          component={NoHeaderScreen}
          options={{...defaultHeaderOptions, headerShown: false}}
        />
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
