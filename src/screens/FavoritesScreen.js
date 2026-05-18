import { View, Text, StyleSheet } from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil profesional</Text>

      <Text style={styles.text}>
        Nombre: Tiffany Rodríguez
      </Text>

      <Text style={styles.text}>
        Área de interés: Desarrollo móvil
      </Text>

      <Text style={styles.text}>
        Habilidades:
      </Text>

      <Text style={styles.item}>• React Native básico</Text>
      <Text style={styles.item}>• Expo</Text>
      <Text style={styles.item}>• Navegación entre pantallas</Text>
      <Text style={styles.item}>• Diseño de interfaces móviles</Text>
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
    marginBottom: 12,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
});