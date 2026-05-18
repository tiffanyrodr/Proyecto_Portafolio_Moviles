import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { proyecto } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{proyecto.titulo}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Descripción</Text>
        <Text style={styles.text}>{proyecto.descripcion}</Text>

        <Text style={styles.label}>Tecnología utilizada</Text>
        <Text style={styles.text}>{proyecto.tecnologia}</Text>

        <Text style={styles.label}>Rol</Text>
        <Text style={styles.text}>{proyecto.rol}</Text>

        <Text style={styles.label}>Fecha</Text>
        <Text style={styles.text}>{proyecto.fecha}</Text>

        <Text style={styles.label}>Detalle</Text>
        <Text style={styles.text}>{proyecto.detalle}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver a proyectos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
    lineHeight: 23,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});