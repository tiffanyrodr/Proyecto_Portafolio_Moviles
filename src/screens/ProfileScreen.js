import { View, Text, StyleSheet } from 'react-native';
import { CircleUserRound } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <CircleUserRound color="#2563EB" size={90} strokeWidth={1.8} />
      </View>

      <Text style={styles.title}>Mi Portafolio Profesional</Text>

      <Text style={styles.subtitle}>
        Estudiante de desarrollo móvil
      </Text>

      <Text style={styles.text}>
        Esta aplicación muestra información personal, proyectos realizados y una
        breve descripción profesional.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Objetivo</Text>
        <Text style={styles.cardText}>
          Practicar navegación, diseño de interfaces y componentes básicos en React Native.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
  },
  iconContainer: {
    marginTop: 25,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 17,
    color: '#555',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
});