import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Info, Globe, Heart } from 'lucide-react-native';

import TabNavigator from './TabNavigator';
import AboutScreen from '../screens/AboutScreen';
import ExplorerStack from './ExplorerStack';
import FavoritesScreen from '../screens/FavoritesScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#2563EB',
        drawerInactiveTintColor: '#444444',
      }}
    >
      <Drawer.Screen
        name="Portafolio"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Explorador"
        component={ExplorerStack}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Globe color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Favoritos"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Heart color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Acerca de"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Info color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
