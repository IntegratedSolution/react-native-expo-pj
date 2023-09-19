import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import DetailScreen from "@screens/DetailScreen";
import HomeScreen from "@screens/HomeScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalProps } from '../../App';

export type RootStackParamList = {
    Home: undefined;
    Detail:{
        id: number;
    }
}
export type ScreenProps = StackScreenProps<RootStackParamList> & GlobalProps;
const RootStackNavigation = ({globalProps}:{globalProps: GlobalProps})=>{
    // const Stack = createStackNavigator();
    // const Stack = createStackNavigator<RootStackParamList>();
    const Tab = createBottomTabNavigator<RootStackParamList>();


    return(
        <NavigationContainer>
            {/* <Stack.Navigator>
            <Stack.Screen 
                  name="Home" 
                  component={(props:StackScreenProps<RootStackParamList>)=><HomeScreen {...props} {...globalProps}/>} 
                />
                <Stack.Screen 
                  name="Detail" 
                  component={(props:StackScreenProps<RootStackParamList>)=><DetailScreen {...props} {...globalProps}/>} 
                />
            </Stack.Navigator> */}
            <Tab.Navigator
             
             screenOptions={({ route }) => ({
                tabBarLabel:route.name,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName : string = '';
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline';
                  } else if (route.name === 'Detail') {
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons 
                    name={iconName}
                    size={focused?35:28} 
                    color={color} 
                  />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}
            >
                <Tab.Screen 
                options={{ tabBarBadge: 3 }}
                name="Home" 
                component={(props:StackScreenProps<RootStackParamList>)=><HomeScreen {...props} {...globalProps}/>} 
                />
                <Tab.Screen 
                name="Detail" 
                component={(props:StackScreenProps<RootStackParamList>)=><DetailScreen {...props}/>} 
                />
      </Tab.Navigator>
        </NavigationContainer>
    )
}
export default RootStackNavigation;