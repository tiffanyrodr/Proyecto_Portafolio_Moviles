import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { proyecto } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{proyecto.titulo}</Text>

      <Text style={styles.label}>Descripción:</Text>
      <Text style={styles.text}>{proyecto.descripcion}</Text>

      <Text style={styles.label}>Tecnología utilizada:</Text>
      <Text style={styles.text}>{proyecto.tecnologia}</Text>

      <Text style={styles.label}>Detalle:</Text>
      <Text style={styles.text}>
        Este proyecto forma parte del portafolio profesional interactivo y permite
        demostrar conocimientos básicos de navegación y diseño móvil.
      </Text>

      <Button
        title="Volver a proyectos"
        onPress={() => navigation.goBack()}
      />
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
    marginBottom: 25,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
    lineHeight: 23,
  },
});