import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de la aplicación</Text>

      <Text style={styles.text}>
        Esta aplicación fue realizada como parte del Laboratorio 1 de navegación.
      </Text>

      <Text style={styles.text}>
        También funciona como avance del Proyecto Programado 1, el cual consiste en
        crear un portafolio profesional interactivo.
      </Text>

      <Text style={styles.item}>• Drawer Navigator: menú lateral</Text>
      <Text style={styles.item}>• Bottom Tab Navigator: menú inferior</Text>
      <Text style={styles.item}>• Stack Navigator: vista de detalle</Text>
      <Text style={styles.item}>• FlatList: lista de proyectos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 23,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
});