import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const proyectosIniciales = [
  {
    id: '1',
    titulo: 'Portafolio Profesional Interactivo',
    descripcion: 'Aplicación móvil para mostrar perfil, habilidades y proyectos.',
    tecnologia: 'React Native, Expo y React Navigation',
    fecha: '2026',
    rol: 'Desarrolladora móvil',
    detalle:
      'Este proyecto permite practicar navegación con Tabs, Drawer y Stack, además de listas con FlatList y diseño responsive con Flexbox.',
  },
  {
    id: '2',
    titulo: 'Aplicación de Navegación',
    descripcion: 'Proyecto práctico para aprender navegación entre pantallas.',
    tecnologia: 'React Native y Expo',
    fecha: '2026',
    rol: 'Estudiante desarrolladora',
    detalle:
      'Aplicación enfocada en el uso de diferentes tipos de navegación, organización de componentes y estructura básica de un proyecto móvil.',
  },
  {
    id: '3',
    titulo: 'Lista de Tareas',
    descripcion: 'Aplicación sencilla para organizar actividades personales.',
    tecnologia: 'JavaScript y React Native',
    fecha: '2026',
    rol: 'Desarrolladora frontend',
    detalle:
      'Proyecto simulado para practicar componentes visuales, manejo de datos locales y diseño de tarjetas en una aplicación móvil.',
  },
];

export default function ProjectsScreen({ navigation }) {
  const [proyectos] = useState(proyectosIniciales);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis proyectos</Text>

      <Text style={styles.text}>
        Selecciona un proyecto para ver más información.
      </Text>

      <FlatList
        data={proyectos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
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
    fontSize: 27,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: '#4B5563',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 15,
    color: '#4B5563',
    marginBottom: 8,
    lineHeight: 21,
  },
  cardTech: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: 'bold',
  },
});