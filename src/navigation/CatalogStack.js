import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CatalogScreen from '../screens/CatalogScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function CatalogStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ListaProyectos"
        component={CatalogScreen}
      />

      <Stack.Screen
        name="DetalleProyecto"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}