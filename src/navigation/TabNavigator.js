import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Folder, User } from 'lucide-react-native';

import ProfileScreen from '../screens/ProfileScreen';
import ProjectsStack from './ProjectsStack';
import SkillsScreen from '../screens/SkillsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#777777',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Proyectos"
        component={ProjectsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Folder color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Habilidades"
        component={SkillsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}