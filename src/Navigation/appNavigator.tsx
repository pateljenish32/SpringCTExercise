import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import AddEmployee from '../Screens/AddEmployee';

const mainStack = createStackNavigator();

function MainStackNavigator({}: any) {
  return (
    <NavigationContainer>
      <mainStack.Navigator>
        <mainStack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="Home"
          component={Home}
          options={{headerLeft: () => null}}
        />
        <mainStack.Screen name="AddEmployee" component={AddEmployee} />
      </mainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
