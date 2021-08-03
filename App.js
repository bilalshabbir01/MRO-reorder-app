import { View } from 'react-native';
import Splash from './src/screen/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from 'react'
import SecondScreen from './src/screen/SecondScreen';
import AllData from './src/screen/AllData';
import Filters from './src/screen/Filters';
import LabEquip from './src/screen/LabEquip';
import Ppe from './src/screen/PPE.js';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
import FilterScreen from './src/screen/FilterScreen';


const AppStack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      // <View style={{flex:1}}>
      //   <AllData />
      // </View>
      <Provider store={store}>
        <NavigationContainer>
          <AppStack.Navigator>
            <AppStack.Screen name="MRO" component={Splash} />
            <AppStack.Screen name="MRO Items" component={SecondScreen} />
            <AppStack.Screen name="All Data" component={AllData} />
            <AppStack.Screen name="Filters" component={Filters} />
            <AppStack.Screen name="Lab Equipment" component={LabEquip} />
            <AppStack.Screen name="PPE" component={Ppe} />
            <AppStack.Screen name="Filter Items" component={FilterScreen} />
          </AppStack.Navigator>
        </NavigationContainer>
      </Provider>


    )
  }
}

export default App


