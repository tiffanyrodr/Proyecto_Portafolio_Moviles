import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Info } from 'lucide-react-native';

import TabNavigator from './TabNavigator';
import AboutScreen from '../screens/AboutScreen';

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