import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProjectsScreen from '../screens/ProjectsScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function ProjectsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaProyectos"
        component={ProjectsScreen}
        options={{ title: 'Mis proyectos' }}
      />

      <Stack.Screen
        name="DetalleProyecto"
        component={DetailScreen}
        options={{ title: 'Detalle del proyecto' }}
      />
    </Stack.Navigator>
  );
}