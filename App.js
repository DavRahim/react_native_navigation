import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/SettingScreen";
import CourseListScreen from "./screens/CourseList";
import ProfileScreen from "./screens/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarLabelPosition: 'below-icon', tabBarShowLabel: true, tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'red'} }>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarLabel: 'My Profile',
                tabBarIcon: ({color}) =>(<Ionicons name="person" size={20} color={color}/>),
                tabBarBadge: 3,

            }}/>
            <Tab.Screen name="Course List" component={CourseListScreen}/>
            <Tab.Screen name="Setting" component={SettingsScreen}/>
            <Tab.Screen name="About Stack" component={AboutStack} options={{
                headerShown: false
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
        
    );
};
