import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const proyectos = [
  {
    id: '1',
    titulo: 'Aplicación de navegación',
    descripcion: 'Proyecto básico usando Drawer, Tabs y Stack Navigator.',
    tecnologia: 'React Native y Expo',
  },
  {
    id: '2',
    titulo: 'Portafolio profesional',
    descripcion: 'Aplicación móvil para mostrar información personal y proyectos.',
    tecnologia: 'React Native',
  },
  {
    id: '3',
    titulo: 'Lista de tareas',
    descripcion: 'Aplicación simple para practicar listas y componentes visuales.',
    tecnologia: 'JavaScript',
  },
];

export default function CatalogScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis proyectos</Text>

      <Text style={styles.text}>
        Seleccione un proyecto para ver más información.
      </Text>

      <FlatList
        data={proyectos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('DetalleProyecto', {
                proyecto: item,
              })
            }
          >
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardText}>{item.descripcion}</Text>
            <Text style={styles.cardTech}>{item.tecnologia}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: '#444',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 8,
  },
  cardTech: {
    fontSize: 14,
    color: '#0066CC',
    fontWeight: 'bold',
  },
});