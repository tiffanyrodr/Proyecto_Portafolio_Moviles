import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Folder, User } from 'lucide-react-native';

import HomeScreen from '../screens/ProfileScreen';
import ProjectsStack from './CatalogStack';
import AboutPortfolioScreen from '../screens/FavoritesScreen';

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
        component={HomeScreen}
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
        name="Perfil"
        component={AboutPortfolioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}