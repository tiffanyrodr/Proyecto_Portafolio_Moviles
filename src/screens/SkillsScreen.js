import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SkillsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Habilidades</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Desarrollo móvil</Text>
        <Text style={styles.item}>• React Native básico</Text>
        <Text style={styles.item}>• Expo</Text>
        <Text style={styles.item}>• Componentes funcionales</Text>
        <Text style={styles.item}>• Manejo de Hooks como useState</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Navegación</Text>
        <Text style={styles.item}>• Bottom Tabs</Text>
        <Text style={styles.item}>• Stack Navigator</Text>
        <Text style={styles.item}>• Drawer Navigator</Text>
        <Text style={styles.item}>• Paso de datos entre pantallas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Diseño UI/UX</Text>
        <Text style={styles.item}>• Uso de Flexbox</Text>
        <Text style={styles.item}>• Tarjetas visuales</Text>
        <Text style={styles.item}>• Espaciados y colores consistentes</Text>
        <Text style={styles.item}>• Interfaces simples y adaptables</Text>
      </View>
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
    marginBottom: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
  },
});