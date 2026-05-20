import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CircleUserRound } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.iconContainer}>
        <CircleUserRound color="#2563EB" size={95} strokeWidth={1.8} />
      </View>

      <Text style={styles.title}>Tiffany Rodríguez</Text>

      <Text style={styles.subtitle}>
        Estudiante de Desarrollo Móvil
      </Text>

      <Text style={styles.text}>
        Soy estudiante de Ingeniería Industrial en la Universidad de Costa Rica
        (UCR) y actualmente curso el Técnico en Desarrollo de Aplicaciones en el
        Tecnológico de Costa Rica (TEC).

        {'\n\n'}

        Me interesa el desarrollo de aplicaciones móviles, el diseño de
        interfaces y la creación de experiencias funcionales y agradables para
        el usuario.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Objetivo profesional</Text>

        <Text style={styles.cardText}>
          Seguir aprendiendo React Native, Expo y buenas prácticas de diseño
          móvil para crear aplicaciones útiles y bien estructuradas.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sobre este portafolio</Text>

        <Text style={styles.cardText}>
          Esta aplicación presenta mi perfil, habilidades y proyectos mediante
          navegación con Tabs, Drawer y Stack.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
  },

  iconContainer: {
    marginTop: 20,
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 17,
    color: '#2563EB',
    fontWeight: '600',
    marginBottom: 18,
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#374151',
    marginBottom: 22,
    lineHeight: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 14,
    width: '100%',
    marginBottom: 16,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },

  cardText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
  },
});